import { Link } from "react-router-dom";
import { DropletIcon, HomeIcon, ActivityIcon, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <DropletIcon className="h-8 w-8 text-red-600 mr-2" />
          <h1 className="text-2xl font-bold text-primary">ГемоЗдоровье</h1>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center">
              <HomeIcon className="h-4 w-4 mr-2" />
              Главная
            </Link>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link to="/diseases" className="flex items-center">
              <ActivityIcon className="h-4 w-4 mr-2" />
              Заболевания
            </Link>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link to="/about" className="flex items-center">
              <InfoIcon className="h-4 w-4 mr-2" />
              О проекте
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
