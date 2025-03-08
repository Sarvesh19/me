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
  className="min-h-screen flex items-center justify-center"
>
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text  text-foreground"
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
              "NextJS Developer",
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
          Full Stack Expert with 10+ years of experience
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
        <div className="flex gap-6 justify-center">
        <Button
              size="lg"
              onClick={handleContactClick}
              className="rounded-full text-lg px-8 bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition-colors shadow-md"
            >
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={handleExperienceClick}
              size="lg"
              className="rounded-full text-lg px-8 border-white bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text hover:bg-white hover:from-red-500 hover:to-pink-500  transition-colors shadow-md"
            > Experience
              </Button>
</div>
          
        </motion.div>
      </div>
    </section>
  )
}

