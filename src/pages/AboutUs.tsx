
import HeroBanner from '@/components/common/HeroBanner';

const AboutUs = () => {
  return (
    <div>
      <HeroBanner
        title="About CYHIVE"
        subtitle="Learning, Innovation, Excellence"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                alt="CYHIVE Office" 
                className="rounded-lg shadow-lg mb-6 w-full"
              />
              
              <p className="text-gray-700 mb-6">
                Founded in 2015, CYHIVE began with a simple mission: to bridge the gap between academic learning and industry requirements. 
                Our founders, a group of tech professionals and educators, recognized the need for practical, hands-on training that would 
                prepare students for the real challenges of the tech industry.
              </p>
              
              <p className="text-gray-700 mb-6">
                What started as a small training center with just three courses has now grown into a comprehensive IT services company 
                offering a wide range of internships, development services, and specialized training programs. Throughout our journey, 
                our focus has remained consistent – delivering quality education and services that make a tangible difference in our 
                students' and clients' success.
              </p>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-center">Our Vision & Mission</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-cyhive-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be a global leader in IT education and services, empowering individuals to innovate and excel in the ever-evolving 
                  technology landscape.
                </p>
              </div>
              
              <div className="bg-cyhive-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To provide accessible, high-quality tech education and services that bridge the gap between academic knowledge and 
                  industry requirements, fostering a community of lifelong learners and tech innovators.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-cyhive-purple text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new technologies and teaching methodologies to provide cutting-edge learning experiences.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-cyhive-purple text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from our curricula to our development projects.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-cyhive-purple text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive learning community where students and professionals can connect and grow together.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="text-center">
                  <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold mb-1">Team Member {i}</h3>
                  <p className="text-gray-600 text-sm mb-2">Position Title</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-500 hover:text-cyhive-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-cyhive-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
