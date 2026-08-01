"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Smartphone, Palette, Compass as Wordpress, Monitor, Database, MessageSquare } from "lucide-react"

const services = [
  {
    title: "Frontend Development",
    description: "Modern, responsive web applications using React, Next.js, and cutting-edge technologies.",
    icon: Code,
  },
  {
    title: "Backend Development",
    description: "Robust server-side solutions with Laravel, Node.js, and API development.",
    icon: Server,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications with React Native and modern frameworks.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that combine aesthetics with functionality.",
    icon: Palette,
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress themes, plugins, and complete website solutions.",
    icon: Wordpress,
  },
  {
    title: "Desktop Applications",
    description: "Cross-platform desktop applications using Electron and modern technologies.",
    icon: Monitor,
  },
  {
    title: "Database Modeling",
    description: "Efficient database design and optimization for scalable applications.",
    icon: Database,
  },
  {
    title: "Technical Consulting",
    description: "Strategic technical guidance and architecture planning for your projects.",
    icon: MessageSquare,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive web development services to bring your ideas to life with modern technologies and best
            practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
