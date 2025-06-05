import Link from 'next/link'
import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  link: string
}

const FeatureCard = ({ icon, title, description, link }: FeatureCardProps) => (
  <Link
    href={link}
    className="relative group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
  >
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
)

export default FeatureCard
