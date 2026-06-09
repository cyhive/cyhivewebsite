
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroBanner = ({ 
  title, 
  subtitle, 
  backgroundImage,
  buttonText = "Learn More",
  buttonLink = "/contact"
}: HeroBannerProps) => {
  return (
    <div 
      className="relative bg-cover bg-center py-24 md:py-32" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` 
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in">
          {subtitle}
        </p>
        {buttonText && buttonLink && (
          <Link to={buttonLink}>
            <Button className="bg-cyhive-purple hover:bg-cyhive-darkpurple text-white px-8 py-3 rounded-md text-lg animate-fade-in">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
