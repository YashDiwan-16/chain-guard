"use client"

import { motion } from "framer-motion"
import { Brain, ShieldCheck, CheckCircle } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    icon: Brain,
    title: "Analyze",
    description: "Fetch your on-chain history",
    delay: 0,
  },
  {
    icon: ShieldCheck,
    title: "Assess",
    description: "AI identifies risks in approvals & transfers",
    delay: 0.2,
  },
  {
    icon: CheckCircle,
    title: "Act",
    description: "Follow actionable suggestions to stay safe",
    delay: 0.4,
  },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ChainGuard makes Web3 security simple with our three-step process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="web3-card p-8 flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6"
              >
                <step.icon className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connection lines between steps (visible on desktop) */}
        <div className="hidden md:block">
          <motion.div
            className="absolute top-1/2 left-1/3 w-1/6 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-1/6 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  )
}
