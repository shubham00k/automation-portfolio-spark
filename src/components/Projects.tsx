
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Web Server Deployment & Configuration using Ansible",
      description: "Automated deployment and configuration of web servers across multiple environments using Ansible playbooks, roles, and templates for consistent, error-free setup.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Ansible", "Web Server", "Automation", "YAML"],
      githubUrl: "https://github.com/shubhamkapse",
    },
    {
      id: 2,
      title: "Service Management Automation on EC2 using Ansible",
      description: "Developed comprehensive Ansible automation scripts to manage services across EC2 instances with dynamic inventory management and role-based configuration.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["Ansible", "AWS", "EC2", "Service Management"],
      githubUrl: "https://github.com/shubhamkapse",
    },
    {
      id: 3,
      title: "Terraform Infrastructure as Code Deployment",
      description: "Created modular Terraform configurations to provision and manage cloud infrastructure with version-controlled IaC approach for AWS resources including VPC, EC2, and security groups.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Terraform", "IaC", "AWS", "Cloud Infrastructure"],
      githubUrl: "https://github.com/shubhamkapse",
    },
    {
      id: 4,
      title: "LAMP Stack Deployment on EC2 using Bash Scripting",
      description: "Automated the deployment of LAMP (Linux, Apache, MySQL, PHP) stack on AWS EC2 instances using Bash scripts for quick, consistent environment setup.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Bash", "EC2", "LAMP", "Automation"],
      githubUrl: "https://github.com/shubhamkapse",
    }
  ];

  return (
    <section id="projects" className="bg-white dark:bg-devops-blue-dark py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
