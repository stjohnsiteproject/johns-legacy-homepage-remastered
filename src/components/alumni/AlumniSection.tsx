
import { Button } from "@/components/ui/button"

const AlumniSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-stjohns-navy mb-4">
          St. John's Old Boys' Association (SJOBA)
        </h2>
        <p className="text-lg mb-8">
          Our distinguished alumni continue to make us proud. Learn more about membership and events.
        </p>
        
        <Button className="bg-stjohns-navy hover:bg-stjohns-navy/90" asChild>
          <a href="#" className="inline-flex items-center">
            Visit SJOBA Portal
          </a>
        </Button>
      </div>
    </section>
  );
};

export default AlumniSection;
