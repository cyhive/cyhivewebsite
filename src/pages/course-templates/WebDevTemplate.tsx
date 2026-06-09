
import { useParams } from 'react-router-dom';
import HeroBanner from '@/components/common/HeroBanner';
import RegistrationForm from '@/components/forms/RegistrationForm';

// Define the data for different web development courses
const webDevData = {
  python: {
    title: "Full Stack Python Development",
    description: "A comprehensive web development program covering HTML, CSS, JavaScript, Bootstrap, MySQL, Python, Django, and React to help you become a full stack Python developer.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    technologies: [
      { name: "HTML", description: "Structure of web pages" },
      { name: "CSS", description: "Styling and layout of web pages" },
      { name: "JavaScript", description: "Dynamic client-side programming" },
      { name: "Bootstrap", description: "Responsive front-end framework" },
      { name: "MySQL", description: "Relational database management" },
      { name: "Python", description: "Backend programming language" },
      { name: "Django", description: "Python web framework" },
      { name: "React", description: "Frontend JavaScript library" }
    ],
    features: [
      "Hands-on project-based learning",
      "Industry-relevant curriculum",
      "Portfolio development",
      "Personalized mentoring",
      "Job placement assistance"
    ],
    duration: "12 Weeks",
    level: "Beginner to Advanced"
  },
  mern: {
    title: "MERN Stack Development",
    description: "Master the popular MERN stack (MongoDB, Express.js, React, Node.js) and build modern, responsive web applications using JavaScript throughout the entire development stack.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    technologies: [
      { name: "MongoDB", description: "NoSQL database" },
      { name: "Express.js", description: "Backend web application framework" },
      { name: "React", description: "Frontend JavaScript library" },
      { name: "Node.js", description: "JavaScript runtime environment" },
      { name: "HTML5", description: "Latest HTML standard" },
      { name: "CSS3", description: "Modern CSS styling" },
      { name: "Redux", description: "State management" },
      { name: "RESTful APIs", description: "API development" }
    ],
    features: [
      "Full JavaScript stack learning",
      "Real-world projects",
      "Modern development practices",
      "Code reviews and mentoring",
      "Deployment strategies"
    ],
    duration: "10 Weeks",
    level: "Intermediate to Advanced"
  },
  java: {
    title: "Full Stack Java Development",
    description: "Learn full stack development using Java, Spring Boot, Hibernate, and modern frontend technologies like React to build enterprise-grade applications.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    technologies: [
      { name: "Java", description: "Backend programming language" },
      { name: "Spring Boot", description: "Java framework" },
      { name: "Hibernate", description: "ORM framework" },
      { name: "MySQL", description: "Relational database" },
      { name: "HTML", description: "Web markup language" },
      { name: "CSS", description: "Styling language" },
      { name: "JavaScript", description: "Client-side scripting" },
      { name: "React", description: "Frontend JavaScript library" }
    ],
    features: [
      "Enterprise-level development skills",
      "Microservices architecture",
      "RESTful API design",
      "Testing and debugging",
      "DevOps practices"
    ],
    duration: "14 Weeks",
    level: "Intermediate to Advanced"
  }
};

const WebDevTemplate = () => {
  const { type } = useParams<{ type: keyof typeof webDevData }>();
  
  // Default to Python if type is not found
  const courseInfo = type && webDevData[type] ? webDevData[type] : webDevData.python;

  return (
    <div>
      <HeroBanner
        title={courseInfo.title}
        subtitle="Comprehensive Web Development Training"
        backgroundImage={courseInfo.image}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
              
              <p className="text-gray-700 mb-10">
                {courseInfo.description}
              </p>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-6">Technologies You'll Learn</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {courseInfo.technologies.map((tech, index) => (
                    <div key={index} className="bg-cyhive-light p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-1">{tech.name}</h4>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-6">Course Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courseInfo.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-cyhive-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-6">Course Structure</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Duration</h4>
                      <p>{courseInfo.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Experience Level</h4>
                      <p>{courseInfo.level}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Format</h4>
                      <p>In-person / Online</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Certificate</h4>
                      <p>Yes, upon completion</p>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-gray-800 mb-3">Weekly Schedule</h4>
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="w-24 font-medium">Week 1-2:</div>
                      <div>Fundamentals and Front-end Basics</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-medium">Week 3-4:</div>
                      <div>Advanced Front-end Development</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-medium">Week 5-6:</div>
                      <div>Database Design and Management</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-medium">Week 7-9:</div>
                      <div>Back-end Development</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-medium">Week 10-12:</div>
                      <div>Full Stack Integration and Projects</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Learning Outcomes</h3>
                <p className="text-gray-700 mb-4">
                  By the end of this course, you will be able to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Build complete, responsive web applications from scratch</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Work with databases to store and retrieve data efficiently</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Implement authentication and authorization in web applications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Deploy applications to production environments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Create and consume RESTful APIs</span>
                  </li>
                </ul>
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

export default WebDevTemplate;
