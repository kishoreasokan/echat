import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

export type Tab = {
  name: string;
  value: string;
  icon?: ReactNode;
  content: ReactNode;
};

interface BaseTabsProps {
  showIcon?: boolean;
  tabs: Tab[];
}

export default function BaseTabs({ showIcon = true, tabs }: BaseTabsProps) {
  return (
    <Tabs defaultValue={tabs[0]?.value} className="w-full">
      <TabsList className="p-1">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="px-2.5 sm:px-3"
          >
            <code className="flex items-center gap-1 text-[13px] [&>svg]:h-4 [&>svg]:w-4">
              {showIcon && tab.icon}
              {tab.name}
            </code>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="border rounded-md p-3">
            {tab.content}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
