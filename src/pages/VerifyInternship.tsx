import HeroBanner from '@/components/common/HeroBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BadgeCheck, Loader2 } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const VerifyInternship = () => {
  const [internshipId, setInternshipId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [certificateData, setCertificateData] = useState<any>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(`http://localhost:5000/api/verify/internship/${internshipId}`);
      if (response.data.success) {
        setCertificateData(response.data.data);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Verification failed. Please check the ID and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HeroBanner
        title="Verify Internship"
        subtitle="Validate your CYHIVE internship certificate"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
      />
      
      <section className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <Card className="shadow-lg border-t-4 border-t-cyhive-500">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto bg-cyhive-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BadgeCheck className="w-8 h-8 text-cyhive-600" />
                </div>
                <CardTitle className="text-3xl font-bold">Internship Certificate</CardTitle>
                <CardDescription className="text-base pt-2">
                  Please enter your unique internship ID to view and verify your certificate details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {certificateData ? (
                  <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium mb-6 flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5" />
                      Certificate Verified
                    </div>
                    <p className="mb-2 text-gray-700">Name: <span className="font-semibold">{certificateData.studentName}</span></p>
                    <p className="mb-6 text-gray-700">Issue Date: <span className="font-semibold">{new Date(certificateData.issueDate).toLocaleDateString()}</span></p>
                    
                    <div className="w-full h-[600px] border rounded-lg overflow-hidden bg-gray-100">
                      <iframe 
                        src={certificateData.pdfUrl} 
                        className="w-full h-full"
                        title="Internship Certificate PDF"
                      ></iframe>
                    </div>
                    
                    <Button 
                      onClick={() => setCertificateData(null)} 
                      variant="outline" 
                      className="mt-6"
                    >
                      Verify Another Certificate
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleVerify} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center border border-red-200">
                        {error}
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="internshipId" className="text-base font-medium">
                        Internship ID
                      </Label>
                      <Input
                        id="internshipId"
                        type="text"
                        placeholder="e.g., CY-INT-2024-XXXX"
                        value={internshipId}
                        onChange={(e) => setInternshipId(e.target.value)}
                        required
                        className="w-full text-lg py-6"
                        disabled={loading}
                      />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-cyhive-600 to-indigo-600 hover:from-cyhive-700 hover:to-indigo-700 text-white shadow-md font-medium py-6 text-lg rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                      {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                      {loading ? 'Verifying...' : 'Verify Now'}
                    </Button>
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex justify-center border-t mt-6 pt-6 text-sm text-gray-500 text-center">
                If you have trouble finding your internship ID, please check the email you received upon completion or contact support.
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyInternship;
