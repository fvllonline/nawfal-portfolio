"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Mrs. BOUJNAH Mina",
    role: "Founder/CEO of",
    company: "MB Way",
    content:
      "Your work demonstrates a strong mastery of full stack skills, with a methodical and well-structured approach. The code is both clean and optimized, ensuring good performance and future scalability. Congratulations on this high-quality achievement.",
    rating: 5,
    image: "/Mina.jpg",
  },
  {
    name: "Mr. BENNAY Youness",
    role: "Founder/CEO of",
    company: "Adam Adventure Tours & Tourism",
    content:
      "Working with Nawfal was a game-changer for our project. His full-stack expertise bridged our frontend and backend seamlessly, delivering a React + Laravel application 2 weeks ahead of schedule. His clean code and problem-solving skills set him apart - we've hired him for three more projects since!",
    rating: 5,
    image: "/Youness.jpg",
  },
  {
    name: "Mr. BOUJJAR Ayman",
    role: "Full Stack Web Developer",
    company: "LionsGeek",
    content:
      "Working with Nawfal was a pleasure. His technical expertise combined with his communication skills made our project a success. Highly recommended!",
    rating: 5,
    image: "/Ayman.jpg", 
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-black max-w-2xl mx-auto text-pretty">
            What colleagues and collaborators say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col">
                  {/* Header avec citation + étoiles */}
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-8 w-8 text-primary/30" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Texte du témoignage */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">"{testimonial.content}"</p>

                  {/* Infos auteur */}
                  <div className="mt-auto border-t pt-4 flex items-center gap-4">
                    {/* Photo circulaire */}
                    {testimonial.image && (
                      <div className="w-12 h-12 rounded-full overflow-hidden shadow-md ring-2 ring-primary/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
