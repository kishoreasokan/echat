import {
  ChevronDown,
  Home,
  Stamp,
  Users,
  Settings,
  FileText,
  LogOut,
  User,
  Menu,
  X,
} from "lucide-react"
import Logo from "../logoboe.png"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useState } from "react"

type MenuItem = {
  title: string
  url?: string
  icon: React.ElementType
  children?: MenuItem[]
}

const items: MenuItem[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Stamp",
    url: "#",
    icon: Stamp,
  },
  {
    title: "Users",
    icon: Users,
    children: [
      { title: "Add User", url: "#", icon: User },
      { title: "User List", url: "#", icon: Users },
    ],
  },
  {
    title: "Documents",
    icon: FileText,
    children: [
      { title: "Reports", url: "#", icon: FileText },
      { title: "Logs", url: "#", icon: LogOut },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  return (
    <Sidebar>
      <SidebarContent  className="flex flex-col space-y-6 p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-start pt-4 pb-8">
          <img src={Logo} alt="Logo" className="w-auto" /> {/* Adjust size */}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <SidebarMenuButton className="hover:bg-gray-200 rounded-md p-2" onClick={() => toggleSubmenu(item.title)}>
                        <item.icon style={{ width: '22px', height: '22px' }}  className="w-8 h-8 text-cyan-900" />
                        <span className="text-menuIcon text-cyan-900 text-md">{item.title}</span>
                        <ChevronDown
                          className={`ml-auto text-cyan-900 transition-transform ${
                            openSubmenu === item.title ? "rotate-180" : ""
                          }`}
                          size={16}
                        />
                      </SidebarMenuButton>
                      {openSubmenu === item.title && (
                        <SidebarMenu className="ml-4 w-50">
                          {item.children.map((subItem) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton asChild className="hover:bg-gray-200 rounded-md p-2">
                                <a href={subItem.url}>
                                  <subItem.icon style={{ width: '22px', height: '22px' }}  className="w-8 h-8 text-cyan-900"  />
                                  <span className="text-md text-cyan-900">{subItem.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      )}
                    </>
                  ) : (
                    <SidebarMenuButton asChild className="hover:bg-gray-200 rounded-md p-2">
                      <a href={item.url}>
                      <item.icon style={{ width: '22px', height: '22px' }}  className="w-8 h-8 text-cyan-900" />
                        <span className="text-md text-cyan-900">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
