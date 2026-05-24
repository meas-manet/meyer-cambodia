const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Meyer Cambodia</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of advanced dental imaging solutions in Cambodia. 
              Part of the global Meyer Medical Group family, trusted by healthcare 
              professionals worldwide.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Meyer Cambodia. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Service</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-accent transition-colors">Dental CBCT</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Intraoral Scanner</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Panoramic Machine</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mobile CT</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Meyer Cambodia is a subsidiary of Meyer Medical Group
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">meyercambodia.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;