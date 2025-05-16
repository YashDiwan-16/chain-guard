"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Bell, Moon, Sun, ChevronDown, RefreshCw } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function DashboardNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-secondary/30 backdrop-blur-md border-b border-secondary/50 p-4 flex items-center justify-between"
    >
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome back, Crypto Defender</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Network Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Ethereum</span>
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Ethereum</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Polygon</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span>Binance Smart Chain</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Refresh Button */}
        <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isRefreshing}>
          <RefreshCw size={18} className={isRefreshing ? "animate-spin" : ""} />
        </Button>

        {/* Notifications */}
        <Button variant="outline" size="icon" className="relative">
          <Bell size={18} />
          <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px]">3</Badge>
        </Button>

        {/* Theme Toggle */}
        <Button variant="outline" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
    </motion.div>
  )
}
