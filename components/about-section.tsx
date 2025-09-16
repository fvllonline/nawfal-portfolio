"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Zap, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const skills = [
  { name: "Adaptability", icon: Zap },
  { name: "Team Spirit", icon: Users },
  { name: "Creativity", icon: Lightbulb },
]

const languages = [
  { name: "Arabic", level: 100, label: "Native" },
  { name: "French", level: 95, label: "Fluent" },
  { name: "English", level: 85, label: "Good command" },
]

const personalInfo = [
  {
    title: "Background",
    content:
      "Passionate developer with strong skills in React and Laravel. Creative, adaptable, and eager to contribute to innovative projects.",
  },
  {
    title: "Interests",
    content:
      "When I'm not coding, I enjoy exploring new technologies, contributing to open source projects, and staying updated with industry trends.",
  },
]

export function AboutSection() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0)

  return (
    <section id="about" className="py-20 bg-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-primary mb-4"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-black max-w-2xl mx-auto"
          >
            Crafting digital experiences with passion and precision
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Profile Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative">
              <Image
                src="PRFLN.png"
                alt="Professional portrait"
                width={400}
                height={600}
                className="w-[120%] h-[452px] object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right Side - Three Columns */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {/* Soft Skills Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-2 flex items-center">
                <Zap className="h-6 w-6 text-primary mr-2" />
                Soft Skills
              </h3>
              <div className="w-12 h-1 bg-primary mb-6"></div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Card className="bg-gray-900 border-gray-800 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-primary text-white">
                          <skill.icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-white">{skill.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-2 flex items-center">
                <Users className="h-6 w-6 text-primary mr-2" />
                Personal Info
              </h3>
              <div className="w-12 h-1 bg-primary mb-6"></div>

              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-xl transition">
                      <CardContent className="p-0">
                        <button
                          aria-label={`Toggle ${info.title}`}
                          onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-200"
                        >
                          <span className="font-medium text-white">{info.title}</span>
                          {expandedSection === index ? (
                            <ChevronUp className="h-5 w-5 text-blue-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedSection === index ? "auto" : 0,
                            opacity: expandedSection === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 text-gray-300 leading-relaxed">{info.content}</div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-2 flex items-center">
                <Lightbulb className="h-6 w-6 text-primary mr-2" />
                Languages
              </h3>
              <div className="w-12 h-1 bg-primary mb-6"></div>

              <div className="space-y-6">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-700">{language.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{language.label}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.level}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-3 bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
