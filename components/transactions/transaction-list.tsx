"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, Search, Filter, ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock transaction data
const transactions = [
  {
    id: 1,
    type: "send",
    icon: ArrowUpRight,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/20",
    asset: "ETH",
    amount: "0.5 ETH",
    to: "0x28C6c06298d514Db089934071355E5743bf21d60",
    toName: "Binance",
    status: "confirmed",
    date: "May 16, 2025",
    time: "6:30 PM",
    hash: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    fee: "0.002 ETH",
  },
  {
    id: 2,
    type: "receive",
    icon: ArrowDownLeft,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/20",
    asset: "USDC",
    amount: "1,000 USDC",
    from: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    fromName: "Coinbase",
    status: "confirmed",
    date: "May 15, 2025",
    time: "2:45 PM",
    hash: "0x88b098defB751B7401B5f6d8976F71C7656EC7ab",
    fee: "0.001 ETH",
  },
  {
    id: 3,
    type: "swap",
    icon: RefreshCw,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-500/20",
    asset: "ETH → USDT",
    amount: "0.2 ETH → 400 USDT",
    to: "Uniswap V3",
    status: "confirmed",
    date: "May 14, 2025",
    time: "11:20 AM",
    hash: "0xdefB751B7401B5f6d8976F71C7656EC7ab88b098",
    fee: "0.003 ETH",
  },
  {
    id: 4,
    type: "send",
    icon: ArrowUpRight,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/20",
    asset: "LINK",
    amount: "25 LINK",
    to: "0x5f6d8976F71C7656EC7ab88b098defB751B7401B",
    status: "confirmed",
    date: "May 13, 2025",
    time: "9:15 AM",
    hash: "0x401B5f6d8976F71C7656EC7ab88b098defB751B7",
    fee: "0.001 ETH",
  },
  {
    id: 5,
    type: "receive",
    icon: ArrowDownLeft,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/20",
    asset: "ETH",
    amount: "1.2 ETH",
    from: "0x6EC7ab88b098defB751B7401B5f6d8976F71C765",
    status: "confirmed",
    date: "May 12, 2025",
    time: "4:50 PM",
    hash: "0x976F71C7656EC7ab88b098defB751B7401B5f6d8",
    fee: "0.002 ETH",
  },
]

export default function TransactionList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["send", "receive", "swap"])
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null)

  const filteredTransactions = transactions.filter(
    (tx) =>
      selectedTypes.includes(tx.type) &&
      (tx.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.hash.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (tx.fromName && tx.fromName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (tx.toName && tx.toName.toLowerCase().includes(searchTerm.toLowerCase()))),
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="web3-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Transaction History</h2>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <Filter size={14} className="mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem
                checked={selectedTypes.includes("send")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedTypes([...selectedTypes, "send"])
                  } else {
                    setSelectedTypes(selectedTypes.filter((type) => type !== "send"))
                  }
                }}
              >
                Sent
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={selectedTypes.includes("receive")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedTypes([...selectedTypes, "receive"])
                  } else {
                    setSelectedTypes(selectedTypes.filter((type) => type !== "receive"))
                  }
                }}
              >
                Received
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={selectedTypes.includes("swap")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedTypes([...selectedTypes, "swap"])
                  } else {
                    setSelectedTypes(selectedTypes.filter((type) => type !== "swap"))
                  }
                }}
              >
                Swaps
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
        <Input
          placeholder="Search by asset, hash, or address..."
          className="pl-9 bg-secondary/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rounded-lg border border-secondary/50 overflow-hidden">
        <Table>
          <TableHeader className="bg-secondary/30">
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Asset</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx, index) => (
                <motion.tr
                  key={tx.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className={`group hover:bg-secondary/30 transition-colors ${
                    selectedTransaction === tx.id ? "bg-secondary/40" : ""
                  }`}
                  onClick={() => setSelectedTransaction(tx.id)}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-full ${tx.iconBg}`}>
                        <tx.icon className={`w-3.5 h-3.5 ${tx.iconColor}`} />
                      </div>
                      <span className="capitalize">{tx.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{tx.asset}</TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{tx.date}</span>
                      <span className="text-xs text-muted-foreground">{tx.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500/30">
                      <Check size={12} className="mr-1" />
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-70 group-hover:opacity-100 transition-opacity"
                          >
                            <ExternalLink size={16} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View on Etherscan</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </motion.tr>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No transactions found matching your filters
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center mt-4">
        <Button variant="outline" size="sm">
          Load More
        </Button>
      </div>
    </motion.div>
  )
}
