
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Admissions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[30vh] md:h-[40vh]">
          <div className="absolute inset-0">
            <img 
              src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/100.jpg" 
              alt="St. John's High School Campus" 
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair">
              Admissions & Fee Structure
            </h1>
          </div>
        </section>

        <div className="container-custom py-12">
          {/* Admissions Process Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-stjohns-navy mb-6">
              Admissions Process
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-lg mb-6">
                St. John's High School, Chandigarh admits students from Nursery to Class XI depending on vacancies. 
                Admission to Nursery is done through draw of lots as per government guidelines. The school follows 
                the CBSE curriculum and has well-defined procedures and timelines for every stage. Kindly follow 
                official updates on the school website for forms and deadlines. All admissions are subject to the 
                rules framed by the Directorate of Education, Chandigarh Administration.
              </p>
              <Button className="bg-stjohns-gold hover:bg-stjohns-gold/90 text-white">
                Apply Online
              </Button>
            </div>
          </section>

          {/* Fee Structure Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-stjohns-navy mb-6">
              Fee Structure
            </h2>
            
            {/* Desktop Table View (Hidden on Mobile) */}
            <div className="hidden md:block mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Class</TableHead>
                    <TableHead className="font-bold">Admission Fee</TableHead>
                    <TableHead className="font-bold">Annual Charges</TableHead>
                    <TableHead className="font-bold">Monthly Tuition</TableHead>
                    <TableHead className="font-bold">Additional Charges</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Nursery</TableCell>
                    <TableCell>₹25,000</TableCell>
                    <TableCell>₹11,000</TableCell>
                    <TableCell>₹4,100</TableCell>
                    <TableCell>—</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Classes I–X</TableCell>
                    <TableCell>₹25,000 (New Admissions Only)</TableCell>
                    <TableCell>₹11,000</TableCell>
                    <TableCell>₹4,100</TableCell>
                    <TableCell>—</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Class XI</TableCell>
                    <TableCell>₹25,000 (New Admissions Only)</TableCell>
                    <TableCell>₹12,000</TableCell>
                    <TableCell>₹4,500</TableCell>
                    <TableCell>Science Lab Charges: ₹1,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {/* Mobile Card View (Shown only on Mobile) */}
            <div className="grid md:hidden gap-6">
              <Card>
                <CardHeader className="bg-stjohns-navy text-white">
                  <CardTitle>Nursery</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Admission Fee:</span>
                      <span>₹25,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Annual Charges:</span>
                      <span>₹11,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Monthly Tuition:</span>
                      <span>₹4,100</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="bg-stjohns-navy text-white">
                  <CardTitle>Classes I–X</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Admission Fee:</span>
                      <span>₹25,000 (New Admissions Only)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Annual Charges:</span>
                      <span>₹11,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Monthly Tuition:</span>
                      <span>₹4,100</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="bg-stjohns-navy text-white">
                  <CardTitle>Class XI</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Admission Fee:</span>
                      <span>₹25,000 (New Admissions Only)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Annual Charges:</span>
                      <span>₹12,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Monthly Tuition:</span>
                      <span>₹4,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Science Lab Charges:</span>
                      <span>₹1,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Important Notes Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-stjohns-navy mb-6">
              Important Notes
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <ul className="list-disc pl-5 space-y-2">
                <li>Fees are payable quarterly in advance.</li>
                <li>Late fee fine of ₹100 applies after the due date.</li>
                <li>No refund of admission charges under any circumstance.</li>
                <li>Online fee portal details are shared via official communication.</li>
              </ul>
            </div>
          </section>
          
          {/* Call to Action Section */}
          <section className="mb-12">
            <div className="bg-stjohns-navy/10 border border-stjohns-navy/20 rounded-lg p-6 flex flex-col md:flex-row items-center gap-4">
              <div className="bg-stjohns-gold rounded-full p-3 flex-shrink-0">
                <PhoneCall className="h-6 w-6 text-white" />
              </div>
              <p className="text-center md:text-left text-lg">
                For Admissions Queries, Contact the School Office at <strong>+91-172-2744950</strong> or visit the campus between <strong>9:00 AM to 12:30 PM</strong> on working days.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
