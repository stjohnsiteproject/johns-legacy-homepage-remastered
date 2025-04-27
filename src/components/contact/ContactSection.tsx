
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock } from "lucide-react"

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-stjohns-navy mb-8">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">Address</h3>
                <p>St. John's High School, Sector 26, Chandigarh, India</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-stjohns-navy" />
                <p>+91-172-2792577</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-stjohns-navy" />
                <p>stjohnschandigarh@gmail.com</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-stjohns-navy" />
                  <h3 className="font-semibold">Office Hours</h3>
                </div>
                <p>Monday–Friday: 8:00 AM – 2:00 PM</p>
                <p>Saturday: 8:00 AM – 12:00 Noon</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div className="mt-8 h-64 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Google Map Embed</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <textarea 
                  className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <Button>Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
