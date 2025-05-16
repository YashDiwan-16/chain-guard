"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, CheckCircle, Shield, ExternalLink, MessageSquare } from "lucide-react"

// Mock data for the dashboard
const approvals = [
  {
    id: 1,
    token: "USDC",
    spender: "Uniswap V3",
    amount: "Unlimited",
    risk: "Low",
    riskColor: "text-green-500",
  },
  {
    id: 2,
    token: "WETH",
    spender: "Unknown Contract",
    amount: "Unlimited",
    risk: "High",
    riskColor: "text-red-500",
  },
  {
    id: 3,
    token: "LINK",
    spender: "Aave V3",
    amount: "1,000 LINK",
    risk: "Low",
    riskColor: "text-green-500",
  },
  {
    id: 4,
    token: "APE",
    spender: "Suspicious DEX",
    amount: "Unlimited",
    risk: "Medium",
    riskColor: "text-yellow-500",
  },
]

const aiSuggestions = [
  "Revoke the unlimited approval for WETH to Unknown Contract immediately.",
  "Consider setting a spending limit for your USDC approval on Uniswap.",
  "Your wallet has 3 dormant approvals that haven't been used in 6+ months.",
]

export default function DashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} id="dashboard" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Live Dashboard Demo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how ChainGuard protects your wallet with real-time monitoring
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="web3-card p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Wallet Security Score</h3>
              <p className="text-muted-foreground">Based on current approvals and transaction history</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <span className="text-yellow-500 font-bold">65/100</span>
              <span className="text-muted-foreground">Medium Risk</span>
            </div>
          </div>

          <div className="w-full h-4 bg-secondary/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "65%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 web3-card p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-4">Token Approvals</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Token</TableHead>
                    <TableHead>Spender</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {approvals.map((approval) => (
                    <TableRow key={approval.id}>
                      <TableCell className="font-medium">{approval.token}</TableCell>
                      <TableCell>{approval.spender}</TableCell>
                      <TableCell>{approval.amount}</TableCell>
                      <TableCell className={approval.riskColor}>{approval.risk}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Revoke
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="web3-card p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold">AI Suggestions</h3>
            </div>

            <div className="space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30"
                >
                  {index === 0 ? (
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  ) : index === 1 ? (
                    <Shield className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{suggestion}</p>
                </motion.div>
              ))}
            </div>

            <Button className="w-full mt-6">
              View Full Analysis
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
