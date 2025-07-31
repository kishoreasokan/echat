import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Stamp } from "lucide-react";

type Stamp = {
  id: string | number;
  message: string;
  actionLabel: string;
  onAction: () => void;
};

type StampNotificationDropdownProps = {
  StampNotifications: Stamp[];
};

export function StampNotificationDropdown({
  StampNotifications,
}: StampNotificationDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-800 relative">
          <Stamp className="w-6 h-6 text-cyan-700 dark:text-cyan-300" />
          {StampNotifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {StampNotifications.length}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-72 p-2">
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-2">
          Action Queue
        </div>

        {StampNotifications.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 dark:border-gray-700 rounded-md p-2 mb-2 bg-gray-50 dark:bg-gray-800"
          >
            <div className="text-sm text-gray-800 dark:text-white flex items-center gap-2">
              <Stamp className="w-4 h-4 text-cyan-700 dark:text-cyan-300" />
              {item.message}
            </div>
            <button
              className="mt-2 px-3 py-1 text-xs font-medium bg-cyan-600 hover:bg-cyan-700 text-white rounded"
              onClick={item.onAction}
            >
              {item.actionLabel}
            </button>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
