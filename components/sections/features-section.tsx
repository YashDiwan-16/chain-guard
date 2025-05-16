"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Bot, Shield, Zap, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Forget revoke.cash. This is smarter.",
    description: "ChainGuard doesn't just show approvals - it analyzes them for risk and suggests actions.",
    delay: 0,
  },
  {
    icon: Bot,
    title: "GPT-4 is your personal crypto watchdog.",
    description: "Advanced AI analyzes your wallet activity and identifies potential security threats.",
    delay: 0.1,
  },
  {
    icon: Zap,
    title: "Real-time protection against scams.",
    description: "Get instant alerts when suspicious activity is detected in your wallet.",
    delay: 0.2,
  },
  {
    icon: RefreshCw,
    title: "Continuous monitoring, 24/7.",
    description: "ChainGuard keeps watching your wallet even when you're not actively using it.",
    delay: 0.3,
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-background to-background/95 relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ChainGuard combines AI intelligence with blockchain security to keep your assets safe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -5 }}
              className="web3-card p-8 h-full"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
