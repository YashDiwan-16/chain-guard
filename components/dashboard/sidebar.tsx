"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, LayoutDashboard, Activity, Lightbulb, Settings, ChevronLeft, ChevronRight, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: pathname === "/dashboard" },
    {
      icon: Activity,
      label: "Transactions",
      href: "/dashboard/transactions",
      active: pathname === "/dashboard/transactions",
    },
    { icon: Lightbulb, label: "Insights", href: "/dashboard/insights", active: pathname === "/dashboard/insights" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", active: pathname === "/dashboard/settings" },
  ]

  return (
    <motion.div
      className={cn(
        "bg-secondary/30 backdrop-blur-md border-r border-secondary/50 h-screen flex flex-col z-20",
        collapsed ? "w-20" : "w-64",
      )}
      animate={{ width: collapsed ? 80 : 256 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <div className="p-4 border-b border-secondary/50 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-primary" />
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl font-bold gradient-text"
            >
              ChainGuard
            </motion.span>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-muted-foreground hover:text-foreground"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors",
              item.active
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            <item.icon size={20} />
            {!collapsed && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {item.label}
              </motion.span>
            )}
          </Link>
        ))}
      </div>

      {/* Wallet Address */}
      <div className="p-4 border-t border-secondary/50">
        <div className="web3-card p-3 flex items-center gap-2 overflow-hidden">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          {!collapsed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="truncate text-sm"
            >
              0x71C...3E4f
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="truncate text-sm"
            >
              0x71C
            </motion.div>
          )}
        </div>

        <Button
          variant="ghost"
          size={collapsed ? "icon" : "default"}
          className="w-full mt-4 text-muted-foreground hover:text-destructive"
        >
          <LogOut size={18} />
          {!collapsed && <span className="ml-2">Disconnect</span>}
        </Button>
      </div>
    </motion.div>
  )
}
