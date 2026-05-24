import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "🔧",
      title: "Installation & Setup",
      description: "Professional installation and configuration of all dental imaging equipment with comprehensive testing and calibration.",
      features: [
        "On-site professional installation",
        "Equipment calibration and testing",
        "Network integration setup",
        "Initial user training session"
      ]
    },
    {
      icon: "📚",
      title: "Training & Education",
      description: "Comprehensive training programs to ensure your team maximizes the potential of your Meyer equipment.",
      features: [
        "Hands-on equipment training",
        "Digital workflow optimization",
        "Ongoing educational support",
        "Certification programs"
      ]
    },
    {
      icon: "🛠️",
      title: "Technical Support",
      description: "24/7 technical support and maintenance services to keep your equipment running at peak performance.",
      features: [
        "24/7 technical helpdesk",
        "Remote diagnostics",
        "Preventive maintenance",
        "Emergency repair services"
      ]
    },
    {
      icon: "📊",
      title: "Software Solutions",
      description: "Advanced software packages and updates to enhance your diagnostic capabilities and workflow efficiency.",
      features: [
        "Latest software updates",
        "Cloud storage solutions",
        "Practice management integration",
        "Custom reporting tools"
      ]
    },
    {
      icon: "🔄",
      title: "Equipment Upgrade",
      description: "Trade-in programs and upgrade paths to keep your practice at the forefront of dental technology.",
      features: [
        "Trade-in evaluation",
        "Flexible upgrade plans",
        "Technology migration support",
        "Data transfer assistance"
      ]
    },
    {
      icon: "🎯",
      title: "Consultation Services",
      description: "Expert consultation to help you choose the right equipment and optimize your practice workflow.",
      features: [
        "Practice needs assessment",
        "Equipment recommendations",
        "ROI analysis and planning",
        "Workflow optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete support throughout your journey with Meyer equipment. From installation 
            to ongoing maintenance, we're here to ensure your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl card-shadow hover:shadow-2xl smooth-transition bg-card border border-border hover:border-accent/30"
            >
              <div className="text-4xl mb-6 group-hover:animate-bounce">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent smooth-transition">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:variant-medical smooth-transition"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="tech-gradient p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Need Custom Service Solutions?
            </h3>
            <p className="text-xl text-gray-200 mb-6">
              Our team of experts can create tailored service packages to meet 
              your specific practice needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" className="px-8">
                Contact Service Team
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;