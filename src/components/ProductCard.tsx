import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  isReversed?: boolean;
}

const ProductCard = ({ title, description, image, features, isReversed = false }: ProductCardProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-20`}>
      {/* Image */}
      <div className="lg:w-1/2 animate-slide-in-left">
        <div className="relative group">
          <img 
            src={image} 
            alt={title}
            className="w-full h-80 object-cover rounded-2xl card-shadow group-hover:shadow-2xl smooth-transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl group-hover:from-primary/30 smooth-transition"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="lg:w-1/2 animate-slide-in-right">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          {title}
        </h3>
        
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button variant="medical" size="lg" className="px-8">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;