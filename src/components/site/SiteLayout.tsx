import { Outlet } from "react-router-dom";
import { SiteNavbar } from "./SiteNavbar";
import { SiteFooter } from "./SiteFooter";
import { TrangonAssistant } from "@/components/TrangonAssistant";

export const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <TrangonAssistant />
    </div>
  );
};
