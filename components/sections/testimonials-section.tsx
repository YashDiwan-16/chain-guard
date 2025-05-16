"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "ChainGuard saved me from a rug pull! The AI detected a suspicious approval and alerted me before I lost my funds.",
    author: "CryptoUser.eth",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "I've been using ChainGuard for 3 months and it's caught multiple suspicious contracts trying to access my wallet.",
    author: "0xAlice.lens",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "As a DeFi power user, ChainGuard gives me peace of mind. The AI suggestions are actually helpful, not just generic warnings.",
    author: "DeFiWhale.eth",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Web3 users who trust ChainGuard to protect their assets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="web3-card h-full">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/40 mb-4" />
                  <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
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
