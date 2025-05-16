"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Copy, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

// Mock transaction details
const transactionDetails = {
  id: 1,
  type: "send",
  asset: "ETH",
  amount: "0.5 ETH",
  to: "0x28C6c06298d514Db089934071355E5743bf21d60",
  toName: "Binance",
  status: "confirmed",
  date: "May 16, 2025",
  time: "6:30 PM",
  hash: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  blockNumber: "18245631",
  confirmations: "24",
  fee: "0.002 ETH",
  gasPrice: "25 Gwei",
  gasLimit: "21,000",
  gasUsed: "21,000",
  nonce: "42",
  securityAnalysis: {
    risk: "low",
    warnings: [],
    notes: ["Transaction to a known exchange", "Normal gas price for the network"],
  },
}

export default function TransactionDetails() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="web3-card p-6 h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Transaction Details</h2>
        <Button variant="outline" size="icon">
          <ExternalLink size={16} />
        </Button>
      </div>

      <div className="space-y-6">
        {/* Transaction Status */}
        <div className="bg-secondary/30 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-green-500/20">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="font-medium">Confirmed</div>
              <div className="text-xs text-muted-foreground">24 confirmations</div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm">{transactionDetails.date}</div>
            <div className="text-xs text-muted-foreground">{transactionDetails.time}</div>
          </div>
        </div>

        {/* Transaction Type */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ArrowUpRight className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-muted-foreground">Sent</span>
          </div>
          <div className="text-2xl font-bold">{transactionDetails.amount}</div>
          <div className="text-sm text-muted-foreground mt-1">≈ $1,000.00 USD</div>
        </div>

        <Separator className="bg-secondary/50" />

        {/* Transaction Details */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">To</span>
            <span className="text-sm font-medium">{transactionDetails.toName}</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-sm text-muted-foreground">Address</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-mono truncate max-w-[150px]">{transactionDetails.to}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(transactionDetails.to)}
              >
                {copied ? <CheckCircle size={12} className="text-green-500" /> : <Copy size={12} />}
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Transaction Hash</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-mono truncate max-w-[150px]">{transactionDetails.hash}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyToClipboard(transactionDetails.hash)}
              >
                {copied ? <CheckCircle size={12} className="text-green-500" /> : <Copy size={12} />}
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Block</span>
            <span className="text-sm">{transactionDetails.blockNumber}</span>
          </div>
        </div>

        <Separator className="bg-secondary/50" />

        {/* Gas Details */}
        <div className="space-y-3">
          <h3 className="font-medium">Gas Information</h3>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Transaction Fee</span>
            <span className="text-sm">{transactionDetails.fee}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Gas Price</span>
            <span className="text-sm">{transactionDetails.gasPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Gas Limit</span>
            <span className="text-sm">{transactionDetails.gasLimit}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Gas Used</span>
            <span className="text-sm">{transactionDetails.gasUsed}</span>
          </div>
        </div>

        <Separator className="bg-secondary/50" />

        {/* Security Analysis */}
        <div className="space-y-3">
          <h3 className="font-medium">Security Analysis</h3>
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="font-medium text-green-500">Low Risk Transaction</span>
            </div>
            <ul className="space-y-1 pl-6 text-sm list-disc">
              {transactionDetails.securityAnalysis.notes.map((note, index) => (
                <li key={index} className="text-muted-foreground">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
