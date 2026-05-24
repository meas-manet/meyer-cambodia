import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                About 
                <span className="text-accent"> Meyer Cambodia</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Meyer Cambodia is the regional branch of Meyer Medical Group, 
                  a globally recognized leader in medical imaging technology. 
                  With decades of innovation and expertise, we bring world-class 
                  dental imaging solutions to the Cambodian market.
                </p>
                
                <p>
                  Our commitment to excellence extends beyond just providing equipment. 
                  We offer comprehensive support, training, and maintenance services 
                  to ensure your dental practice operates at peak efficiency.
                </p>
                
                <p>
                  Trusted by over 20,000 dental clinics worldwide, Meyer's technology 
                  represents the pinnacle of medical imaging innovation, combining 
                  precision, reliability, and user-friendly design.
                </p>
              </div>
              
              <div className="mt-8">
                <Button variant="hero" size="lg" className="px-8">
                  Learn More About Us
                </Button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center glass-card p-8 rounded-2xl">
                  <div className="text-4xl font-bold text-accent mb-2">20,000+</div>
                  <div className="text-muted-foreground">Clinics Worldwide</div>
                </div>
                
                <div className="text-center glass-card p-8 rounded-2xl">
                  <div className="text-4xl font-bold text-accent mb-2">25+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="text-center glass-card p-8 rounded-2xl">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </div>
                
                <div className="text-center glass-card p-8 rounded-2xl">
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-muted-foreground">Technical Support</div>
                </div>
              </div>
              
              <div className="mt-8 p-8 tech-gradient rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Meyer?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Cutting-edge technology</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Comprehensive training programs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Local support in Cambodia</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Proven track record</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;