
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl,
  liveUrl 
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-devops-blue-light border-gray-200 dark:border-devops-blue-light">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-devops-blue-dark dark:text-white">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-devops-gray-light mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-100 text-gray-800 dark:bg-devops-blue-dark dark:text-devops-gray-light border-none"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-devops-gray-light hover:text-blue-600 dark:hover:text-devops-teal transition-colors"
            aria-label={`View ${title} GitHub repository`}
          >
            <Github className="h-5 w-5 mr-1" />
            <span className="text-sm">Code</span>
          </a>
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-devops-gray-light hover:text-blue-600 dark:hover:text-devops-teal transition-colors"
              aria-label={`Visit ${title} live site`}
            >
              <ExternalLink className="h-5 w-5 mr-1" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
