import { DashboardCard } from "@/components/dashboard-card"

export function DashboardContent() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-syne text-planovo-dark">Dashboard</h1>
          <p className="text-planovo-secondary font-syne mt-2">
            Welcome back! Here's what's happening with your projects.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <DashboardCard
            title="Active Projects"
            content="12 projects currently in progress"
            metric="12"
            metricLabel="Active"
          />
          <DashboardCard
            title="Team Performance"
            content="Overall team productivity this month"
            metric="94%"
            metricLabel="Efficiency"
          />
          <DashboardCard
            title="Tasks Completed"
            content="Tasks completed this week"
            metric="147"
            metricLabel="Completed"
          />
          <DashboardCard
            title="Upcoming Deadlines"
            content="Projects due in the next 7 days"
            metric="5"
            metricLabel="Due Soon"
          />
        </div>
      </div>
    </div>
  )
}
