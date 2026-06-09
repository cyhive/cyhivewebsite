
import { Link } from 'react-router-dom';
import HeroBanner from '@/components/common/HeroBanner';
import ServiceCard from '@/components/common/ServiceCard';
import { Button } from '@/components/ui/button';
import { Briefcase, Code, Smartphone, Image, Film } from 'lucide-react';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBanner
        title="Empower Your Tech Journey with CYHIVE"
        subtitle="Providing professional IT training, internships, and development services for tomorrow's tech leaders"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="CYHIVE Workspace" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">About CYHIVE</h2>
              <p className="text-gray-700 mb-6">
                CYHIVE is a leading IT services provider specializing in professional training, internships, 
                and development solutions. Our mission is to bridge the gap between academic knowledge 
                and industry requirements, empowering students and professionals to excel in today's 
                competitive tech landscape.
              </p>
              <Link to="/about">
                <Button className="bg-cyhive-purple hover:bg-cyhive-darkpurple text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of IT services and training programs to help you achieve your goals,
              whether you're looking to learn new skills or need expert development assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Internships"
              description="Gain practical experience with our industry-focused internship programs in AI, Python, Data Structures, and Networking."
              icon={<Briefcase size={48} />}
              linkTo="/services/internship/ai"
            />
            
            <ServiceCard
              title="Web Development"
              description="Expert web development services and training in Full Stack Python, MERN stack, and Full Stack Java."
              icon={<Code size={48} />}
              linkTo="/services/webdev/python"
            />
            
            <ServiceCard
              title="Mobile App Development"
              description="Create cutting-edge mobile applications with our development services and mobile app training programs."
              icon={<Smartphone size={48} />}
              linkTo="/services/mobile"
            />
            
            <ServiceCard
              title="Graphic Design"
              description="Transform your visual identity with professional graphic design services and comprehensive design training."
              icon={<Image size={48} />}
              linkTo="/services/graphic"
            />
            
            <ServiceCard
              title="VFX"
              description="Learn industry-standard visual effects techniques or get professional VFX services for your projects."
              icon={<Film size={48} />}
              linkTo="/services/vfx"
            />
            
            <div className="bg-cyhive-light rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-3 text-cyhive-dark">Ready to get started?</h3>
              <p className="text-gray-600 mb-5 text-center">
                Contact us today to learn more about our services and how we can help you achieve your goals.
              </p>
              <Link to="/contact">
                <Button className="bg-cyhive-purple hover:bg-cyhive-darkpurple text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what some of our students and clients have to say about their experience with CYHIVE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">Student {i}</h4>
                    <p className="text-sm text-gray-500">Python Internship</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The internship program at CYHIVE was incredibly valuable. I gained practical skills that helped me land my dream job in tech. The instructors are knowledgeable and supportive."
                </p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyhive-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of learners and professionals to advance your skills and career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-cyhive-purple hover:bg-cyhive-darkpurple text-white px-6 py-2">
                Contact Us
              </Button>
            </Link>
            <Link to="/services/internship/ai">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cyhive-dark px-6 py-2">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
