
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const formsList = [
  {
    name: "Admission Form for Class XI (External)",
    url: "https://www.stjohnschandigarh.com/Admission%20Form%20Class%2011_2025-26FRD.pdf"
  },
  {
    name: "Tentative Annual Planner 2024–25",
    url: "https://www.stjohnschandigarh.com/TENTATIVE_ANNUAL_CALENDAR_2024_25.pdf"
  },
  {
    name: "Affiliation Letter",
    url: "https://www.stjohnschandigarh.com/mpd/1.%20Copy%20of%20Affiliation%20Letter.pdf"
  },
  {
    name: "Society Registration",
    url: "https://www.stjohnschandigarh.com/mpd/SOCIETY%20REGISTRATION.pdf"
  },
  {
    name: "No Objection Certificate",
    url: "https://www.stjohnschandigarh.com/mpd/NO%20OBJECTION%20CERTIFICATE.pdf"
  },
  {
    name: "Recognition Certificate",
    url: "https://www.stjohnschandigarh.com/mpd/RECOGNITION%20CERTIFICATE.pdf"
  },
  {
    name: "Building Safety Certificate",
    url: "https://www.stjohnschandigarh.com/mpd/BUILDING%20SAFETY%20CERTIFICATE.pdf"
  },
  {
    name: "Fire Safety Certificate",
    url: "https://www.stjohnschandigarh.com/mpd/FIRE%20SAFETY%20CERTIFICATE.pdf"
  },
  {
    name: "Water Test Certificate",
    url: "https://www.stjohnschandigarh.com/mpd/WATER%20TEST%20CERTIFICATE.pdf"
  },
  {
    name: "Self-Certification",
    url: "https://www.stjohnschandigarh.com/mpd/SELF%20CERTIFICATION.pdf"
  },
  {
    name: "SMC Members (Aug 2024–25)",
    url: "https://www.stjohnschandigarh.com/SCHOOL%20COMMITTEE%20MEMBERS%20AUGUST_2024-25_.pdf"
  },
  {
    name: "PTA Members List",
    url: "https://www.stjohnschandigarh.com/mpd/LIST%20OF%20PTA%20MEMEBERS1.pdf"
  }
];

const FormsSection = () => {
  const midPoint = Math.ceil(formsList.length / 2);
  const leftColumn = formsList.slice(0, midPoint);
  const rightColumn = formsList.slice(midPoint);

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-stjohns-navy mb-4">Forms & Circulars</h2>
        <p className="text-lg mb-8">Download all official school documents here.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {leftColumn.map((form, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-stjohns-navy">{form.name}</h3>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={form.url} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            {rightColumn.map((form, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-stjohns-navy">{form.name}</h3>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={form.url} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormsSection;
