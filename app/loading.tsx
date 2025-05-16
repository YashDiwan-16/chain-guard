"use client";
import { Shield } from "lucide-react"
import { keyframes } from "@emotion/react"

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-background">
      <div className="relative">
        <Shield className="w-16 h-16 text-primary animate-pulse" />
        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <h2 className="mt-4 text-xl font-medium">Loading ChainGuard...</h2>
      <div className="mt-8 w-48 h-1.5 bg-secondary/30 rounded-full overflow-hidden">
        <div className="h-full bg-primary animate-[shimmer_2s_infinite]"></div>
      </div>
    </div>
  )
}
