"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Code, Shield } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    name: "TCF TP - B2",
    icon: Globe,
    category: "Language",
    logo: "/tcf.jpg", // ton logo TCF
    institution: "Institut Francais",
  },
  {
    name: "English For IT 1 & 2",
    icon: Globe,
    category: "Language",
    logo: "/cisco.jpg", // ex: Coursera ou British Council
    institution: "Cisco Networking Academy",
  },
  {
    name: "JavaScript Essentials 1 & 2",
    icon: Code,
    category: "Programming",
    logo: "/cisco.jpg", // Cisco
    institution: "Cisco Networking Academy",
  },
  {
    name: "Python Essentials 1 & 2",
    icon: Code,
    category: "Programming",
    logo: "/cisco.jpg",
    institution: "Cisco Networking Academy",
  },
  {
    name: "Introduction to CyberSecurity",
    icon: Shield,
    category: "Security",
    logo: "/cisco.jpg",
    institution: "Cisco Networking Academy",
  },
  {
    name: "Junior CyberSecurity Analyst Path",
    icon: Shield,
    category: "Security",
    logo: "/cisco.jpg",
    institution: "Cisco Networking Academy",
  },
]

const categoryColors = {
  Language: "bg-blue-100 text-blue-800",
  Programming: "bg-green-100 text-green-800",
  Security: "bg-red-100 text-red-800",
  Other: "bg-gray-100 text-gray-800",
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and
            expertise.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  {/* Logo + Icon */}
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    {cert.logo ? (
                      <Image
                        src={cert.logo}
                        alt={cert.institution || cert.name}
                        width={64}
                        height={64}
                        className="object-contain rounded-md"
                      />
                    ) : (
                      <cert.icon className="h-10 w-10 text-primary" />
                    )}
                  </div>

                  {/* Certification name */}
                  <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>

                  {/* Institution */}
                  {cert.institution && (
                    <p className="text-sm text-muted-foreground mb-2">{cert.institution}</p>
                  )}

                  {/* Category Badge */}
                  <Badge
                    variant="secondary"
                    className={`${categoryColors[cert.category as keyof typeof categoryColors]} border-0`}
                  >
                    {cert.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
