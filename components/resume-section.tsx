"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Code, Download } from "lucide-react"

const education = [
  { period: "Ongoing", institution: "SUPEMIR", degree: "Bachelor's in Software Development", status: "Current" },
  { period: "2023–2025", institution: "IFIAG", degree: "Advanced Diploma in Software Development", status: "Current" },
  { period: "2022–2023", institution: "Faculty of Sciences Ben M'sick", degree: "SMP", status: "Completed" },
  { period: "2021–2022", institution: "Lycée El Baroudi", degree: "Physics Baccalaureate (French option)", status: "Completed" },
]

const experience = [
  {
    year: "2025",
    company: "Adam Adventure Tours & Tourism",
    role: "Frontend Developer & Web designer",
    description:
      "Full website development with Next.js & Vercel (needs analysis, tech choices, design, deployment, and maintenance).",
    technologies: ["Next.js", "Vercel", "React", "TypeScript"],
  },
  {
    year: "2025",
    company: "MB Way",
    role: "Backend Developer & Brand Designer",
    description: 'Backend development for "Quick Stay" application (Laravel) + Visual identity & branding.',
    technologies: ["Laravel", "PHP", "MySQL", "Branding"],
  },
]

const projects = [
  { year: "2025", title: "E-learning Web App", description: "Main features & technical logic implementation using Inertia.js.", technologies: ["Inertia.js", "Vue.js", "Laravel"] },
  { year: "2025", title: "Backend Web App", description: "APIs development & Postman testing for comprehensive backend solution.", technologies: ["Laravel", "APIs", "Postman"] },
  { year: "2024", title: "Patek Philippe Website Redesign", description: "Frontend redesign using React with modern UI/UX principles.", technologies: ["React", "CSS3", "JavaScript"] },
]

type CardType = "education" | "experience" | "projects" | "download" | null

export function ResumeSection() {
  const [activeCard, setActiveCard] = useState<CardType>(null)

  const handleCardClick = (cardType: CardType) => {
    setActiveCard(activeCard === cardType ? null : cardType)
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/NAWFAL_ADDAOUI_CV.pdf"
    link.download = "NAWFAL_ADDAOUI_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Resume</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Education Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="cursor-pointer">
            <Card
              className={`border hover:border-blue-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg ${
                activeCard === "education" ? "bg-blue-600 border-blue-500 shadow-blue-200" : "bg-gray-50"
              }`}
              onClick={() => handleCardClick("education")}
            >
              <CardContent className="p-6 text-center">
                <GraduationCap className={`h-8 w-8 mx-auto mb-4 ${activeCard === "education" ? "text-white" : "text-blue-600"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${activeCard === "education" ? "text-white" : "text-gray-900"}`}>
                  Education
                </h3>
                <p className={`text-sm ${activeCard === "education" ? "text-blue-100" : "text-gray-500"}`}>Academic background</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="cursor-pointer">
            <Card
              className={`border hover:border-blue-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg ${
                activeCard === "experience" ? "bg-blue-600 border-blue-500 shadow-blue-200" : "bg-gray-50"
              }`}
              onClick={() => handleCardClick("experience")}
            >
              <CardContent className="p-6 text-center">
                <Briefcase className={`h-8 w-8 mx-auto mb-4 ${activeCard === "experience" ? "text-white" : "text-blue-600"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${activeCard === "experience" ? "text-white" : "text-gray-900"}`}>
                  Experiences
                </h3>
                <p className={`text-sm ${activeCard === "experience" ? "text-blue-100" : "text-gray-500"}`}>Professional work</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Academic Projects Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="cursor-pointer">
            <Card
              className={`border hover:border-blue-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg ${
                activeCard === "projects" ? "bg-blue-600 border-blue-500 shadow-blue-200" : "bg-gray-50"
              }`}
              onClick={() => handleCardClick("projects")}
            >
              <CardContent className="p-6 text-center">
                <Code className={`h-8 w-8 mx-auto mb-4 ${activeCard === "projects" ? "text-white" : "text-blue-600"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${activeCard === "projects" ? "text-white" : "text-gray-900"}`}>
                  Academic Projects
                </h3>
                <p className={`text-sm ${activeCard === "projects" ? "text-blue-100" : "text-gray-500"}`}>Student projects</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Download CV Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="cursor-pointer">
            <Card
              className={`border hover:border-blue-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg ${
                activeCard === "download" ? "bg-blue-600 border-blue-500 shadow-blue-200" : "bg-gray-50"
              }`}
              onClick={() => handleCardClick("download")}
            >
              <CardContent className="p-6 text-center">
                <Download className={`h-8 w-8 mx-auto mb-4 ${activeCard === "download" ? "text-white" : "text-blue-600"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${activeCard === "download" ? "text-white" : "text-gray-900"}`}>
                  Download CV
                </h3>
                <p className={`text-sm ${activeCard === "download" ? "text-blue-100" : "text-gray-500"}`}>Get my resume</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          {activeCard && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <Card className="bg-gray-50 border rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  <div>
                    {activeCard === "education" && (
                      <div className="space-y-4">
                        {education.map((edu, index) => (
                          <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="p-3 border rounded-lg bg-gray-100">
                            <div className="flex justify-between items-start mb-2">
                              <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200">
                                {edu.period}
                              </Badge>
                              <Badge variant="outline" className="border-gray-300 text-gray-600">
                                {edu.status}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                            <p className="text-gray-600">{edu.institution}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeCard === "experience" && (
                      <div className="space-y-4">
                        {experience.map((exp, index) => (
                          <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="p-3 border rounded-lg bg-gray-100">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200 mb-2">
                              {exp.year}
                            </Badge>
                            <h4 className="font-semibold text-gray-900 mb-1">{exp.role}</h4>
                            <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs border-gray-300 text-gray-600">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeCard === "projects" && (
                      <div className="space-y-4">
                        {projects.map((project, index) => (
                          <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="p-3 border rounded-lg bg-gray-100">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200 mb-2">
                              {project.year}
                            </Badge>
                            <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs border-gray-300 text-gray-600">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeCard === "download" && (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="text-center py-8">
                        <Download className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Download My CV</h3>
                        <p className="text-gray-600 mb-6">Get the latest version of my resume in PDF format</p>
                        <Button
                          onClick={handleDownloadCV}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download the CV
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
