import Link from 'next/link'
import { FaBookOpen, FaChartPie, FaPencilRuler } from 'react-icons/fa'

const recommendations = [
  {
    title: 'Review Weak Areas',
    description: 'Your recent test shows room for improvement in Mathematics',
    action: 'Practice Math Problems',
    icon: <FaChartPie className="h-5 w-5" />,
    href: '/study-materials/math',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    title: 'Complete Practice Test',
    description: "You haven't taken a practice test this week",
    action: 'Take Test Now',
    icon: <FaPencilRuler className="h-5 w-5" />,
    href: '/practice-tests',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Study New Material',
    description: 'New study materials available in Physics',
    action: 'Start Learning',
    icon: <FaBookOpen className="h-5 w-5" />,
    href: '/study-materials/physics',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
]

const RecommendedActions = () => {
  return (
    <div className="space-y-4">
      {recommendations.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4"
        >
          <div className={`${item.bgColor} p-3 rounded-lg`}>
            <div className={item.color}>{item.icon}</div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
            <Link
              href={item.href}
              className={`mt-3 inline-flex items-center text-sm font-medium ${item.color}`}
            >
              {item.action}
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecommendedActions 