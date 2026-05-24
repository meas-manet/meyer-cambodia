import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-black/20 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>Meyer Cambodia</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className={`transition-colors hover:text-accent ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className={`transition-colors hover:text-accent ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className={`transition-colors hover:text-accent ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              Service
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className={`transition-colors hover:text-accent ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={`transition-colors hover:text-accent ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              Contact
            </button>
            <Button variant="medical" onClick={() => scrollToSection("contact")}>
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;