import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardNavbar from "@/components/dashboard/navbar"
import WalletSummary from "@/components/dashboard/wallet-summary"
import TokenApprovals from "@/components/dashboard/token-approvals"
import AiInsights from "@/components/dashboard/ai-insights"
import RiskScore from "@/components/dashboard/risk-score"
import ActivityTimeline from "@/components/dashboard/activity-timeline"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <WalletSummary />
              </div>
              <div>
                <RiskScore />
              </div>
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TokenApprovals />
              </div>
              <div>
                <AiInsights />
              </div>
            </div>

            {/* Bottom Row */}
            <div>
              <ActivityTimeline />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
