
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Web Server Deployment & Configuration using Ansible",
      description: "Automated Nginx/Apache setup and configuration on AWS EC2 instances. Implemented templates, handlers, and idempotent configurations for reliable deployments.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Ansible", "AWS", "Nginx", "Apache", "EC2"],
      githubUrl: "https://github.com/Shubhamkapse/ansible-web-server",
    },
    {
      id: 2,
      title: "Service Management Automation on EC2 using Ansible",
      description: "Managed services like SSH, Apache, and firewall using Ansible playbooks. Created role-based architecture with dynamic inventory for scalability.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Ansible", "AWS", "Service Management", "EC2", "Playbooks"],
      githubUrl: "https://github.com/Shubhamkapse/ansible-service-management",
    },
    {
      id: 3,
      title: "Terraform Infrastructure as Code Deployment",
      description: "Provisioned AWS infrastructure using modular Terraform with remote state in S3. Implemented best practices for security, scaling, and resource management.",
      image: "https://images.unsplash.com/photo-1505238680356-667803448bb6",
      tags: ["Terraform", "AWS", "IaC", "S3", "Remote State"],
      githubUrl: "https://github.com/Shubhamkapse/terraform-aws-infrastructure",
    },
    {
      id: 4,
      title: "LAMP Stack Deployment on EC2 using Bash Scripting",
      description: "Automated full-stack deployment with Linux, Apache, MySQL, and PHP. Created robust error handling and parameterized configurations for flexibility.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Bash", "AWS", "LAMP", "EC2", "Automation"],
      githubUrl: "https://github.com/Shubhamkapse/lamp-stack-automation",
    }
  ];

  return (
    <section id="projects" className="bg-devops-blue-dark py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Check out my DevOps portfolio</p>
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
