import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Settings,
  LogOut,
  Menu,
  Bell,
  Search,
  UserRound,
  Sun,
  Moon,
} from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { StampNotificationDropdown } from "@/components/StampNotificationDropdown";

export function AppHeader() {
  const { toggleSidebar } = useSidebar();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };
  const stampNotifications = [
    {
      id: 1,
      message: "Digital stamp request",
      actionLabel: "Request a Stamp",
      onAction: () => alert("Reviewed stamp request from Finance Dept"),
    },
    {
      id: 2,
      message: "Marketing signature stamp",
      actionLabel: "Request a Stamp",
      onAction: () => alert("Approved stamp for Marketing"),
    },
    {
      id: 3,
      message: "Procurement stamp request",
      actionLabel: "Request a Stamp",
      onAction: () => alert("Opened stamp request from Procurement"),
    },
  ];
  
  const notifications = [
    {
      id: 1,
      message: "New user signed up for portal access",
      actionLabel: "View User",
      onAction: () => alert("Viewing new user"),
    },
    {
      id: 2,
      message: "Server backup completed successfully",
      actionLabel: "View Backup",
      onAction: () => alert("Viewing backup log"),
    },
    {
      id: 3,
      message: "Admin sent a new message",
      actionLabel: "Read Message",
      onAction: () => alert("Reading admin message"),
    },
  ];
  
  

  return (
    <header className="w-full flex justify-between items-center px-4 h-14 border-b bg-white dark:bg-gray-400 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="text-xl font-bold text-cyan-700 dark:text-cyan-300 font-sans inline-flex items-end">
          echat <span className="text-base ml-1">3.0</span>
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-3 py-1.5 rounded-md border text-sm bg-white dark:bg-gray-800 dark:text-white border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          title="Toggle Dark Mode"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <StampNotificationDropdown StampNotifications={stampNotifications} />
        {/* Notifications */}
        <NotificationDropdown notifications={notifications} />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-800">
              <div className="w-8 h-8 rounded-full bg-cyan-700 text-white dark:bg-cyan-300 dark:text-gray-900 flex items-center justify-center text-sm font-medium">
                BM
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
