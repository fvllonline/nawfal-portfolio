"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/herobg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            NAWFAL ADDAOUI
          </motion.h1>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-6"
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Creative and adaptable developer passionate about building modern web solutions.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("resume")}
              className="text-lg px-8 py-3 glow-effect hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-3 border-primary/30 text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/fvllonline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:naoufaladdaoui@gmail.com"
              className="text-gray-300 hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
