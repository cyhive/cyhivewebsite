import HeroBanner from '@/components/common/HeroBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Verify = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HeroBanner
        title="Verify Certificate"
        subtitle="Validate your CYHIVE achievements"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
      />
      
      <section className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Certificate Type</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the type of certificate you wish to verify. Make sure you have your unique certificate ID ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Internship Certificate Card */}
            <Link to="/verify/internship" className="block group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-cyhive-500 group-hover:-translate-y-1">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-cyhive-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <BadgeCheck className="w-8 h-8 text-cyhive-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Internship Certificate</CardTitle>
                  <CardDescription className="text-base pt-2">
                    Verify certificates awarded for completing our internship programs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center text-gray-600 py-4">
                  Enter your internship ID to validate the authenticity and details of your experience with CYHIVE.
                </CardContent>
                <CardFooter className="flex justify-center pb-8">
                  <Button className="w-full sm:w-auto bg-cyhive-600 group-hover:bg-cyhive-700 text-white font-medium py-2 px-8 rounded-md transition-colors pointer-events-none">
                    Verify Internship
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            {/* Course Certificate Card */}
            <Link to="/verify/course" className="block group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-cyhive-500 group-hover:-translate-y-1">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-cyhive-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-8 h-8 text-cyhive-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Course Certificate</CardTitle>
                  <CardDescription className="text-base pt-2">
                    Verify certificates earned through our specialized training courses.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center text-gray-600 py-4">
                  Enter your course completion ID to validate your skills and achievements learned at CYHIVE.
                </CardContent>
                <CardFooter className="flex justify-center pb-8">
                  <Button className="w-full sm:w-auto bg-cyhive-600 group-hover:bg-cyhive-700 text-white font-medium py-2 px-8 rounded-md transition-colors pointer-events-none">
                    Verify Course
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verify;
