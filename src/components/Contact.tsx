
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Github, Linkedin } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form data:", data);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-devops-blue-light py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Have a question or want to work together?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-devops-blue-dark rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-devops-blue-dark dark:text-devops-teal">
                Get In Touch
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can I help you?"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-devops-teal dark:text-devops-blue-dark dark:hover:bg-blue-400"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-devops-blue-dark rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-devops-blue-dark dark:text-devops-teal">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-devops-teal" />
                  <div>
                    <h4 className="font-medium text-devops-blue-dark dark:text-white">Email</h4>
                    <a 
                      href="mailto:your.email@example.com"
                      className="text-gray-600 dark:text-devops-gray-light hover:text-blue-600 dark:hover:text-devops-teal"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-devops-teal" />
                  <div>
                    <h4 className="font-medium text-devops-blue-dark dark:text-white">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/yourprofile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-devops-gray-light hover:text-blue-600 dark:hover:text-devops-teal"
                    >
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-devops-teal" />
                  <div>
                    <h4 className="font-medium text-devops-blue-dark dark:text-white">GitHub</h4>
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-devops-gray-light hover:text-blue-600 dark:hover:text-devops-teal"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-devops-gray-light">
                    I'm currently available for freelance work and full-time opportunities. If you're 
                    looking to improve your DevOps practices or need help with cloud infrastructure, 
                    I'd love to hear from you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
