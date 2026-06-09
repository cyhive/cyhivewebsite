
import { useParams } from 'react-router-dom';
import HeroBanner from '@/components/common/HeroBanner';
import RegistrationForm from '@/components/forms/RegistrationForm';

// Define the data for different internship types
const internshipData = {
  ai: {
    title: "Artificial Intelligence Internship",
    description: "A 10-day intensive internship program focused on artificial intelligence fundamentals, machine learning algorithms, and practical AI applications.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    topics: [
      "Introduction to AI and Machine Learning",
      "Neural Networks and Deep Learning",
      "Computer Vision Applications",
      "Natural Language Processing",
      "Reinforcement Learning",
      "AI Ethics and Responsible AI",
      "Practical AI Project Implementation"
    ],
    benefits: [
      "Hands-on experience with AI frameworks like TensorFlow and PyTorch",
      "Build an AI-powered application for your portfolio",
      "Learn from industry experts",
      "Certificate of completion",
      "Career guidance and networking opportunities"
    ]
  },
  datastructures: {
    title: "Data Structures Internship",
    description: "A 10-day immersive internship program covering essential data structures concepts, algorithms, and their real-world applications in software development.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    topics: [
      "Arrays and Linked Lists",
      "Stacks and Queues",
      "Trees and Graphs",
      "Hashing and Hash Tables",
      "Sorting and Searching Algorithms",
      "Algorithm Analysis and Big O Notation",
      "Problem-solving with Data Structures"
    ],
    benefits: [
      "Enhance your problem-solving skills",
      "Improve your coding efficiency",
      "Prepare for technical interviews",
      "Certificate of completion",
      "Build projects for your portfolio"
    ]
  },
  python: {
    title: "Python Programming Internship",
    description: "A 10-day comprehensive internship program focusing on Python programming language, its libraries, and practical applications in various domains.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    topics: [
      "Python Fundamentals and Syntax",
      "Object-Oriented Programming in Python",
      "Data Manipulation with NumPy and Pandas",
      "Web Development with Django/Flask",
      "Automation and Scripting",
      "Data Visualization with Matplotlib and Seaborn",
      "Python for Data Science and Machine Learning"
    ],
    benefits: [
      "Build 3+ Python projects for your portfolio",
      "Learn industry best practices",
      "Develop problem-solving skills",
      "Certificate of completion",
      "Guidance on Python career paths"
    ]
  },
  networking: {
    title: "Computer Networking Internship",
    description: "A 10-day practical internship program covering computer networking fundamentals, protocols, network security, and hands-on configuration experience.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    topics: [
      "Networking Fundamentals",
      "TCP/IP Protocol Suite",
      "Network Configuration and Troubleshooting",
      "Router and Switch Configuration",
      "Network Security and Firewalls",
      "Cloud Networking",
      "Network Performance Optimization"
    ],
    benefits: [
      "Hands-on experience with networking equipment",
      "Learn to set up and secure networks",
      "Understand cloud networking concepts",
      "Certificate of completion",
      "Prepare for networking certifications"
    ]
  }
};

const InternshipTemplate = () => {
  const { type } = useParams<{ type: keyof typeof internshipData }>();
  
  // Default to AI if type is not found
  const courseInfo = type && internshipData[type] ? internshipData[type] : internshipData.ai;

  return (
    <div>
      <HeroBanner
        title={courseInfo.title}
        subtitle="10-Day Intensive Internship Program"
        backgroundImage={courseInfo.image}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About This Internship</h2>
              
              <p className="text-gray-700 mb-6">
                {courseInfo.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <ul className="space-y-2">
                  {courseInfo.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Internship Benefits</h3>
                <ul className="space-y-2">
                  {courseInfo.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Internship Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Duration</h4>
                    <p>10 Days (40 Hours)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Mode</h4>
                    <p>In-person / Online</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Certificate</h4>
                    <p>Yes, upon completion</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Prerequisites</h4>
                    <p>Basic programming knowledge</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <RegistrationForm courseTitle={courseInfo.title} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipTemplate;
