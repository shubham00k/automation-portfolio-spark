import React from "react";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Globe, Code, Terminal } from "lucide-react";
const About = () => {
  const skills = ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Python", "Bash", "Golang", "Prometheus", "Grafana", "ELK Stack"];
  return <section id="about" className="py-20 bg-gray-50 dark:bg-devops-blue-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Learn more about my background and expertise</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-devops-gray-light">Hey! I’m Shubham Kapse, a fresher deeply passionate about DevOps, Linux, and automation. I’ve always been curious about how systems work under the hood, and that curiosity led me to explore the world of cloud infrastructure, scripting, and CI/CD.</p>
            <p className="text-gray-700 dark:text-devops-gray-light">While I may not have industry experience yet, I’ve built multiple hands-on projects involving AWS, Ansible, Terraform, Bash scripting, and GitHub Actions. These projects helped me understand real-world challenges like automating web server deployments, managing cloud infrastructure as code, and integrating DevOps workflows.</p>
            <p className="text-gray-700 dark:text-devops-gray-light">
              I'm constantly learning and experimenting with new tools and techniques to stay at the forefront 
              of cloud-native technologies and automation frameworks.
            </p>
          </div>

          <div>
            <div className="bg-white dark:bg-devops-blue-light rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-5 text-devops-blue-dark dark:text-devops-teal">Technical Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Server className="w-5 h-5 mr-2 text-blue-600 dark:text-devops-teal" />
                    <h4 className="font-medium">Cloud Platforms</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">AWS</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Azure</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">GCP</Badge>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Database className="w-5 h-5 mr-2 text-blue-600 dark:text-devops-teal" />
                    <h4 className="font-medium">Containers & Orchestration</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Docker</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Kubernetes</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Helm</Badge>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Globe className="w-5 h-5 mr-2 text-blue-600 dark:text-devops-teal" />
                    <h4 className="font-medium">Infrastructure as Code</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Terraform</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">CloudFormation</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Ansible</Badge>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-devops-teal" />
                    <h4 className="font-medium">CI/CD</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Jenkins</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">GitHub Actions</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">ArgoCD</Badge>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Terminal className="w-5 h-5 mr-2 text-blue-600 dark:text-devops-teal" />
                    <h4 className="font-medium">Programming</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Python</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Go</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-devops-blue-light dark:text-devops-teal border-blue-200 dark:border-devops-teal/20">Bash</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;