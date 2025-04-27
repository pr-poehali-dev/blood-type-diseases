
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} ГемоЗдоровье. Информация на сайте предоставлена в образовательных целях.</p>
        <p className="mt-2 text-sm">Проконсультируйтесь с врачом для получения медицинской консультации.</p>
      </div>
    </footer>
  );
};

export default Footer;
