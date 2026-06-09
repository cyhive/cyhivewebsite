
import HeroBanner from "@/components/common/HeroBanner";
import RegistrationForm from "@/components/forms/RegistrationForm";

const VFX = () => {
  return (
    <div>
      <HeroBanner
        title="Visual Effects (VFX)"
        subtitle="Master the art of creating stunning visual effects for film, television, and digital media"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Visual Effects Training Program</h2>
              
              <p className="text-gray-700 mb-6">
                Our Visual Effects (VFX) program offers comprehensive training in creating spectacular visual effects 
                for film, television, gaming, and digital media. From basic compositing to advanced 3D simulations, 
                you'll learn industry-standard techniques and software used by professionals in leading VFX studios.
                This hands-on course will prepare you for a career in the exciting world of visual effects.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Software You'll Master</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Adobe After Effects" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Adobe After Effects</h4>
                    <p className="text-sm text-gray-600">Motion graphics and compositing</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Blender" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Blender</h4>
                    <p className="text-sm text-gray-600">3D modeling and animation</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Nuke" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Nuke</h4>
                    <p className="text-sm text-gray-600">Professional compositing</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Houdini" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Houdini</h4>
                    <p className="text-sm text-gray-600">3D procedural generation</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="Cinema 4D" className="mx-auto mb-3" />
                    <h4 className="font-semibold">Cinema 4D</h4>
                    <p className="text-sm text-gray-600">3D modeling and motion graphics</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-5 text-center">
                    <img src="https://placehold.co/60x60" alt="DaVinci Resolve" className="mx-auto mb-3" />
                    <h4 className="font-semibold">DaVinci Resolve</h4>
                    <p className="text-sm text-gray-600">Color grading and editing</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3">Fundamentals</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>VFX pipeline and workflow</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Color theory and keying</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Tracking and matchmoving</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Rotoscoping and masking</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3">Advanced Techniques</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Particle systems and simulations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>3D lighting and rendering</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Dynamics and physics simulations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Digital matte painting</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3">Specialized Skills</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-cyhive-light p-4 rounded-lg">
                      <h5 className="font-medium mb-1">Fire and Explosions</h5>
                      <p className="text-sm text-gray-600">Creating realistic pyro effects</p>
                    </div>
                    <div className="bg-cyhive-light p-4 rounded-lg">
                      <h5 className="font-medium mb-1">Fluid Dynamics</h5>
                      <p className="text-sm text-gray-600">Water, smoke and liquid simulations</p>
                    </div>
                    <div className="bg-cyhive-light p-4 rounded-lg">
                      <h5 className="font-medium mb-1">Character Integration</h5>
                      <p className="text-sm text-gray-600">Blending CG with live action</p>
                    </div>
                    <div className="bg-cyhive-light p-4 rounded-lg">
                      <h5 className="font-medium mb-1">Digital Environments</h5>
                      <p className="text-sm text-gray-600">Creating virtual worlds</p>
                    </div>
                    <div className="bg-cyhive-light p-4 rounded-lg">
                      <h5 className="font-medium mb-1">Look Development</h5>
                      <p className="text-sm text-gray-600">Material creation and texturing</p>
                    </div>
                    <div className="bg-cyhive-light p-4 rounded-lg">
                      <h5 className="font-medium mb-1">Photorealistic Rendering</h5>
                      <p className="text-sm text-gray-600">Creating realistic CG elements</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Projects You'll Create</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">VFX Shot Recreation</h4>
                      <p className="text-gray-600">
                        Recreate a famous VFX shot from a blockbuster film using industry techniques.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Environmental Integration</h4>
                      <p className="text-gray-600">
                        Composite CG elements into live-action footage with realistic lighting and shadows.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">FX Simulation</h4>
                      <p className="text-gray-600">
                        Create a realistic simulation of natural phenomena like fire, water, or destruction.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Short Film VFX</h4>
                      <p className="text-gray-600">
                        Collaborative project to create VFX for a short film as part of a production team.
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
                    <p>16 Weeks</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Schedule</h4>
                    <p>Full-time / Part-time options</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Level</h4>
                    <p>Intermediate to Advanced</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Requirements</h4>
                    <p>High-performance computer required</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <RegistrationForm courseTitle="Visual Effects (VFX)" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VFX;
