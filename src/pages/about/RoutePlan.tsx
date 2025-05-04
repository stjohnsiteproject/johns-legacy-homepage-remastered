
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, AlertTriangle } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RoutePlan = () => {
  const busRoutes = [
    {
      routeNumber: "Route 1",
      areas: "Sector 7, 8, 9, Madhya Marg",
      stops: [
        { location: "Sector 7 Market", morningTime: "6:45 AM", afternoonTime: "2:30 PM" },
        { location: "Sector 8 Gurudwara", morningTime: "6:55 AM", afternoonTime: "2:40 PM" },
        { location: "Sector 9 Market", morningTime: "7:05 AM", afternoonTime: "2:50 PM" }
      ]
    },
    {
      routeNumber: "Route 2",
      areas: "Sector 10, 11, 15, PGI",
      stops: [
        { location: "PGI Gate", morningTime: "6:40 AM", afternoonTime: "2:35 PM" },
        { location: "Sector 11 Market", morningTime: "6:50 AM", afternoonTime: "2:45 PM" },
        { location: "Sector 15 Park", morningTime: "7:00 AM", afternoonTime: "2:55 PM" }
      ]
    },
    {
      routeNumber: "Route 3",
      areas: "Sector 16, 17, 18, 19",
      stops: [
        { location: "Sector 17 Plaza", morningTime: "6:45 AM", afternoonTime: "2:40 PM" },
        { location: "Sector 18 Market", morningTime: "6:55 AM", afternoonTime: "2:50 PM" },
        { location: "Sector 19 Gurudwara", morningTime: "7:05 AM", afternoonTime: "3:00 PM" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="Bus Route Plan" 
          backgroundImage="/images/100.jpg"
          altText="St. John's High School Bus Routes"
          icon={<MapPin className="h-8 w-8" />}
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-serif text-stjohns-navy">School Transport Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose lg:prose-lg max-w-none">
                <p>
                  St. John's High School provides safe and reliable transportation for students across Chandigarh. 
                  Our fleet of buses follows carefully planned routes with designated stops to ensure convenient access for all students.
                </p>
                
                <div className="bg-stjohns-navy/5 p-6 rounded-lg mt-6">
                  <div className="flex items-start mb-4">
                    <Phone className="h-5 w-5 text-stjohns-navy mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-serif text-stjohns-navy mb-2">Transport Contact Information</h3>
                      <p className="mb-0">
                        <strong>Transport In-charge:</strong> Mr. Rajinder Singh<br />
                        <strong>Phone:</strong> 0172-2791700<br />
                        <strong>Mobile:</strong> +91-9876543210<br />
                        <strong>Email:</strong> transport@stjohnschandigarh.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-serif text-stjohns-navy mb-4">Bus Routes & Schedule</h2>
                <p className="text-gray-700">
                  Below are the detailed bus routes with stop locations and timings. Please note that buses may arrive 5 minutes before or after the scheduled time due to traffic conditions.
                </p>
              </div>
              
              <div className="mb-10">
                <div className="flex items-center mb-4 bg-yellow-50 p-4 rounded border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                  <p className="text-sm text-yellow-800 mb-0">
                    <strong>Important:</strong> Students should be at their designated bus stops at least 5 minutes before the scheduled pickup time. 
                    The bus will not wait beyond the scheduled time.
                  </p>
                </div>
              </div>
              
              <Tabs defaultValue="route1">
                <TabsList className="mb-6">
                  <TabsTrigger value="route1">Route 1</TabsTrigger>
                  <TabsTrigger value="route2">Route 2</TabsTrigger>
                  <TabsTrigger value="route3">Route 3</TabsTrigger>
                </TabsList>
                
                {busRoutes.map((route, index) => (
                  <TabsContent key={index} value={`route${index + 1}`}>
                    <div className="bg-stjohns-navy/5 p-4 rounded-lg mb-4">
                      <h3 className="text-lg font-medium text-stjohns-navy">
                        {route.routeNumber} - {route.areas}
                      </h3>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Stop Location</TableHead>
                            <TableHead>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                Morning Pickup
                              </div>
                            </TableHead>
                            <TableHead>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                Afternoon Drop-off
                              </div>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {route.stops.map((stop, stopIndex) => (
                            <TableRow key={stopIndex}>
                              <TableCell className="font-medium">{stop.location}</TableCell>
                              <TableCell>{stop.morningTime}</TableCell>
                              <TableCell>{stop.afternoonTime}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
              
              <div className="mt-10">
                <h3 className="text-xl font-serif text-stjohns-navy mb-4">Guidelines for Parents & Students</h3>
                
                <ul className="space-y-2 text-gray-700">
                  <li>Students must carry their bus passes at all times.</li>
                  <li>Parents should inform the transport in-charge in case of any change in pickup or drop-off arrangements.</li>
                  <li>Students should board and exit the bus in an orderly manner.</li>
                  <li>In case of emergency, please contact the transport in-charge immediately.</li>
                  <li>Bus routes and timings may be adjusted if necessary. Parents will be notified in advance of any changes.</li>
                </ul>
                
                <div className="mt-8 text-center">
                  <div className="inline-block bg-stjohns-navy/10 px-6 py-3 rounded-lg">
                    <p className="text-sm font-medium mb-0">
                      A detailed route plan map is available in the school office and on the student portal.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoutePlan;
