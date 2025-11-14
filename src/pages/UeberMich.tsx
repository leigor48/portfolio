import { Button } from "@/components/ui/button";
import { Download, Sparkles, Server, Cloud, Shield } from "lucide-react";

const UeberMich = () => {
  const expertise = [
    {
      icon: Sparkles,
      title: "AI / Machine Learning",
      description: "Spezialisiert auf die Integration von AI-Lösungen in bestehende Systeme. Erfahrung mit LangChain, ChromaDB, und modernen ML-Frameworks wie Ollama. Entwicklung von RAG-Pipelines und intelligenten Agenten für kontextbasierte Informationsverarbeitung."
    },
    {
      icon: Server,
      title: "Full-Stack Development",
      description: "End-to-end Entwicklung moderner Webanwendungen mit React, TypeScript und Node.js. Expertise in der Erstellung responsiver, performanter Benutzeroberflächen und skalierbarer Backend-Systeme. Erfahrung mit REST APIs und modernen JavaScript-Frameworks."
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Entwicklung und Deployment skalierbarer Cloud-basierter Lösungen. Vertraut mit modernen DevOps-Praktiken, Container-Orchestrierung und Cloud-Plattformen. Fokus auf automatisierte, wartbare Infrastruktur-Lösungen."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Fundiertes Verständnis von Datenschutz und Compliance-Anforderungen. Implementierung sicherer Authentifizierungs- und Autorisierungssysteme. Erfahrung mit regulatorischen Standards und Best Practices in der Softwareentwicklung."
    }
  ];

  const techStack = {
    "AI & Machine Learning": ["Python", "LangChain", "ChromaDB", "Ollama", "TensorFlow"],
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "REST APIs", "GraphQL"],
    "Tools & Platforms": ["Git", "Docker", "VS Code", "Postman"]
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Über Mich
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Software-Entwickler mit Leidenschaft für innovative Technologien und skalierbare Lösungen
          </p>
        </div>

        {/* Expertise Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Meine Stärken
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-accent group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CV Download CTA */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meinen Lebenslauf herunterladen
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Erfahren Sie mehr über meinen beruflichen Werdegang, Qualifikationen und Erfolge im Detail
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-accent group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              Lebenslauf herunterladen (PDF)
            </Button>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Tech Stack & Kompetenzen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div 
                key={category}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-foreground rounded-md text-sm border border-border hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UeberMich;
