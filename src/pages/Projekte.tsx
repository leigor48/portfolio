import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedProjectCard from "@/components/AnimatedProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/lib/projects";

const Projekte = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const filterRef = useScrollAnimation({ threshold: 0.2 });

  const filters = [
    { id: "all", label: "Alle" },
    { id: "ai", label: "AI / ML" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 hidden-on-load">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meine Projekte
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Eine Übersicht meiner privaten, schulischen und (sofern möglich) betrieblichen Projekte
          </p>
        </div>

        {/* Filter Section */}
        <div ref={filterRef} className="mb-12 hidden-on-load">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover-scale"
                    // --- KORREKTUR ---
                    // hover:bg-primary/10 hinzugefügt, um den lila Standard-Hover zu überschreiben
                    : "border-border hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 hover-scale"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div 
          key={activeFilter} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <AnimatedProjectCard 
              key={project.title} 
              {...project}
              delay={index + 1}
            />
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