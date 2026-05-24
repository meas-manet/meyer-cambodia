import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to transform your dental practice? Contact our team for 
              personalized consultation and equipment recommendations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-200">
                      Phnom Penh, Cambodia<br />
                      Street 271, Sangkat Toul Tompong<br />
                      Khan Chamkar Mon
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-200">
                      +855 23 123 456<br />
                      +855 12 345 678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-200">
                      info@meyercambodia.com<br />
                      support@meyercambodia.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-200">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="First Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                    <Input 
                      placeholder="Last Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                  </div>
                  
                  <Input 
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  
                  <Input 
                    placeholder="Phone Number"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  
                  <Input 
                    placeholder="Clinic/Organization Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  
                  <Textarea 
                    placeholder="How can we help you? Please describe your needs..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  
                  <Button variant="glass" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;