
import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface DiseaseCategoryProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  items: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
  }>;
}

const DiseaseCategory: React.FC<DiseaseCategoryProps> = ({
  title,
  description,
  icon: Icon,
  iconColor,
  items
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon className={`h-6 w-6 mr-2 ${iconColor}`} />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default DiseaseCategory;
