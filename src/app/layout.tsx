import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    
    <div className="flex flex-col h-screen w-full overflow-hidden">
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-auto bg-muted">
      <AppHeader></AppHeader>
        {/* <SidebarTrigger /> */}
        <div className="w-full">
              {children}
            </div>
      </main>
    </SidebarProvider>
    </div>
    
    </>
    
  )
}


// <>
//     <Head>
//             <link
//               href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
//               rel="stylesheet"
//             />
//             <link rel="manifest" href="/manifest.json" />
//           </Head>
//       <div className="flex h-screen overflow-hidden">
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//         <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
//           {/* <!-- ===== Header Star ===== --> */}
//           <AppHeader></AppHeader>
//           <main>
//             <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-2">
//               {children}
//             </div>
//           </main>
//         </div>
//       </div>
//     </>



