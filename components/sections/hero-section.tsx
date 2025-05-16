"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Wallet } from "lucide-react"
import WalletAnimation from "@/components/animations/wallet-animation"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ChainGuard: Your AI-Powered Web3 Shield
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connect your wallet. Get instant insights. Stay safe in crypto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="glow-effect group relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              onClick={() => alert("Wallet connection would be implemented here")}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center"
        >
          <WalletAnimation />
        </motion.div>
      </div>
    </section>
  )
}
