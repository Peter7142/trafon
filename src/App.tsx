import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import Home from "./pages/Home";
import Trafostanice from "./pages/Trafostanice";
import Sluzby from "./pages/Sluzby";
import Referencie from "./pages/Referencie";
import Opravnenia from "./pages/Opravnenia";
import ONas from "./pages/ONas";
import Kontakt from "./pages/Kontakt";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/trafostanice" element={<Trafostanice />} />
        <Route path="/sluzby" element={<Sluzby />} />
        <Route path="/referencie" element={<Referencie />} />
        <Route path="/opravnenia" element={<Opravnenia />} />
        <Route path="/o-nas" element={<ONas />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </TooltipProvider>
);

export default App;
