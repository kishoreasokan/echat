import * as React from "react";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const QuickLinksMenu = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Dropdown Menu Trigger (Icon Button) */}
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
  <button className="p-2 rounded-full border border-gray-100 hover:bg-gray-200 hover:border-cyan-900 transition">
    <MoreVertical className="h-5 w-5 text-cyan-900" /> 
  </button>
</DropdownMenuTrigger>


        <DropdownMenuContent align="start" className="w-full">
          <DropdownMenuItem onClick={() => console.log("Dashboard clicked")}>
            My Stamps
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Attendance clicked")}>
            Request A Stamp
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Reports clicked")}>
            Who is my Custodian
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Reports clicked")}>
            Custodian Account Request
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Caption NEXT to icon */}
      <span className="text-sm text-gray-600">Quick Links</span>
    </div>
  );
};

export default QuickLinksMenu;
