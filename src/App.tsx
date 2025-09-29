import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LightPollution from "./pages/LightPollution";
import ImpactAnimals from "./pages/ImpactAnimals";
import ImpactHumans from "./pages/ImpactHumans";
import Policies from "./pages/Policies";
import Certification from "./pages/Certification";
import Resources from "./pages/Resources";
import Team from "./pages/Team";
import Diagram from "./pages/Diagram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diagram" element={<Diagram />} />
            <Route path="/light-pollution" element={<LightPollution />} />
            <Route path="/impact-animals" element={<ImpactAnimals />} />
            <Route path="/impact-humans" element={<ImpactHumans />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/team" element={<Team />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
