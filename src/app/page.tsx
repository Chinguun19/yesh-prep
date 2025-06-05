import { FaBook, FaPencilAlt, FaChartLine, FaUsers } from 'react-icons/fa'
import HeroSection from '@/components/home/HeroSection'
import FeatureCard from '@/components/home/FeatureCard'

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
      <HeroSection
        title="Prepare for Yesh University"
        subtitle="Your comprehensive preparation platform for the Yesh University entrance exam. Study smarter, not harder."
        primaryAction={{ href: '/study-materials', label: 'Start Learning' }}
        secondaryAction={{ href: '/practice-tests', label: 'Take Practice Test' }}
      />

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
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
