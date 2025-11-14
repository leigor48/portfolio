import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

const Projekte = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "RAG-Pipeline / AI-Agent",
      description: "Entwicklung eines intelligenten AI-Agenten mit Retrieval-Augmented Generation für kontextbasierte Antworten und semantische Suche. Implementierung von Vector-Datenbanken für effiziente Dokumentensuche.",
      tags: ["Python", "LangChain", "ChromaDB", "Ollama3"],
      githubUrl: "https://github.com",
      category: "ai python"
    },
    {
      title: "Netzwerk-Visualisierungs-Tool",
      description: "Interaktives Tool zur Visualisierung komplexer Netzwerkstrukturen mit Echtzeit-Updates und benutzerdefinierten Filtern. Ermöglicht dynamische Analyse von Beziehungen und Abhängigkeiten.",
      tags: ["React", "TypeScript", "Node.js", "API"],
      githubUrl: "https://github.com",
      category: "react nodejs"
    },
    {
      title: "Budget-Tracking Backend",
      description: "RESTful API Backend für persönliches Budget-Management mit robuster Datenverwaltung und Authentifizierung. Unterstützt Multi-User-Funktionalität und detaillierte Finanzanalysen.",
      tags: ["Node.js", "Express", "REST API"],
      githubUrl: "https://github.com",
      category: "nodejs"
    }
  ];

  const filters = [
    { id: "all", label: "Alle" },
    { id: "ai", label: "AI / ML" },
    { id: "react", label: "React" },
    { id: "nodejs", label: "Node.js" },
    { id: "python", label: "Python" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => 
        project.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meine Projekte
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Eine Übersicht meiner technischen Projekte in den Bereichen AI, Full-Stack Development und Backend-Architektur
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border hover:border-primary hover:text-primary transition-colors"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Keine Projekte in dieser Kategorie gefunden.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projekte;
