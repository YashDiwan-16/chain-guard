"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Bot, AlertTriangle, Shield, CheckCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock AI insights
const insights = [
  {
    id: 1,
    type: "high",
    icon: AlertTriangle,
    iconColor: "text-red-500",
    message:
      "You've approved unlimited WETH to an unknown contract. This is a high-risk approval that should be revoked immediately.",
  },
  {
    id: 2,
    type: "medium",
    icon: Shield,
    iconColor: "text-yellow-500",
    message: "Consider setting a spending limit for your USDC approval on Uniswap instead of unlimited.",
  },
  {
    id: 3,
    type: "info",
    icon: CheckCircle,
    iconColor: "text-blue-500",
    message:
      "Your wallet has 3 dormant approvals that haven't been used in 6+ months. Consider revoking them to improve security.",
  },
]

export default function AiInsights() {
  const [visibleInsights, setVisibleInsights] = useState<number[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    // Simulate typing effect by revealing insights one by one
    const timer = setTimeout(() => {
      insights.forEach((insight, index) => {
        setTimeout(() => {
          setVisibleInsights((prev) => [...prev, insight.id])
        }, index * 1000)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setVisibleInsights([])

    setTimeout(() => {
      insights.forEach((insight, index) => {
        setTimeout(() => {
          setVisibleInsights((prev) => [...prev, insight.id])
        }, index * 1000)
      })

      setTimeout(
        () => {
          setIsRefreshing(false)
        },
        insights.length * 1000 + 500,
      )
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="web3-card p-6 h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Bot className="text-primary" size={20} />
          AI Insights
        </h2>
        <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isRefreshing}>
          <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
        </Button>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, x: 20 }}
            animate={visibleInsights.includes(insight.id) ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30"
          >
            <insight.icon className={`w-5 h-5 ${insight.iconColor} mt-0.5 flex-shrink-0`} />
            <p className="text-sm">{insight.message}</p>
          </motion.div>
        ))}

        {isRefreshing && visibleInsights.length === 0 && (
          <div className="flex items-center justify-center p-8">
            <div className="flex flex-col items-center gap-2">
              <Bot className="w-8 h-8 text-primary animate-pulse" />
              <p className="text-sm text-muted-foreground">Analyzing your wallet...</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-secondary/50">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Bot size={12} />
          <span>Powered by GPT-4o</span>
        </div>
      </div>
    </motion.div>
  )
}
