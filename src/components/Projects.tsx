
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kubernetes Monitoring Stack",
      description: "Implemented a comprehensive monitoring solution for Kubernetes clusters using Prometheus, Grafana, and Alertmanager with customizable dashboards and alerting.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["Kubernetes", "Prometheus", "Grafana", "Helm"],
      githubUrl: "https://github.com/yourusername/k8s-monitoring",
      liveUrl: "https://monitoring-demo.example.com"
    },
    {
      id: 2,
      title: "Infrastructure as Code Framework",
      description: "Developed a modular Terraform framework for provisioning consistent multi-environment AWS infrastructure with built-in security controls and compliance checks.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Terraform", "AWS", "IaC", "CI/CD"],
      githubUrl: "https://github.com/yourusername/terraform-framework",
    },
    {
      id: 3,
      title: "CI/CD Pipeline Automation",
      description: "Created a robust CI/CD pipeline using GitHub Actions that automates testing, security scanning, and deployment across multiple environments.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["GitHub Actions", "Docker", "Testing", "Security"],
      githubUrl: "https://github.com/yourusername/cicd-pipelines",
      liveUrl: "https://pipeline-docs.example.com"
    },
    {
      id: 4,
      title: "Cloud Cost Optimization Tool",
      description: "Built a tool that analyzes AWS resource usage and provides recommendations for cost savings through rightsizing and reserved instance planning.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Python", "AWS", "Cost Optimization", "Data Analysis"],
      githubUrl: "https://github.com/yourusername/cloud-cost-optimizer",
    },
    {
      id: 5,
      title: "Serverless Microservices Platform",
      description: "Designed and implemented a serverless architecture for microservices using AWS Lambda, API Gateway, and DynamoDB with full CI/CD automation.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      tags: ["Serverless", "AWS Lambda", "Microservices", "DynamoDB"],
      githubUrl: "https://github.com/yourusername/serverless-platform",
      liveUrl: "https://api.serverless-demo.example.com"
    },
    {
      id: 6,
      title: "Configuration Management System",
      description: "Built an Ansible-based configuration management system with role-based architecture and integration with secret management tools.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Ansible", "Configuration Management", "Security", "Automation"],
      githubUrl: "https://github.com/yourusername/ansible-config-mgmt",
    }
  ];

  return (
    <section id="projects" className="bg-white dark:bg-devops-blue-dark py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${project.id * 150}ms` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
