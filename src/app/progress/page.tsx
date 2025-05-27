'use client'

import { Line, Bar, Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { FaTrophy, FaChartLine, FaClock } from 'react-icons/fa'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
)

const mockData = {
  testScores: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Test Scores',
        data: [65, 70, 68, 75, 82, 85],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  },
  subjectPerformance: {
    labels: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    datasets: [
      {
        label: 'Performance',
        data: [85, 72, 78, 68],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(236, 72, 153, 0.8)',
        ],
      },
    ],
  },
  skillsRadar: {
    labels: [
      'Problem Solving',
      'Critical Thinking',
      'Data Analysis',
      'Theoretical Knowledge',
      'Application',
    ],
    datasets: [
      {
        label: 'Current Skills',
        data: [85, 75, 70, 80, 65],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgb(99, 102, 241)',
        pointBackgroundColor: 'rgb(99, 102, 241)',
      },
    ],
  },
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
}

const radarOptions = {
  responsive: true,
  scales: {
    r: {
      angleLines: {
        display: true,
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
}

export default function ProgressPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Progress Tracking</h1>
        <p className="mt-2 text-sm text-gray-600">
          Monitor your performance and identify areas for improvement
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600">
              <FaTrophy className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Average Score</h3>
              <p className="text-2xl font-semibold text-gray-900">85%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100 text-green-600">
              <FaChartLine className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Tests Completed</h3>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
              <FaClock className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Study Hours</h3>
              <p className="text-2xl font-semibold text-gray-900">48h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-8">
        {/* Progress Over Time */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Progress Over Time</h2>
          <div className="h-64">
            <Line options={chartOptions} data={mockData.testScores} />
          </div>
        </div>

        {/* Subject Performance */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Subject Performance</h2>
          <div className="h-64">
            <Bar options={chartOptions} data={mockData.subjectPerformance} />
          </div>
        </div>

        {/* Skills Assessment */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Skills Assessment</h2>
          <div className="h-64">
            <Radar options={radarOptions} data={mockData.skillsRadar} />
          </div>
        </div>
      </div>
    </div>
  )
} 