import Image from 'next/image'
import Link from 'next/link'
import { FaClock, FaBook } from 'react-icons/fa'

interface StudyMaterial {
  id: number
  title: string
  subject: string
  level: string
  description: string
  duration: string
  lessons: number
  image: string
  exam: string
}

interface StudyMaterialCardProps {
  material: StudyMaterial
}

const StudyMaterialCard = ({ material }: StudyMaterialCardProps) => {
  return (
    <Link
      href={`/study-materials/${material.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={material.image}
          alt={material.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {material.subject}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {material.level}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {material.exam}
          </span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{material.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{material.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <FaClock className="h-4 w-4 mr-1" />
            <span>{material.duration}</span>
          </div>
          <div className="flex items-center">
            <FaBook className="h-4 w-4 mr-1" />
            <span>{material.lessons} lessons</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default StudyMaterialCard 