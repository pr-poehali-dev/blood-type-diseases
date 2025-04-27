
import React from "react";

interface SectionContentProps {
  mainText: string;
  features?: {
    title: string;
    items: string[];
  };
  additionalSections?: Array<{
    title: string;
    content: string | React.ReactNode;
  }>;
}

const DiseaseSectionContent: React.FC<SectionContentProps> = ({
  mainText,
  features,
  additionalSections
}) => {
  return (
    <div className="space-y-4">
      <p>{mainText}</p>
      
      {features && (
        <>
          <h4 className="font-semibold mt-4">{features.title}:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {features.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {additionalSections && additionalSections.map((section, index) => (
        <React.Fragment key={index}>
          <h4 className="font-semibold mt-4">{section.title}:</h4>
          {typeof section.content === "string" ? (
            <p>{section.content}</p>
          ) : (
            section.content
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DiseaseSectionContent;
