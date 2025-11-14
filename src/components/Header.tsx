import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Navigationslinks (unverändert)
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projekte", label: "Projekte" },
  { to: "/ueber-mich", label: "Über Mich" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">

      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          IT
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary nav-link-underline",
                isActive(link.to) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative"
          >
            <span className="sr-only">Menü öffnen/schliessen</span>
            
            <X className={cn(
              "h-5 w-5 absolute transition-all duration-300 ease-in-out",
              isMenuOpen 
                ? "opacity-100 rotate-0 scale-100" 
                : "opacity-0 -rotate-90 scale-50"
            )} />
            
            <Menu className={cn(
              "h-5 w-5 transition-all duration-300 ease-in-out",
              isMenuOpen 
                ? "opacity-0 rotate-90 scale-50" 
                : "opacity-100 rotate-0 scale-100"
            )} />
          </Button>
        </div>
      </nav>

      <div 
        className={cn(
          "md:hidden",
          "flex flex-col items-center gap-4 overflow-hidden border-t",
          "transition-all duration-300 ease-in-out",
          isMenuOpen 
            ? "max-h-[300px] py-6 border-border"
            : "max-h-0 py-0 border-transparent"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className={cn(
              "text-lg font-medium transition-colors hover:text-primary",
              isActive(link.to) ? "text-primary" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;