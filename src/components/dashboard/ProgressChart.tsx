'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
}

const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']

const data = {
  labels,
  datasets: [
    {
      label: 'Test Scores',
      data: [65, 70, 68, 75, 82, 85],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Study Hours',
      data: [10, 15, 12, 18, 20, 24],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
      tension: 0.3,
    },
  ],
}

const ProgressChart = () => {
  return (
    <div className="h-64">
      <Line options={options} data={data} />
    </div>
  )
}

export default ProgressChart 