
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
}

const ServiceCard = ({ title, description, icon, linkTo }: ServiceCardProps) => {
  return (
    <Link 
      to={linkTo}
      className="block group"
    >
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-[-5px]">
        <div className="text-cyhive-purple mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-cyhive-purple transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-center">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
