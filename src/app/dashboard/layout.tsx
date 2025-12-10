import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const layout = async ({
  children: children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <div>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="flex min-h-screen p-5 gap-5">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default layout;
