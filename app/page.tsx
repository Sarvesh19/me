"use client";

import { Github, Linkedin, Mail, Terminal, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

export default function Home() {
  const skills = [
    "Java", "Spring Boot", "Angular", "React.js", "Next.js", 
    "Microservices", "REST APIs", "TypeScript", "Node.js",
    "Docker", "Kubernetes", "AWS", "CI/CD", "Git"
  ];

  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleViewProjectClick = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactMeClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const experiences = [
    {
      title: "Lead Full Stack Developer",
      company: "Trigent Software Inc.",
      period: "2023 - Present",
      description: "Leading a team of developers to build scalable web applications using Java, Spring Boot, and Angular"
    },
    {
      title: "Lead Consultant",
      company: "Virtusa Inc.",
      period: "2021 - 2023",
      description: "Leading architecture decisions and implementing complex enterprise solutions using Spring Boot, Angular, and React.js"
    },
    {
      title: "Associated Consultant",
      company: "Capgemini Inc.",
      period: "2018 - 2021",
      description: "Spearheaded development of scalable web applications using Java, Spring Boot, and Angular"
    },
    {
      title: "Java Developer",
      company: "Nagarro Inc. (ATCS Inc)",
      period: "2015 - 2018",
      description: "Developed and maintained enterprise applications using Java and JavaScript frameworks"
    }
  ];

  return (
    <main className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="container px-4 mx-auto text-center relative">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            Sarvesh Yadav
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Full Stack Expert with 10+ years of experience
          </p>
          <div className="flex justify-center gap-4 px-4 md:px-0">
            <Button onClick={handleContactMeClick} size="lg" className="rounded-full text-lg px-8 bg-primary text-white hover:bg-primary-dark transition-colors">
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button onClick={handleViewProjectClick} variant="outline" size="lg" className="rounded-full text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              Experience
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience in software development, I specialize in building 
              enterprise-grade applications using Java, Spring Boot, Angular, React.js, and Next.js. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise lies in creating scalable, maintainable, and efficient solutions that 
              drive business value. I'm passionate about clean code, microservices architecture, 
              and delivering exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-lg py-2 px-6 rounded-full bg-white hover:bg-primary hover:text-white transition-colors shadow-md"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div ref={experienceRef} className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-none shadow-md">
                <h3 className="text-2xl font-semibold mb-3">{exp.title}</h3>
                <p className="text-primary font-medium mb-4">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="max-w-3xl mx-auto text-lg space-y-6 text-center">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/Sarvesh19" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/in/sarvesh-yadav-95321489/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="mailto:sarvesh.y305@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
}