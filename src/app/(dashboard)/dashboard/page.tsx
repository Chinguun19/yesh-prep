'use client'

import Link from 'next/link'
import { FaBook, FaChartLine, FaPencilAlt } from 'react-icons/fa'
import DashboardCard from '@/components/dashboard/DashboardCard'
import ProgressChart from '@/components/dashboard/ProgressChart'
import RecommendedActions from '@/components/dashboard/RecommendedActions'

export default function DashboardPage() {
  interface QuickStat {
    title: string
    value: string
    change: string
    trend: 'up' | 'down'
  }

  const quickStats: QuickStat[] = [
    {
      title: 'Last Test Score',
      value: '85%',
      change: '+5%',
      trend: 'up',
    },
    {
      title: 'Tests Completed',
      value: '12',
      change: '+2 this week',
      trend: 'up',
    },
    {
      title: 'Study Hours',
      value: '24h',
      change: '+3h this week',
      trend: 'up',
    },
    {
      title: 'Accuracy Rate',
      value: '78%',
      change: '+2%',
      trend: 'up',
    },
  ]

  const quickActions = [
    {
      title: 'Take Practice Test',
      description: 'Test your knowledge with our practice exams',
      icon: <FaPencilAlt className="h-6 w-6" />,
      href: '/practice-tests',
      color: 'bg-blue-500',
    },
    {
      title: 'Study Materials',
      description: 'Access comprehensive study resources',
      icon: <FaBook className="h-6 w-6" />,
      href: '/study-materials',
      color: 'bg-green-500',
    },
    {
      title: 'Track Progress',
      description: 'View detailed performance analytics',
      icon: <FaChartLine className="h-6 w-6" />,
      href: '/progress',
      color: 'bg-purple-500',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student!</h1>
        <p className="mt-1 text-sm text-gray-600">
          Here's an overview of your preparation progress
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Progress Chart */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Your Progress</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <ProgressChart />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`inline-flex p-3 rounded-lg ${action.color} text-white mb-4`}>
              {action.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900">{action.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{action.description}</p>
          </Link>
        ))}
      </div>

      {/* Recommended Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recommended for You</h2>
        <RecommendedActions />
      </div>
    </div>
  )
} 