import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Características", path: "/caracteristicas" },
  { name: "Classes", path: "/classes" },
  { name: "Reprodução", path: "/reproducao" },
  { name: "Doenças e Ameaças", path: "/doencas" },
  { name: "Curiosidades", path: "/curiosidades" },
  { name: "Quiz", path: "/quiz" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gradient">Echinodermata Wiki</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant={location.pathname === link.path ? "default" : "ghost"}
                    size="sm"
                    className="smooth-transition"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg p-2 hover:bg-muted smooth-transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 space-y-2 animate-in fade-in slide-in-from-top-5 duration-300">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="block">
                  <Button
                    variant={location.pathname === link.path ? "default" : "ghost"}
                    className="w-full justify-start smooth-transition"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full ocean-gradient p-3 text-primary-foreground ocean-shadow smooth-transition hover:scale-110 animate-in fade-in slide-in-from-bottom-5"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};
