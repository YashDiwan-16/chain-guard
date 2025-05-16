"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, ArrowUpRight, ArrowDownLeft, Shield, Ban, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock activity data
const activities = [
  {
    id: 1,
    type: "approval",
    icon: Shield,
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-500/20",
    title: "Approved USDC",
    description: "Unlimited approval to Uniswap V3: Router",
    time: "2 hours ago",
    address: "0x68b3...Fc45",
  },
  {
    id: 2,
    type: "send",
    icon: ArrowUpRight,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/20",
    title: "Sent 0.5 ETH",
    description: "To Binance",
    time: "Yesterday",
    address: "0x28C6...E53b",
  },
  {
    id: 3,
    type: "receive",
    icon: ArrowDownLeft,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/20",
    title: "Received 1,000 USDC",
    description: "From Coinbase",
    time: "2 days ago",
    address: "0x71C7...3E4f",
  },
  {
    id: 4,
    type: "revoke",
    icon: Ban,
    iconColor: "text-red-500",
    iconBg: "bg-red-500/20",
    title: "Revoked WETH Approval",
    description: "Revoked approval from Unknown Contract",
    time: "3 days ago",
    address: "0x7a25...488D",
  },
]

export default function ActivityTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="web3-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Clock className="text-primary" size={20} />
          Recent Activity
        </h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-secondary/50"></div>

        <div className="space-y-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="flex gap-4"
            >
              <div
                className={`relative z-10 w-12 h-12 rounded-full ${activity.iconBg} flex items-center justify-center flex-shrink-0`}
              >
                <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
              </div>

              <div className="flex-1 bg-secondary/30 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>

                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="font-mono">{activity.address}</span>
                  <Button variant="ghost" size="icon" className="h-4 w-4">
                    <ExternalLink size={10} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
