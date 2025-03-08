"use client";

import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import { motion } from "framer-motion";
import SarveshExpert from "./SarveshExpert";
import MarsAnimation from "./MarsAnimation"; // Updated import
import SplashCursor from '../components/cursor'
import Hyperspeed from '../components/hyperspeed-component';

export default function Home() {
  const skills = [
    "Java", "Spring Boot", "Angular", "React.js", "Next.js",
    "Microservices", "REST APIs", "TypeScript", "Node.js",
    "Docker", "Kubernetes", "AWS", "CI/CD", "Git"
  ];

  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

  const personalProjects = [
    {
      title: "Tripifyo.com",
      description: "A travel platform designed to simplify planning and inspire adventure.",
      link: "https://tripifyo.com",
    },
    {
      title: "TempChat",
      description: "Create secure, temporary chat rooms that vanish after your chosen time.",
      link: "https://tempchat-plum.vercel.app/",
    },
    {
      title: "Electric Nodes",
      description: "A Charger sharing WebApp for EV vehicles.",
      link: "https://electricnodes.web.app/",
    },
    
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-foreground">
      {/* Hero Section */}
      <SplashCursor />

    

      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
      >
        {/* Professional Mars Animation Background */}
        {/* <MarsAnimation /> */}
        
        <div className="w-full max-w-none px-0 text-center relative z-10">
          <SarveshExpert experienceRef={experienceRef} contactRef={contactRef} />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.5 }}
        className="py-24"
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With over a decade of experience in software development, I specialize in building 
              enterprise-grade applications using Java, Spring Boot, Angular, React.js, and Next.js. 
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My expertise lies in creating scalable, maintainable, and efficient solutions that 
              drive business value. I'm passionate about clean code, microservices architecture, 
              and delivering exceptional user experiences.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4, duration: 0.5 }}
        className="py-24 bg-white dark:bg-gray-900"
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text mb-12 text-center">Skills & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-lg py-2 px-6 rounded-full bg-white dark:bg-gray-800 hover:bg-red-500 hover:text-white transition-colors shadow-md dark:text-gray-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Personal Projects Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 0.5 }}
        className="py-24"
      >
        <div ref={projectsRef} className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text mb-12 text-center">Personal Projects</h2>
          <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2">
            {personalProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-none shadow-lg bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-semibold mb-3 text-red-500 dark:text-pink-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <Button asChild variant="outline" className="w-full group hover:bg-red-500 hover:text-white border-red-500">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.6, duration: 0.5 }}
        className="py-24 bg-white dark:bg-gray-900"
      >
        <div ref={experienceRef} className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text mb-12 text-center">Professional Experience</h2>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-none shadow-md bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-semibold mb-3 text-red-500 dark:text-pink-400">{exp.title}</h3>
                <p className="text-red-500 dark:text-pink-400 font-medium mb-4">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8, duration: 0.5 }}
        className="py-24"
      >
        <div ref={contactRef} className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text mb-12 text-center">Contact Me</h2>
          <div className="max-w-3xl mx-auto text-lg space-y-6 text-center">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/Sarvesh19" className="text-gray-600 hover:text-red-500 dark:hover:text-pink-400 transition-colors">
                <Github className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/in/sarvesh-yadav-95321489/" className="text-gray-600 hover:text-red-500 dark:hover:text-pink-400 transition-colors">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="mailto:sarvesh.y305@gmail.com" className="text-gray-600 hover:text-red-500 dark:hover:text-pink-400 transition-colors">
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 0.5 }}
        className="py-12 bg-gradient-to-r from-red-500 to-pink-500 text-white"
      >
        <div className="container px-4 mx-auto text-center">
          <p>© 2025 Sarvesh Yadav | Built with Passion</p>
        </div>
      </motion.footer>
    </main>
  );
}