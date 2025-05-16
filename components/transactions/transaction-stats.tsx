"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, TrendingUp } from "lucide-react"

export default function TransactionStats() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {/* Total Transactions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="web3-card p-6"
      >
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <RefreshCw size={16} />
          <span className="text-sm">Total Transactions</span>
        </div>
        <div className="text-3xl font-bold">{isLoaded ? <CountUp end={247} duration={2} separator="," /> : "0"}</div>
        <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
          <TrendingUp size={12} />
          <span>+12% from last month</span>
        </div>
      </motion.div>

      {/* Outgoing */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="web3-card p-6"
      >
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <ArrowUpRight size={16} />
          <span className="text-sm">Outgoing</span>
        </div>
        <div className="text-3xl font-bold">{isLoaded ? <CountUp end={142} duration={2} separator="," /> : "0"}</div>
        <div className="text-xs text-muted-foreground mt-1">
          <span className="text-blue-500">5.2 ETH</span> sent in total
        </div>
      </motion.div>

      {/* Incoming */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="web3-card p-6"
      >
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <ArrowDownLeft size={16} />
          <span className="text-sm">Incoming</span>
        </div>
        <div className="text-3xl font-bold">{isLoaded ? <CountUp end={105} duration={2} separator="," /> : "0"}</div>
        <div className="text-xs text-muted-foreground mt-1">
          <span className="text-green-500">8.7 ETH</span> received in total
        </div>
      </motion.div>

      {/* Gas Spent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="web3-card p-6"
      >
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-muted-foreground"
          >
            <path
              d="M11.9975 3L11.8578 3.47729V15.3836L11.9975 15.5233L17.3948 12.2424L11.9975 3Z"
              fill="currentColor"
            />
            <path d="M11.9975 3L6.60022 12.2424L11.9975 15.5233V9.71343V3Z" fill="currentColor" fillOpacity="0.8" />
            <path
              d="M11.9975 16.7708L11.918 16.8691V21.2112L11.9975 21.4488L17.3987 13.4915L11.9975 16.7708Z"
              fill="currentColor"
            />
            <path d="M11.9975 21.4488V16.7708L6.60022 13.4915L11.9975 21.4488Z" fill="currentColor" fillOpacity="0.8" />
            <path d="M11.9975 15.5233L17.3948 12.2424L11.9975 9.71343V15.5233Z" fill="currentColor" fillOpacity="0.6" />
            <path d="M6.60022 12.2424L11.9975 15.5233V9.71343L6.60022 12.2424Z" fill="currentColor" fillOpacity="0.6" />
          </svg>
          <span className="text-sm">Gas Spent</span>
        </div>
        <div className="text-3xl font-bold">
          {isLoaded ? <CountUp end={0.187} decimals={3} duration={2} /> : "0.000"}
          <span className="text-lg"> ETH</span>
        </div>
        <div className="text-xs text-yellow-500 mt-1">≈ $374.00 USD</div>
      </motion.div>
    </motion.div>
  )
}
