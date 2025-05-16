"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, AlertTriangle, CheckCircle, Search, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock data for token approvals
const approvals = [
  {
    id: 1,
    token: "USDC",
    tokenIcon: "💵",
    spender: "Uniswap V3: Router",
    spenderAddress: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
    amount: "Unlimited",
    risk: "Low",
    riskColor: "text-green-500",
  },
  {
    id: 2,
    token: "WETH",
    tokenIcon: "🔷",
    spender: "Unknown Contract",
    spenderAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    amount: "Unlimited",
    risk: "High",
    riskColor: "text-red-500",
  },
  {
    id: 3,
    token: "LINK",
    tokenIcon: "🔗",
    spender: "Aave V3: Pool",
    spenderAddress: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
    amount: "1,000 LINK",
    risk: "Low",
    riskColor: "text-green-500",
  },
  {
    id: 4,
    token: "APE",
    tokenIcon: "🐵",
    spender: "Suspicious DEX",
    spenderAddress: "0x1111111254EEB25477B68fb85Ed929f73A960582",
    amount: "Unlimited",
    risk: "Medium",
    riskColor: "text-yellow-500",
  },
  {
    id: 5,
    token: "DAI",
    tokenIcon: "🟡",
    spender: "Compound",
    spenderAddress: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    amount: "Unlimited",
    risk: "Low",
    riskColor: "text-green-500",
  },
]

export default function TokenApprovals() {
  const [searchTerm, setSearchTerm] = useState("")
  const [revoking, setRevoking] = useState<number | null>(null)

  const filteredApprovals = approvals.filter(
    (approval) =>
      approval.token.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.spender.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleRevoke = (id: number) => {
    setRevoking(id)
    setTimeout(() => {
      setRevoking(null)
    }, 2000)
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
          <Shield className="text-primary" size={20} />
          Token Approvals
        </h2>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
        <Input
          placeholder="Search by token or spender..."
          className="pl-9 bg-secondary/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rounded-lg border border-secondary/50 overflow-hidden">
        <Table>
          <TableHeader className="bg-secondary/30">
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Spender</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApprovals.map((approval, index) => (
              <motion.tr
                key={approval.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="group hover:bg-secondary/30 transition-colors"
              >
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span>{approval.tokenIcon}</span>
                    {approval.token}
                  </div>
                </TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-center gap-1 underline decoration-dotted underline-offset-2">
                        {approval.spender}
                        <ExternalLink size={12} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs font-mono">{approval.spenderAddress}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>{approval.amount}</TableCell>
                <TableCell>
                  <div className={`flex items-center gap-1 ${approval.riskColor}`}>
                    {approval.risk === "High" ? (
                      <AlertTriangle size={14} />
                    ) : approval.risk === "Medium" ? (
                      <AlertTriangle size={14} />
                    ) : (
                      <CheckCircle size={14} />
                    )}
                    {approval.risk}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant={approval.risk === "High" ? "destructive" : "outline"}
                    size="sm"
                    onClick={() => handleRevoke(approval.id)}
                    disabled={revoking === approval.id}
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  >
                    {revoking === approval.id ? (
                      <span className="flex items-center gap-1">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Revoking...
                      </span>
                    ) : (
                      "Revoke"
                    )}
                  </Button>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  )
}
