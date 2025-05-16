"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { ConnectWalletButton } from "../ui/connect-wallet-button";

export default function DashboardNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-secondary/30 backdrop-blur-md border-b border-secondary/50 p-4 flex items-center justify-between"
    >
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back, Crypto Defender
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Network Selector */}
        <ConnectWalletButton className="hidden sm:block" />

        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
    </motion.div>
  );
}
