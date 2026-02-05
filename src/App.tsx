import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import NationalResources from "./pages/NationalResources";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import HoardingSupportGroup from "./pages/HoardingSupportGroup";
import MessageBoard from "./pages/MessageBoard";
import HelpForFamilies from "./pages/HelpForFamilies";
import HelpForHoarders from "./pages/HelpForHoarders";
import Links from "./pages/Links";
import Webinars from "./pages/Webinars";
import HoardersTvShow from "./pages/HoardersTvShow";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/national-resources" element={<NationalResources />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hoarding-support-group" element={<HoardingSupportGroup />} />
          <Route path="/message-board" element={<MessageBoard />} />
          <Route path="/help-for-families" element={<HelpForFamilies />} />
          <Route path="/help-for-hoarders" element={<HelpForHoarders />} />
          <Route path="/links" element={<Links />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/hoarders-tv-show" element={<HoardersTvShow />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
