
import HeroBanner from "@/components/common/HeroBanner";
import RegistrationForm from "@/components/forms/RegistrationForm";

const FrontendDev = () => {
  return (
    <div>
      <HeroBanner
        title="Front-end Development"
        subtitle="Create beautiful, interactive user interfaces with modern technologies"
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Learn Front-end Development</h2>
              
              <p className="text-gray-700 mb-6">
                Our Front-end Development program teaches you how to create beautiful, responsive, and interactive user interfaces 
                using modern technologies and best practices. Whether you're looking to start a career as a front-end developer 
                or want to enhance your existing development skills, this program will help you master the essential tools and techniques.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Technologies You'll Learn</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-cyhive-light p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">HTML5</h4>
                    <p className="text-gray-600">Modern markup language for structuring web content</p>
                  </div>
                  <div className="bg-cyhive-light p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">CSS3</h4>
                    <p className="text-gray-600">Advanced styling with flexbox, grid, and animations</p>
                  </div>
                  <div className="bg-cyhive-light p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">JavaScript</h4>
                    <p className="text-gray-600">Dynamic programming for interactive websites</p>
                  </div>
                  <div className="bg-cyhive-light p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">React</h4>
                    <p className="text-gray-600">Building user interfaces with components</p>
                  </div>
                  <div className="bg-cyhive-light p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Tailwind CSS</h4>
                    <p className="text-gray-600">Utility-first CSS framework for rapid UI development</p>
                  </div>
                  <div className="bg-cyhive-light p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Responsive Design</h4>
                    <p className="text-gray-600">Creating websites that work on all devices</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What You'll Build</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Personal Portfolio</h4>
                      <p className="text-gray-600">
                        Create a responsive personal portfolio website to showcase your projects and skills.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">E-commerce Interface</h4>
                      <p className="text-gray-600">
                        Build a responsive e-commerce product page with filtering and cart functionality.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Interactive Dashboard</h4>
                      <p className="text-gray-600">
                        Develop a data visualization dashboard with interactive charts and widgets.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Social Media App</h4>
                      <p className="text-gray-600">
                        Create a social media interface with React, featuring posts, comments, and likes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Duration</h4>
                    <p>8 Weeks</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Schedule</h4>
                    <p>Flexible / Part-time</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Level</h4>
                    <p>Beginner to Intermediate</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Prerequisites</h4>
                    <p>Basic computer knowledge</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <RegistrationForm courseTitle="Front-end Development" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontendDev;
