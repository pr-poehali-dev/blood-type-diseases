
import React from "react";
import { LucideIcon } from "lucide-react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabItem {
  value: string;
  label: string;
  icon: LucideIcon;
  shortLabel: string;
}

interface TabNavigationProps {
  items: TabItem[];
}

const TabNavigation: React.FC<TabNavigationProps> = ({ items }) => {
  return (
    <TabsList className="grid grid-cols-2 md:grid-cols-5 max-w-4xl mx-auto mb-8">
      {items.map((item) => (
        <TabsTrigger key={item.value} value={item.value} className="flex items-center gap-2">
          <item.icon className="h-4 w-4" />
          <span className="hidden md:inline">{item.label}</span>
          <span className="md:hidden">{item.shortLabel}</span>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default TabNavigation;
