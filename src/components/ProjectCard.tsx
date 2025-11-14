import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category: string;
}

const ProjectCard = ({ title, description, tags, githubUrl, category }: ProjectCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-accent hover-lift"
      data-category={category}
    >
      <div className="aspect-video bg-secondary/50 relative overflow-hidden hover-zoom-image">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img 
            src="/placeholder.svg" 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 hover:border-primary hover:text-primary transition-all duration-300 hover-scale"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover-scale"
          >
            <ExternalLink className="h-4 w-4" />
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
