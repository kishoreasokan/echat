import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";

import CarouselPlugin from "@/components/carousel";
import QuickLinksMenu  from "@/components/quick-menu";
import BaseTabs, {Tab} from "@/components/base-tabs"
import { ShieldCheck , Stamp , Archive  } from "lucide-react";
import Employee from "./Employee"

const tabItems: Tab[] = [
  {
    name: "Admin",
    value: "Admin",
    icon: <ShieldCheck />,
    content: (
      <div className="flex items-center justify-between gap-2">
        <code className="text-[13px]">tests content</code>
        <button className="bg-muted px-2 py-1 rounded text-xs">Copy</button>
      </div>
    ),
  },
  {
    name: "Stamp",
    value: "Stamp",
    icon: <Stamp />,
    content: <div>Stamp details </div>,
  },
  {
    name: "Custodian",
    value: "Custodian",
    icon: <Archive />,
    content: (
      <div className="text-sm text-muted-foreground">
       Custodian
      </div>
    ),
  },
];

const tableData = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "Editor" },
  { id: 4, name: "David", role: "Admin" },
  { id: 5, name: "Eva", role: "User" },
  { id: 6, name: "Frank", role: "Editor" },
  { id: 7, name: "Grace", role: "User" },
];


const Dashboard: React.FC = () => {
  return (
    <div className="m-4 p-8 h-full">
      {/* Search Box */}
      <div className="flex space-x-4 mb-8">
        {/* First Input */}
        <div className="flex items-center border rounded-lg overflow-hidden w-1/2">
          <input
            type="text"
            placeholder="Enter Stamp Number..."
            className="pl-2 py-1 focus:outline-none focus:ring-2 focus:rounded-lg w-full"
          />
          <div className="p-2 bg-gray-200">
            <Search className="text-cyan-700" />
          </div>
        </div>

        {/* Second Input */}
        <div className="flex items-center border rounded-lg overflow-hidden w-1/2">
          <QuickLinksMenu />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-4">
        {/* Card 1 */}
        <Card className="flex-1 min-w-[300px]">
          <CardHeader>Card 1</CardHeader>
          <CardContent>
           <BaseTabs tabs={tabItems} showIcon/>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="flex-1 min-w-[300px]">
          <CardHeader>Card 2</CardHeader>
          <CardContent>
           <Employee />
          </CardContent>
        </Card>
      </div>

      {/* Carousel Section */}
      <div className="flex items-center mt-4 h-full">
        <div className="w-full max-w-full">
          <CarouselPlugin />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
