import { useState, useEffect } from "react"; // <--- useEffect importieren
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

  // ==================================================================
  // NEU: Body-Scroll sperren, wenn das Menü geöffnet ist
  // ==================================================================
  useEffect(() => {
    if (isMenuOpen) {
      // Verhindert das Scrollen der Seite im Hintergrund
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    
    // Cleanup-Funktion, falls die Komponente unmounted wird
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);
  // ==================================================================
  // ENDE NEU
  // ==================================================================

  return (
    // Der Header-Container bleibt sticky und behält sein Styling
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      
      {/* Die Haupt-Navigationsleiste (Logo, Desktop-Links, Menü-Button) */}
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Logo (unverändert) */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          IT
        </Link>
        
        {/* Desktop-Navigation (unverändert) */}
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

        {/* Mobile Menü-Button (unverändert) */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            // Wichtig: z-50, damit er über dem Backdrop (z-40) bleibt
            className="relative z-50" 
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

      {/* ==================================================================
          NEUES MOBILE MENÜ (Side-In / Off-Canvas)
          ==================================================================
      */}

      {/* 1. Backdrop (Overlay) */}
      <div 
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden",
          "transition-opacity duration-300 ease-in-out",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* 2. Das Menü-Panel selbst */}
      <div
        className={cn(
          // Positionierung & Grösse
          "fixed top-0 right-0 z-50 h-screen w-3/4 max-w-xs", 
          // Styling
          "bg-background border-l border-border",
          // Layout & Padding (pt-20 gibt Platz für den sticky Header)
          "flex flex-col items-start gap-6 p-8 pt-20", 
          // Animation
          "transition-transform duration-300 ease-in-out md:hidden",
          // Zustände
          isMenuOpen
            ? "translate-x-0"        // Offen: An Position 0
            : "translate-x-full"     // Geschlossen: Komplett nach rechts verschoben
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className={cn(
              // Grössere Schrift für bessere Klickbarkeit auf Mobile
              "text-lg font-medium transition-colors hover:text-primary",
              isActive(link.to) ? "text-primary" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
      {/* ==================================================================
          ENDE NEUES MOBILE MENÜ
          ==================================================================
      */}

    </header>
  );
};

export default Header;