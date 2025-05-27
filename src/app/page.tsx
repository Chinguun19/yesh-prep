import Link from 'next/link'
import { FaBook, FaPencilAlt, FaChartLine, FaUsers } from 'react-icons/fa'

export default function Home() {
  const features = [
    {
      icon: <FaBook className="h-6 w-6" />,
      title: 'Study Materials',
      description: 'Access comprehensive study materials and past papers',
      link: '/study-materials',
    },
    {
      icon: <FaPencilAlt className="h-6 w-6" />,
      title: 'Practice Tests',
      description: 'Take practice tests with instant feedback',
      link: '/practice-tests',
    },
    {
      icon: <FaChartLine className="h-6 w-6" />,
      title: 'Progress Tracking',
      description: 'Monitor your performance and improvement',
      link: '/progress',
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: 'Community',
      description: 'Join discussions and get support from peers',
      link: '/discussion',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Prepare for Yesh University
              <span className="block">With Confidence</span>
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              Your comprehensive preparation platform for the Yesh University entrance exam. Study smarter, not harder.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/study-materials"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-gray-100"
              >
                Start Learning
              </Link>
              <Link
                href="/practice-tests"
                className="rounded-md bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-400"
              >
                Take Practice Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need to Succeed</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive tools and resources to help you ace the entrance exam
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.link}
                className="relative group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
