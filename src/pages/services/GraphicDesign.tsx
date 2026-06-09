
import HeroBanner from "@/components/common/HeroBanner";
import RegistrationForm from "@/components/forms/RegistrationForm";

const GraphicDesign = () => {
  return (
    <div>
      <HeroBanner
        title="Graphic Design"
        subtitle="Unleash your creativity with professional graphic design training"
        backgroundImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Graphic Design Program</h2>
              
              <p className="text-gray-700 mb-6">
                Our comprehensive Graphic Design program will help you develop the technical skills and creative thinking 
                needed to excel in the visual communication industry. Whether you're looking to start a career in graphic 
                design or enhance your existing skills, this course provides hands-on training with industry-standard tools 
                and techniques used by professional designers.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Software You'll Master</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Adobe Photoshop" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Adobe Photoshop</h4>
                    <p className="text-sm text-gray-600">Image editing and manipulation</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Adobe Illustrator" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Adobe Illustrator</h4>
                    <p className="text-sm text-gray-600">Vector graphics and illustrations</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Adobe InDesign" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Adobe InDesign</h4>
                    <p className="text-sm text-gray-600">Layout and publication design</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Figma" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Figma</h4>
                    <p className="text-sm text-gray-600">UI/UX and collaborative design</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Adobe XD" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Adobe XD</h4>
                    <p className="text-sm text-gray-600">Prototyping and interface design</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="After Effects" className="mx-auto mb-3" />
                    <h4 className="font-semibold">After Effects</h4>
                    <p className="text-sm text-gray-600">Motion graphics and animation</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-lg">Design Fundamentals</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Color theory and psychology</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Typography and font selection</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Composition and layout principles</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Visual hierarchy and balance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-lg">Professional Applications</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Brand identity design</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Print and digital media design</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>User interface design</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Motion graphics and animation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Projects You'll Create</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Brand Identity Package</h4>
                      <p className="text-gray-600">
                        Create a complete brand identity including logo, color palette, and style guide.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Marketing Collateral</h4>
                      <p className="text-gray-600">
                        Design promotional materials including posters, flyers, and social media graphics.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">UI/UX Design Project</h4>
                      <p className="text-gray-600">
                        Design a mobile app or website interface with user experience in mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Duration</h4>
                    <p>12 Weeks</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Schedule</h4>
                    <p>Flexible / Part-time Available</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Level</h4>
                    <p>Beginner to Intermediate</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Requirements</h4>
                    <p>Computer with Adobe Creative Cloud</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <RegistrationForm courseTitle="Graphic Design" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;
