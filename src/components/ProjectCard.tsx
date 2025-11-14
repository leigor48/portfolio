import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

// 1. Shadcn-UI Komponenten für das Popup importieren
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// 2. Interface anpassen
interface ProjectCardProps {
  title: string;
  description: string;
  longDescription: string; // <-- Hinzugefügt
  tags: string[];
  category: string;
  image: string;
  githubUrl?: string | null; // <-- Optional gemacht
}

// 3. Props annehmen
const ProjectCard = ({
  title,
  description,
  longDescription, // <-- Hinzugefügt
  tags,
  category,
  image,
  githubUrl
}: ProjectCardProps) => {

  return (
    // 4. Die gesamte Karte wird in die Dialog-Komponente eingepackt
    <Dialog>
      <Card
        className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-accent hover-lift flex flex-col h-full"
        data-category={category}
      >
        <div className="aspect-video bg-secondary/50 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6 space-y-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3 flex-grow">
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

          {/* 5. Intelligenter Button-Container */}
          <div className="flex gap-3 pt-2 mt-auto">

            {/* Zeige GitHub-Button NUR, wenn githubUrl existiert */}
            {githubUrl && (
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
            )}

            {/* Der "Details"-Button ist jetzt ein DialogTrigger */}
            <DialogTrigger asChild>
              <Button
                variant="default"
                size="sm"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover-scale"
              >
                <ExternalLink className="h-4 w-4" />
                Details
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </Card>

      {/* 6. Das ist der Inhalt des Popups */}
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-wrap gap-2 my-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        {/* ScrollArea stellt sicher, dass lange Texte auf Mobilgeräten funktionieren */}
        <ScrollArea className="max-h-[60vh] pr-4">
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {longDescription}
          </p>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;