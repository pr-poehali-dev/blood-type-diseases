
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiseaseHeader from "@/components/DiseaseHeader";
import TabNavigation from "@/components/diseases/TabNavigation";
import DiseaseCategory from "@/components/diseases/DiseaseCategory";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { diseaseTabs, getTabByValue } from "@/data/diseaseData";

const Diseases = () => {
  const [activeTab, setActiveTab] = useState("cardiovascular");
  const currentTab = getTabByValue(activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <DiseaseHeader 
        title="Заболевания, связанные с группой крови"
        description="Группа крови может влиять на риск развития определенных заболеваний из-за генетических особенностей
        и факторов взаимодействия с окружающей средой. Ниже представлена подробная информация о связи
        групп крови с различными патологиями."
      />
      
      <div className="container mx-auto pb-8 flex-grow">
        <Tabs defaultValue="cardiovascular" className="w-full" onValueChange={setActiveTab}>
          <TabNavigation items={diseaseTabs.map(tab => ({
            value: tab.value,
            label: tab.label,
            shortLabel: tab.shortLabel,
            icon: tab.icon
          }))} />
          
          {diseaseTabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value}>
              <DiseaseCategory
                title={tab.categories.title}
                description={tab.categories.description}
                icon={tab.icon}
                iconColor={tab.categories.iconColor}
                items={tab.categories.items}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Diseases;
