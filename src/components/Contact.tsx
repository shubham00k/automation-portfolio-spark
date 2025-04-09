import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters."
  })
});
type ContactFormValues = z.infer<typeof contactSchema>;
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });
    form.reset();
    setIsSubmitting(false);
  };
  return <section id="contact" className="bg-devops-blue-light py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Have a question or want to work together?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-devops-blue-dark rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-devops-teal">
                Get In Touch
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="change color to white ">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="message" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can I help you?" className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <Button type="submit" className="w-full bg-devops-teal text-devops-blue-dark hover:bg-blue-400" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div>
            <div className="bg-devops-blue-dark rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-devops-teal">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-3 text-devops-teal" />
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a href="mailto:shubhamkapse193@gmail.com" className="text-devops-gray-light hover:text-devops-teal">
                      shubhamkapse193@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="w-5 h-5 mt-1 mr-3 text-devops-teal" />
                  <div>
                    <h4 className="font-medium text-white">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/shubhamkapse193" target="_blank" rel="noopener noreferrer" className="text-devops-gray-light hover:text-devops-teal">
                      linkedin.com/in/shubhamkapse193
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="w-5 h-5 mt-1 mr-3 text-devops-teal" />
                  <div>
                    <h4 className="font-medium text-white">GitHub</h4>
                    <a href="https://github.com/shubham00k" target="_blank" rel="noopener noreferrer" className="text-devops-gray-light hover:text-devops-teal">
                      github.com/shubham00k
                    </a>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-700">
                  <p className="text-devops-gray-light">
                    I'm currently available for freelance work and full-time DevOps opportunities. If you're 
                    looking to improve your infrastructure, automation pipelines, or need help with cloud 
                    architecture, I'd love to hear from you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;