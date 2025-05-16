"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, ExternalLink, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock pending transactions
const pendingTransactions = [
  {
    id: 1,
    type: "Swap",
    from: "0.5 ETH",
    to: "~1,250 USDC",
    hash: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    time: "2 minutes ago",
    progress: 35,
    estimatedTime: "~3 min remaining",
  },
  {
    id: 2,
    type: "Approval",
    from: "LINK",
    to: "Aave V3",
    hash: "0x88b098defB751B7401B5f6d8976F71C7656EC7ab",
    time: "1 minute ago",
    progress: 75,
    estimatedTime: "~1 min remaining",
  },
]

export default function PendingTransactions() {
  const [transactions, setTransactions] = useState(pendingTransactions)

  const handleCancel = (id: number) => {
    setTransactions(transactions.filter((tx) => tx.id !== id))
  }

  const handleSpeedUp = (id: number) => {
    setTransactions(
      transactions.map((tx) =>
        tx.id === id
          ? {
              ...tx,
              progress: Math.min(tx.progress + 20, 95),
              estimatedTime: "~30 sec remaining",
            }
          : tx,
      ),
    )
  }

  if (transactions.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="web3-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Clock className="text-primary" size={20} />
          Pending Transactions
        </h2>
      </div>

      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            className="bg-secondary/30 rounded-lg p-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{tx.type}</span>
                  <span className="text-muted-foreground">
                    {tx.from} → {tx.to}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground font-mono truncate">{tx.hash}</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-4 w-4">
                          <ExternalLink size={10} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View on Etherscan</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => handleSpeedUp(tx.id)}>
                  Speed Up
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleCancel(tx.id)}>
                  <XCircle size={16} className="mr-1 text-red-500" />
                  Cancel
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{tx.time}</span>
                <span className="text-muted-foreground">{tx.estimatedTime}</span>
              </div>
              <Progress value={tx.progress} className="h-2" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
