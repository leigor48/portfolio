import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Server, Cloud } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const Home = () => {
  // Scroll animation refs for different sections
  const heroRef = useScrollAnimation({ threshold: 0.2 });
  const featuredRef = useScrollAnimation({ threshold: 0.15 });
  const expertiseRef = useScrollAnimation({ threshold: 0.15 });

  const featuredProjects = [
    {
      title: "RAG-Pipeline / AI-Agent",
      description: "Entwicklung eines intelligenten AI-Agenten mit Retrieval-Augmented Generation für kontextbasierte Antworten und semantische Suche.",
      tags: ["Python", "LangChain", "ChromaDB", "Ollama3"],
      githubUrl: "https://github.com",
      category: "ai python"
    },
    {
      title: "Netzwerk-Visualisierungs-Tool",
      description: "Interaktives Tool zur Visualisierung komplexer Netzwerkstrukturen mit Echtzeit-Updates und benutzerdefinierten Filtern.",
      tags: ["React", "TypeScript", "Node.js", "API"],
      githubUrl: "https://github.com",
      category: "react nodejs"
    },
    {
      title: "Budget-Tracking Backend",
      description: "RESTful API Backend für persönliches Budget-Management mit robuster Datenverwaltung und Authentifizierung.",
      tags: ["Node.js", "Express", "REST API"],
      githubUrl: "https://github.com",
      category: "nodejs"
    }
  ];

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
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        
        <div ref={heroRef} className="container mx-auto px-6 relative z-10 hidden-on-load">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Igor Tanaskoski: Engineering AI-Driven Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Software-Entwickler mit Fokus auf AI/ML-Integration, Full-Stack Development und Cloud-basierte Lösungen. 
              Spezialisiert auf die Entwicklung intelligenter, skalierbarer Anwendungen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-accent group hover-scale"
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
      <section className="py-20 bg-card/30">
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
                <div 
                  key={item.title}
                  className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-accent group"
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
