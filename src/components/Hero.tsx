
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Infinity } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-devops-blue-dark to-black">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div>
              <p className="text-devops-teal font-semibold mb-2">Hello, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-devops-gray-light mb-2">
                Shubham Kapse
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-devops-gray-dark">
                DevOps Engineer & Cloud Specialist
              </h2>
            </div>
            
            <p className="text-lg text-devops-gray-dark max-w-xl">
              DevOps enthusiast with hands-on experience in automation, cloud infrastructure, 
              and configuration management.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="bg-devops-teal text-devops-blue-dark hover:bg-blue-400 font-medium px-6">
                <a href="#contact">Get in touch</a>
              </Button>
              <Button asChild variant="outline" className="border-devops-teal text-devops-teal hover:bg-devops-blue-light">
                <a href="#projects">View my work</a>
              </Button>
            </div>
          </div>

          <div className="flex-1 max-w-md animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-lg blur opacity-30 dark:opacity-40"></div>
              <div className="relative bg-devops-blue-light p-6 rounded-lg shadow-xl">
                <div className="flex mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-sm font-mono whitespace-pre-wrap text-devops-gray-light">
                  <span className="text-blue-400"># Deploy Infrastructure as Code</span>
                  <br />
                  $ terraform init
                  <br />
                  $ terraform plan
                  <br />
                  $ terraform apply
                  <br /><br />
                  <span className="text-green-400">✓ Successfully deployed infrastructure!</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 md:mt-24 animate-bounce">
          <a 
            href="#about" 
            className="text-devops-teal p-2 rounded-full border border-devops-teal"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
