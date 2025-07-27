interface DashboardCardProps {
  title: string
  content: string
  metric: string
  metricLabel: string
}

export function DashboardCard({ title, content, metric, metricLabel }: DashboardCardProps) {
  return (
    <div className="bg-white border-2 border-planovo-dark rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold font-syne text-planovo-dark mb-2">{title}</h3>
          <p className="text-planovo-secondary font-syne text-sm mb-4">{content}</p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold font-syne text-planovo-dark">{metric}</div>
          <div className="text-sm font-syne text-planovo-secondary">{metricLabel}</div>
        </div>

        {/* Placeholder for chart or icon */}
        <div className="w-16 h-16 bg-planovo-light rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-planovo-primary rounded opacity-60"></div>
        </div>
      </div>
    </div>
  )
}
