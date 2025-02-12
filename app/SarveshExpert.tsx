"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { ArrowRight } from "lucide-react"
import { useRef } from 'react';

interface SarveshExpertProps {
  experienceRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function SarveshExpert({ experienceRef, contactRef }: SarveshExpertProps) {

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExperienceClick = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background dark:from-primary/20 dark:to-background"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sarvesh Yadav
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-4xl mb-6 text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Java Expert",
              2000,
              "Angular Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          With 10+ years of experience in building robust and scalable applications
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
        <div className="flex gap-6 justify-center">
  <Button size="lg" onClick={handleContactClick} className="rounded-full text-lg px-8 bg-primary text-white hover:bg-primary-dark transition-colors dark:text-black">
    Contact Me
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
  <Button variant="outline" onClick={handleExperienceClick} size="lg" className="rounded-full text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
    Experience
  </Button>
</div>
          
        </motion.div>
      </div>
    </section>
  )
}

