
import React from "react";

interface DiseaseHeaderProps {
  title: string;
  description: string;
}

const DiseaseHeader: React.FC<DiseaseHeaderProps> = ({ title, description }) => {
  return (
    <div className="container mx-auto py-8 flex-grow">
      <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto text-center">
        {description}
      </p>
    </div>
  );
};

export default DiseaseHeader;
