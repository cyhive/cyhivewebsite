import { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Loader2, Upload, Trash2, ArrowUpDown, ArrowUp, ArrowDown, Eye } from 'lucide-react';
import { useEffect } from 'react';
import HeroBanner from '@/components/common/HeroBanner';

const AdminAddCertificate = () => {
  const [formData, setFormData] = useState({
    certificateId: '',
    type: 'internship',
    studentName: ''
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });

  // Table Data State
  const [certificates, setCertificates] = useState<any[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' } | null>(null);

  // Preview State
  const [previewCert, setPreviewCert] = useState<any>(null);

  const handlePreview = async (cert: any) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/verify/${cert.type}/${cert.certificateId}`);
      if (response.data.success) {
        setPreviewCert(response.data.data);
      } else {
        alert('Could not fetch certificate details for preview.');
      }
    } catch (err) {
      console.error('Failed to preview certificate:', err);
      alert('Failed to preview certificate.');
    }
  };

  const fetchCertificates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/certificates');
      if (response.data.success) {
        setCertificates(response.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch certificates:', err);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this certificate?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/certificates/${id}`);
      fetchCertificates();
    } catch (err) {
      console.error('Failed to delete certificate:', err);
      alert('Failed to delete certificate.');
    }
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedCertificates = [...certificates].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const internshipCertificates = sortedCertificates.filter(cert => cert.type === 'internship');
  const courseCertificates = sortedCertificates.filter(cert => cert.type === 'course');

  const renderTable = (data: any[], title: string, description: string) => (
    <Card className="shadow-lg border-t-4 border-t-cyhive-600 mt-12">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Label className="text-sm text-gray-500 whitespace-nowrap">Sort By:</Label>
          <select 
            className="border rounded-md px-2 py-1 text-sm bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyhive-500"
            value={sortConfig ? `${sortConfig.key}-${sortConfig.direction}` : ''}
            onChange={(e) => {
              if (e.target.value === '') {
                setSortConfig(null);
                return;
              }
              const [key, direction] = e.target.value.split('-');
              setSortConfig({ key, direction: direction as 'asc' | 'desc' });
            }}
          >
            <option value="">Default (Date Desc)</option>
            <option value="issueDate-desc">Date (Newest First)</option>
            <option value="issueDate-asc">Date (Oldest First)</option>
            <option value="studentName-asc">Name (A-Z)</option>
            <option value="studentName-desc">Name (Z-A)</option>
            <option value="certificateId-asc">ID (Ascending)</option>
            <option value="certificateId-desc">ID (Descending)</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => handleSort('certificateId')}>
                  <div className="flex items-center gap-1">
                    ID {sortConfig?.key === 'certificateId' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />) : <ArrowUpDown className="w-3 h-3 text-gray-400" />}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => handleSort('studentName')}>
                  <div className="flex items-center gap-1">
                    Student Name {sortConfig?.key === 'studentName' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />) : <ArrowUpDown className="w-3 h-3 text-gray-400" />}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => handleSort('issueDate')}>
                  <div className="flex items-center gap-1">
                    Date {sortConfig?.key === 'issueDate' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />) : <ArrowUpDown className="w-3 h-3 text-gray-400" />}
                  </div>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                    No certificates found in this category.
                  </TableCell>
                </TableRow>
              ) : (
                data.map((cert) => (
                  <TableRow key={cert._id}>
                    <TableCell className="font-medium">{cert.certificateId}</TableCell>
                    <TableCell>{cert.studentName}</TableCell>
                    <TableCell>{new Date(cert.issueDate).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handlePreview(cert)} className="text-blue-500 hover:text-blue-700 hover:bg-blue-50" title="Preview Certificate">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(cert._id)} className="text-red-500 hover:text-red-700 hover:bg-red-50" title="Delete Certificate">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        setMessage({ text: 'Please select a valid PDF file.', isError: true });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ text: 'File size should be less than 5MB.', isError: true });
        return;
      }
      setPdfFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile) {
      setMessage({ text: 'Please select a PDF file to upload.', isError: true });
      return;
    }

    setLoading(true);
    setMessage({ text: '', isError: false });

    try {
      // Convert PDF to Base64 String
      const reader = new FileReader();
      reader.readAsDataURL(pdfFile);
      reader.onloadend = async () => {
        const base64String = reader.result;

        const payload = {
          ...formData,
          pdfBase64: base64String
        };

        try {
          const response = await axios.post('http://localhost:5000/api/certificates', payload);
          if (response.data.success) {
            setMessage({ text: 'Certificate added successfully!', isError: false });
            // Reset form
            setFormData({ certificateId: '', type: 'internship', studentName: '' });
            setPdfFile(null);
            const fileInput = document.getElementById('pdfFile') as HTMLInputElement;
            if (fileInput) fileInput.value = '';
            // Refresh list
            fetchCertificates();
          }
        } catch (err: any) {
          setMessage({ 
            text: err.response?.data?.message || 'Failed to add certificate. Please try again.', 
            isError: true 
          });
        } finally {
          setLoading(false);
        }
      };
      
      reader.onerror = () => {
        setMessage({ text: 'Failed to read the file.', isError: true });
        setLoading(false);
      };

    } catch (error) {
      setMessage({ text: 'An unexpected error occurred.', isError: true });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HeroBanner
        title="Admin Dashboard"
        subtitle="Upload and manage CYHIVE certificates"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
        buttonText=""
        buttonLink=""
      />
      
      <section className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg border-t-4 border-t-cyhive-600">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto bg-cyhive-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-cyhive-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Add New Certificate</CardTitle>
                <CardDescription>
                  Enter the certificate details and upload the PDF file below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {message.text && (
                  <div className={`p-4 mb-6 rounded-md text-sm font-medium text-center ${
                    message.isError ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'
                  }`}>
                    {message.text}
                  </div>
                )}

                <Tabs defaultValue="internship" className="w-full" onValueChange={(val) => setFormData({...formData, type: val})}>
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="internship">Internship Certificate</TabsTrigger>
                    <TabsTrigger value="course">Course Certificate</TabsTrigger>
                  </TabsList>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="certificateId">Certificate ID</Label>
                      <Input
                        id="certificateId"
                        name="certificateId"
                        placeholder={formData.type === 'internship' ? "e.g. CY-INT-2024-001" : "e.g. CY-CRS-2024-001"}
                        value={formData.certificateId}
                        onChange={handleInputChange}
                        required
                        disabled={loading}
                      />
                    </div>

                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input
                      id="studentName"
                      name="studentName"
                      placeholder="e.g. John Doe"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pdfFile">PDF Certificate File (Max 5MB)</Label>
                    <Input
                      id="pdfFile"
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={handleFileChange}
                      required
                      disabled={loading}
                      className="cursor-pointer"
                    />
                  </div>

                  {pdfFile && (
                    <div className="space-y-2 animate-in fade-in duration-300">
                      <Label>File Preview</Label>
                      <div className="w-full h-64 border rounded-md overflow-hidden bg-gray-100">
                        <iframe 
                          src={URL.createObjectURL(pdfFile)} 
                          className="w-full h-full"
                          title="Selected PDF Preview"
                        ></iframe>
                      </div>
                    </div>
                  )}

                  <Button type="submit" disabled={loading || !pdfFile} className="w-full bg-gradient-to-r from-cyhive-600 to-indigo-600 hover:from-cyhive-700 hover:to-indigo-700 text-white shadow-md transition-all duration-300">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      'Upload Certificate'
                    )}
                  </Button>
                  </form>
                </Tabs>
              </CardContent>
            </Card>
            {renderTable(internshipCertificates, "Internship Certificates", "Manage your uploaded internship certificates.")}
            {renderTable(courseCertificates, "Course Certificates", "Manage your uploaded course certificates.")}
          </div>
        </div>
      </section>

      {/* Preview Dialog */}
      <Dialog open={!!previewCert} onOpenChange={(open) => !open && setPreviewCert(null)}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Certificate Preview - {previewCert?.studentName}</DialogTitle>
            <DialogDescription>
              Certificate ID: {previewCert?.certificateId} | Type: {previewCert?.type} | Date: {previewCert?.issueDate && new Date(previewCert.issueDate).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow w-full border rounded-lg overflow-hidden bg-gray-100 mt-4">
            {previewCert?.pdfUrl ? (
              <iframe 
                src={previewCert.pdfUrl} 
                className="w-full h-full"
                title="Certificate PDF Preview"
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAddCertificate;
