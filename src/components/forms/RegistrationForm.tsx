
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RegistrationFormProps {
  courseTitle: string;
}

const RegistrationForm = ({ courseTitle }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: 'beginner',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log("Registration submitted:", { course: courseTitle, ...formData });
    
    toast({
      title: "Registration Successful!",
      description: "We'll contact you shortly with next steps.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      experience: 'beginner',
      message: ''
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Register for {courseTitle}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="your@email.com"
            required
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
            Educational Background
          </label>
          <Input
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Your highest qualification"
            required
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Experience Level
          </label>
          <Select 
            value={formData.experience} 
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Why are you interested in this course? (Optional)
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your interest in this course"
            className="w-full"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-cyhive-purple hover:bg-cyhive-darkpurple text-white"
        >
          Submit Registration
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
