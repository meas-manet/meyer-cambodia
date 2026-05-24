import ProductCard from "./ProductCard";
import dentalCBCT from "@/assets/dental-cbct.jpg";
import intraoralScanner from "@/assets/intraoral-scanner.jpg";
import panoramicMachine from "@/assets/panoramic-machine.jpg";
import mobileCT from "@/assets/mobile-ct.jpg";

const ProductsSection = () => {
  const products = [
    {
      title: "Meyer Dental CBCT",
      description: "The reliable choice of 20,000+ dental clinics worldwide. Our advanced CBCT technology provides exceptional image quality with reduced radiation exposure.",
      image: dentalCBCT,
      features: [
        "High-resolution 3D imaging",
        "Low radiation exposure",
        "Fast scanning times",
        "User-friendly interface",
        "Comprehensive diagnostic capabilities"
      ]
    },
    {
      title: "Intraoral Scanner",
      description: "Efficient assistant for digital dental clinics. Transform your practice with precise digital impressions and streamlined workflows.",
      image: intraoralScanner,
      features: [
        "True color digital impressions",
        "Real-time scanning feedback",
        "Cloud-based data management",
        "Seamless CAD/CAM integration",
        "Lightweight ergonomic design"
      ]
    },
    {
      title: "2D Panoramic Machine",
      description: "Meet the operational needs of startup clinics with reliable, cost-effective panoramic imaging solutions.",
      image: panoramicMachine,
      features: [
        "Crystal clear panoramic images",
        "Automatic exposure control",
        "Compact design for small spaces",
        "Easy operation and maintenance",
        "Excellent value for investment"
      ]
    },
    {
      title: "Mobile Head CT",
      description: "Effortlessly adaptable to multiple scenarios. Portable CT technology for maximum flexibility in dental diagnostics.",
      image: mobileCT,
      features: [
        "Full mobility and portability",
        "Advanced CT imaging technology",
        "Multi-scenario applications",
        "Remote diagnostics capability",
        "Emergency response ready"
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Product
            <span className="text-accent"> Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of advanced dental imaging equipment, 
            designed to elevate your practice and improve patient care.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              features={product.features}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;