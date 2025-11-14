import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          IT
        </Link>
        
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            to="/projekte"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/projekte") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Projekte
          </Link>
          <Link
            to="/ueber-mich"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/ueber-mich") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Über Mich
          </Link>
          <Link
            to="/kontakt"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/kontakt") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
