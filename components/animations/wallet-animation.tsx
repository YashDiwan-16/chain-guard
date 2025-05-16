"use client"

import { motion } from "framer-motion"
import { Shield, Wallet, Zap } from "lucide-react"

export default function WalletAnimation() {
  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Main wallet */}
      <motion.div
        className="absolute inset-0 web3-card p-8 flex items-center justify-center"
        initial={{ y: 20 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 4,
          ease: "easeInOut",
        }}
      >
        <Wallet className="w-24 h-24 text-primary" />
      </motion.div>

      {/* Orbiting elements */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/80 p-3 rounded-full"
          whileHover={{ scale: 1.2 }}
        >
          <Shield className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-purple-500/80 p-3 rounded-full"
          whileHover={{ scale: 1.2 }}
        >
          <Zap className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Glowing effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl filter blur-xl opacity-50 animate-pulse-glow"></div>

      {/* Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
