
import HeroBanner from "@/components/common/HeroBanner";
import RegistrationForm from "@/components/forms/RegistrationForm";

const MobileAppDev = () => {
  return (
    <div>
      <HeroBanner
        title="Mobile App Development"
        subtitle="Build cutting-edge mobile applications for iOS and Android"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Mobile App Development Program</h2>
              
              <p className="text-gray-700 mb-6">
                Learn to create powerful, feature-rich mobile applications for iOS and Android platforms. Our Mobile App 
                Development program covers all aspects of mobile development, from UI/UX design to backend integration and 
                app store deployment. Whether you're interested in native or cross-platform development, this course will 
                give you the skills to bring your app ideas to life.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3">iOS Development</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Swift programming language</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>UIKit and SwiftUI</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Core Data and iCloud</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>App Store submission process</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3">Android Development</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Kotlin programming language</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Android Studio and Jetpack Compose</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Room Database and Firebase</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyhive-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Google Play Store deployment</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3">Cross-Platform Development</h4>
                  <p className="mb-4">Learn to build once and deploy on multiple platforms with these frameworks:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-1">React Native</h5>
                      <p className="text-sm text-gray-600">JavaScript-based mobile framework</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-1">Flutter</h5>
                      <p className="text-sm text-gray-600">Dart-based UI toolkit from Google</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-1">Ionic</h5>
                      <p className="text-sm text-gray-600">Web technology-based framework</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Projects You'll Build</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Social Networking App</h4>
                      <p className="text-gray-600">
                        Build a full-featured social app with user profiles, posts, and real-time messaging.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">E-commerce Mobile App</h4>
                      <p className="text-gray-600">
                        Create a shopping app with product browsing, cart functionality, and payment integration.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Fitness Tracking App</h4>
                      <p className="text-gray-600">
                        Develop an app that uses device sensors to track user activities and provide insights.
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
                    <p>10 Weeks</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Mode</h4>
                    <p>In-person / Online</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Prerequisites</h4>
                    <p>Basic programming knowledge</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Equipment</h4>
                    <p>Personal laptop required</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <RegistrationForm courseTitle="Mobile App Development" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDev;
