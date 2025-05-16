"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, Loader2 } from "lucide-react"

interface ConnectWalletButtonProps {
  onConnect?: () => void
  className?: string
}

export default function ConnectWalletButton({ onConnect, className }: ConnectWalletButtonProps) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    if (isConnected) return

    setIsConnecting(true)

    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false)
      setIsConnected(true)
      onConnect?.()
    }, 1500)
  }

  return (
    <Button
      onClick={handleConnect}
      className={`glow-effect group relative overflow-hidden ${className}`}
      disabled={isConnecting}
    >
      <span className="relative z-10 flex items-center gap-2">
        {isConnecting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Connecting...</span>
          </>
        ) : isConnected ? (
          <>
            <Wallet className="w-4 h-4" />
            <span>Connected</span>
          </>
        ) : (
          <>
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </>
        )}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </Button>
  )
}
