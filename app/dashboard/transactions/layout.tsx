import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Transaction Manager | ChainGuard",
  description: "Monitor, analyze, and manage your on-chain transactions",
}

export default function TransactionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
