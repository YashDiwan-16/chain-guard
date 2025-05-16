"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { Wallet, Coins, Clock, ShieldCheck, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WalletSummary() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="web3-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Wallet className="text-primary" size={20} />
          Wallet Summary
        </h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <ExternalLink size={16} className="mr-1" /> View on Etherscan
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* ETH Balance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-secondary/50 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Coins size={16} />
            <span className="text-sm">ETH Balance</span>
          </div>
          <div className="text-2xl font-bold">
            {isLoaded ? <CountUp end={3.721} decimals={3} duration={2} separator="," suffix=" ETH" /> : "0.000 ETH"}
          </div>
          <div className="text-xs text-green-500 mt-1">≈ $7,442.00 USD</div>
        </motion.div>

        {/* Connected Network */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-secondary/50 rounded-lg p-4"
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
              <path
                d="M11.9975 21.4488V16.7708L6.60022 13.4915L11.9975 21.4488Z"
                fill="currentColor"
                fillOpacity="0.8"
              />
              <path
                d="M11.9975 15.5233L17.3948 12.2424L11.9975 9.71343V15.5233Z"
                fill="currentColor"
                fillOpacity="0.6"
              />
              <path
                d="M6.60022 12.2424L11.9975 15.5233V9.71343L6.60022 12.2424Z"
                fill="currentColor"
                fillOpacity="0.6"
              />
            </svg>
            <span className="text-sm">Network</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <div className="text-2xl font-bold">Ethereum</div>
          </div>
          <div className="text-xs text-muted-foreground mt-1">Mainnet</div>
        </motion.div>

        {/* Token Approvals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-secondary/50 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <ShieldCheck size={16} />
            <span className="text-sm">Token Approvals</span>
          </div>
          <div className="text-2xl font-bold">{isLoaded ? <CountUp end={12} duration={2} /> : "0"}</div>
          <div className="text-xs text-yellow-500 mt-1">3 high risk approvals</div>
        </motion.div>

        {/* Last Scan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-secondary/50 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Clock size={16} />
            <span className="text-sm">Last Scan</span>
          </div>
          <div className="text-xl font-bold">2 minutes ago</div>
          <div className="text-xs text-muted-foreground mt-1">May 16, 2025 at 6:45 PM</div>
        </motion.div>
      </div>
    </motion.div>
  )
}
