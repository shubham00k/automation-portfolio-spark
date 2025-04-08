
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-devops-blue-dark dark:to-black">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div>
              <p className="text-blue-600 dark:text-devops-teal font-semibold mb-2">Hello, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-devops-blue-dark dark:text-devops-gray-light mb-2">
                Jane Doe
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-devops-gray-dark dark:text-devops-gray-dark">
                DevOps Engineer & Cloud Architect
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-devops-gray-dark max-w-xl">
              I specialize in building and optimizing CI/CD pipelines, infrastructure automation, 
              and cloud architecture to streamline development workflows and improve system reliability.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-devops-teal dark:text-devops-blue-dark dark:hover:bg-blue-400 font-medium px-6">
                <a href="#contact">Get in touch</a>
              </Button>
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-devops-teal dark:text-devops-teal dark:hover:bg-devops-blue-light">
                <a href="#projects">View my work</a>
              </Button>
            </div>
          </div>

          <div className="flex-1 max-w-md animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-lg blur opacity-30 dark:opacity-40"></div>
              <div className="relative bg-white dark:bg-devops-blue-light p-6 rounded-lg shadow-xl">
                <div className="flex mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-sm font-mono whitespace-pre-wrap text-gray-800 dark:text-devops-gray-light">
                  <span className="text-blue-600 dark:text-blue-400"># Deploy Infrastructure as Code</span>
                  <br />
                  $ terraform init
                  <br />
                  $ terraform plan
                  <br />
                  $ terraform apply
                  <br /><br />
                  <span className="text-green-600 dark:text-green-400">✓ Successfully deployed infrastructure!</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 md:mt-24 animate-bounce">
          <a 
            href="#about" 
            className="text-blue-600 dark:text-devops-teal p-2 rounded-full border border-blue-600 dark:border-devops-teal"
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
