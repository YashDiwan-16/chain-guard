"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export default function RiskScore() {
  const [score, setScore] = useState(0)
  const targetScore = 65 // Medium risk

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setScore((prevScore) => {
          if (prevScore < targetScore) {
            return prevScore + 1
          }
          clearInterval(interval)
          return prevScore
        })
      }, 20)

      return () => clearInterval(interval)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Determine color based on score
  const getColor = () => {
    if (score < 40) return "#ef4444" // Red
    if (score < 70) return "#eab308" // Yellow
    return "#22c55e" // Green
  }

  // Calculate circumference
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  // Determine risk level text
  const getRiskLevel = () => {
    if (score < 40) return "High Risk"
    if (score < 70) return "Medium Risk"
    return "Low Risk"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="web3-card p-6 h-full flex flex-col items-center justify-center"
    >
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2 self-start">
        <AlertTriangle className="text-primary" size={20} />
        Risk Score
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Background circle */}
        <svg width="180" height="180" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r={radius} fill="transparent" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="12" />
          {/* Progress circle */}
          <motion.circle
            cx="90"
            cy="90"
            r={radius}
            fill="transparent"
            stroke={getColor()}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            transform="rotate(-90 90 90)"
          />
        </svg>

        {/* Score text */}
        <div className="absolute flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-4xl font-bold"
          >
            {score}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-sm text-muted-foreground"
          >
            out of 100
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-6 text-center"
      >
        <div className="text-lg font-semibold" style={{ color: getColor() }}>
          {getRiskLevel()}
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {score < 40
            ? "Immediate action required"
            : score < 70
              ? "Some issues need attention"
              : "Your wallet is secure"}
        </p>
      </motion.div>
    </motion.div>
  )
}
