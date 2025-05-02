
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

// About Section Routes
import Founder from "./pages/about/Founder";
import Anthem from "./pages/about/Anthem";
import VisionMission from "./pages/about/VisionMission";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          
          {/* About section routes */}
          <Route path="/about/founder" element={<Founder />} />
          <Route path="/about/anthem" element={<Anthem />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/school" element={<NotFound />} />
          <Route path="/about/history" element={<NotFound />} />
          <Route path="/about/ethos" element={<NotFound />} />
          <Route path="/about/spirit" element={<NotFound />} />
          <Route path="/about/information" element={<NotFound />} />
          <Route path="/about/child-safety" element={<NotFound />} />
          <Route path="/about/route-plan" element={<NotFound />} />
          <Route path="/about/facilities" element={<NotFound />} />
          <Route path="/about/transactions" element={<NotFound />} />
          <Route path="/about/ex-principals" element={<NotFound />} />
          <Route path="/about/faculty" element={<NotFound />} />
          <Route path="/about/pta" element={<NotFound />} />

          {/* Message Routes */}
          <Route path="/message/principal" element={<NotFound />} />
          <Route path="/message/headmistress" element={<NotFound />} />
          <Route path="/message/president" element={<NotFound />} />
          
          {/* School Routes */}
          <Route path="/school/calendar" element={<NotFound />} />
          <Route path="/school/diary" element={<NotFound />} />
          <Route path="/school/curriculum" element={<NotFound />} />
          <Route path="/school/admin-info" element={<NotFound />} />
          <Route path="/school/exams" element={<NotFound />} />
          <Route path="/school/uniform" element={<NotFound />} />
          <Route path="/school/booklist" element={<NotFound />} />
          
          {/* Achievements Routes */}
          <Route path="/achievements/academic" element={<NotFound />} />
          <Route path="/achievements/sports" element={<NotFound />} />
          <Route path="/achievements/cbse-x" element={<NotFound />} />
          <Route path="/achievements/cbse-xii" element={<NotFound />} />
          
          {/* Gallery Routes */}
          <Route path="/gallery/photos" element={<NotFound />} />
          <Route path="/gallery/assemblies" element={<NotFound />} />
          <Route path="/gallery/activities" element={<NotFound />} />
          <Route path="/gallery/media" element={<NotFound />} />
          <Route path="/gallery/vocational" element={<NotFound />} />
          <Route path="/gallery/sports" element={<NotFound />} />
          <Route path="/gallery/community" element={<NotFound />} />
          
          {/* Publications Routes */}
          <Route path="/publications/magazine" element={<NotFound />} />
          <Route path="/publications/newsdesk" element={<NotFound />} />
          <Route path="/publications/newsletter" element={<NotFound />} />
          
          {/* Alumni Routes */}
          <Route path="/alumni/sjoba" element={<NotFound />} />
          
          {/* Jobs Routes */}
          <Route path="/jobs/advertisement" element={<NotFound />} />
          <Route path="/jobs/expectations" element={<NotFound />} />
          
          {/* Contact Routes */}
          <Route path="/contact/mail" element={<NotFound />} />
          <Route path="/contact/join" element={<NotFound />} />
          <Route path="/contact/guest-book" element={<NotFound />} />
          
          {/* Downloads Routes */}
          <Route path="/downloads/forms" element={<NotFound />} />
          <Route path="/downloads/circulars" element={<NotFound />} />
          
          {/* Quick Links Routes */}
          <Route path="/kids-corner" element={<NotFound />} />
          <Route path="/campus-tour" element={<NotFound />} />
          <Route path="/assemblies" element={<NotFound />} />
          <Route path="/sports" element={<NotFound />} />
          <Route path="/e-care" element={<NotFound />} />
          <Route path="/community" element={<NotFound />} />
          <Route path="/activities" element={<NotFound />} />
          <Route path="/child-safety" element={<NotFound />} />
          <Route path="/grievance" element={<NotFound />} />
          
          {/* Catch-all routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
