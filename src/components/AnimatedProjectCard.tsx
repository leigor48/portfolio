import ProjectCard from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 1. Interface anpassen
interface AnimatedProjectCardProps {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl?: string | null;
  category: string;
  image: string;
  delay?: number;
}

const AnimatedProjectCard = ({ delay = 0, ...props }: AnimatedProjectCardProps) => {
  const cardRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div 
      ref={cardRef} 
      className={`hidden-on-load ${delay > 0 ? `stagger-${Math.min(delay, 6)}` : ''} h-full`}
    >
      <ProjectCard {...props} />
    </div>
  );
};

export default AnimatedProjectCard;