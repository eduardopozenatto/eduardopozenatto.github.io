import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Characteristics } from "./pages/Characteristics";
import { Classes } from "./pages/Classes";
import { Reproduction } from "./pages/Reproduction";
import { Diseases } from "./pages/Diseases";
import { Curiosities } from "./pages/Curiosities";
import { Quiz } from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/caracteristicas" element={<Characteristics />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/reproducao" element={<Reproduction />} />
              <Route path="/doencas" element={<Diseases />} />
              <Route path="/curiosidades" element={<Curiosities />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
