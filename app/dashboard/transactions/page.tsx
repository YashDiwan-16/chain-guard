import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardNavbar from "@/components/dashboard/navbar"
import TransactionStats from "@/components/transactions/transaction-stats"
import TransactionList from "@/components/transactions/transaction-list"
import PendingTransactions from "@/components/transactions/pending-transactions"
import TransactionDetails from "@/components/transactions/transaction-details"

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold mb-2">Transaction Manager</h1>
            <p className="text-muted-foreground mb-6">Monitor, analyze, and manage your on-chain transactions</p>

            {/* Top Row - Transaction Stats */}
            <TransactionStats />

            {/* Middle Row - Pending Transactions */}
            <PendingTransactions />

            {/* Bottom Row - Transaction List and Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TransactionList />
              </div>
              <div>
                <TransactionDetails />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
