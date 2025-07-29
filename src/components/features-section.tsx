import { Target, Users, FileText } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Automated Scoping",
    description:
      "AI-powered project scoping that breaks down complex requirements into actionable tasks and timelines automatically.",
  },
  {
    icon: Users,
    title: "Intelligent Delegation",
    description:
      "Smart task assignment based on team skills, availability, and workload to optimize productivity and outcomes.",
  },
  {
    icon: FileText,
    title: "Effortless Reporting",
    description: "Generate comprehensive project reports and insights without manual data collection or formatting.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-planovo-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-syne text-planovo-dark mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-lg font-syne text-planovo-secondary max-w-2xl mx-auto">
            Experience the future of project management with AI-driven automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card bg-white rounded-lg p-8 shadow-sm cursor-pointer"
              style={{
                boxSizing: 'border-box',
                width: '100%',
                height: 'auto',
                minHeight: '254px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid white',
                boxShadow: '12px 17px 51px rgba(0, 0, 0, 0.22)',
                backdropFilter: 'blur(6px)',
                borderRadius: '17px',
                textAlign: 'center',
                transition: 'all 0.5s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none',
                fontWeight: 'bolder',
                color: 'black'
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-planovo-primary rounded-lg mb-6">
                <feature.icon className="w-6 h-6 text-planovo-dark" />
              </div>
              <h3 className="text-xl font-bold font-syne text-planovo-dark mb-4">{feature.title}</h3>
              <p className="font-syne text-planovo-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
