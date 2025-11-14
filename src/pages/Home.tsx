import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Server, Cloud } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/lib/projects";


const Home = () => {
  // Scroll animation refs for different sections
  const heroRef = useScrollAnimation({ threshold: 0.2 });
  const featuredRef = useScrollAnimation({ threshold: 0.15 });
  const expertiseRef = useScrollAnimation({ threshold: 0.15 });

  const featuredProjects = projects.slice(0, 3);

  const expertise = [
    {
      icon: Sparkles,
      title: "AI / Machine Learning",
      description: "Integration von AI-Lösungen mit LangChain, ChromaDB und modernen ML-Frameworks"
    },
    {
      icon: Server,
      title: "Full-Stack Development",
      description: "End-to-end Entwicklung mit React, TypeScript, Node.js und modernen Frameworks"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Skalierbare Cloud-Architekturen und DevOps-Praktiken für moderne Anwendungen"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* HERO SECTION - JETZT MIT "WOW"-EFFEKT
        1.  Das Dot-Grid (bg-[radial-gradient...]) wird auf die Sektion selbst angewendet.
        2.  Das "aurora-container" div hält die animierten, pulsierenden Glows.
      */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden 
                   bg-[radial-gradient(hsl(var(--border)_/_0.3)_1px,transparent_1px)] 
                   [background-size:20px_20px]"
      >
        
        {/* NEUER HINTERGRUND: Dynamisches, animiertes Aurora-System */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Glow 1 (Primary - Cyan) */}
          <div 
            className="absolute top-1/2 left-1/2 w-[1000px] h-[700px] 
                       bg-gradient-radial from-primary/30 via-primary/10 to-transparent 
                       rounded-full blur-[150px]
                       animate-[aurora-move-1_15s_ease-in-out_infinite,aurora-pulse_10s_ease-in-out_infinite]"
          />
          {/* Glow 2 (Accent - Violett) */}
          <div 
            className="absolute top-1/2 left-1/2 w-[1200px] h-[800px] 
                       bg-gradient-radial from-accent/30 via-accent/10 to-transparent 
                       rounded-full blur-[150px] 
                       animate-[aurora-move-2_18s_ease-in-out_infinite,aurora-pulse_12s_ease-in-out_infinite_reverse]"
          />
        </div>
        
        <div ref={heroRef} className="container mx-auto px-6 relative z-10 hidden-on-load">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* NEUE HEADLINE:
              Profitiert jetzt vom echten 'Primary -> Accent' Gradienten.
            */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Igor Tanaskoski: Engineering AI-Driven Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Software-Entwickler mit Erfahrung in RAG, Full-Stack-Development und ML. 
              <br></br>
              Passion für Entwicklung intelligenter und skalierbarer Anwendungen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              
              {/* NEUER PRIMARY BUTTON:
                Nutzt ebenfalls den neuen 'Primary -> Accent' Gradienten.
              */}
              <Button 
                size="lg" 
                className="text-primary-foreground bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-accent group hover-scale"
                asChild
              >
                <Link to="/projekte">
                  Meine Projekte ansehen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:border-primary hover:text-primary transition-all duration-300 hover-scale"
                asChild
              >
                <Link to="/kontakt">
                  Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {/* Diese Sektion profitiert jetzt vom "Glassmorphism" der Karten */}
      <section className="py-20 border-t border-border/50">
        <div ref={featuredRef} className="container mx-auto px-6 hidden-on-load">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Eine Auswahl meiner neuesten Projekte in AI, Full-Stack und Backend-Entwicklung
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              /* WICHTIG: Ihre 'ProjectCard' Komponente MUSS jetzt 
                die '.glass-effect' Klasse verwenden, damit dies funktioniert.
                
                Beispiel: 
                In ProjectCard.js sollte das äußere div 
                className="glass-effect rounded-lg ..." haben.
              */
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:border-primary hover:text-primary transition-all duration-300 hover-scale"
              asChild
            >
              <Link to="/projekte">
                Alle Projekte anzeigen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div ref={expertiseRef} className="container mx-auto px-6 hidden-on-load">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meine Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Spezialisiert auf moderne Technologien und Best Practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                /* ANWENDUNG DES "GLASS-EFFECTS" - Das hatten Sie bereits korrekt vorbereitet.
                  Mit unserem neuen CSS wird dies jetzt korrekt gerendert.
                */
                <div 
                  key={item.title}
                  className="glass-effect rounded-lg p-8 text-center transition-all duration-300 hover:shadow-accent group hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:border-primary hover:text-primary transition-all duration-300 hover-scale"
              asChild
            >
              <Link to="/ueber-mich">
                Mehr über mich
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;