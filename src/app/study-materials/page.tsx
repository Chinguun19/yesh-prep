'use client'

import { useState, useEffect } from 'react'
import { FaSearch, FaFilter } from 'react-icons/fa'
import StudyMaterialCard from '@/components/study/StudyMaterialCard'

const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology']
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']
const exams = ['All', 'Entrance Exam', 'Mock Exam 1']

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

export default function StudyMaterialsPage() {
  const [materials, setMaterials] = useState<StudyMaterial[]>([])
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [selectedExam, setSelectedExam] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchMaterials = async () => {
      const res = await fetch('/api/study-materials')
      const data = await res.json()
      setMaterials(data)
    }
    fetchMaterials()
  }, [])

  if (!materials.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">Loading...</div>
    )
  }

  const filteredMaterials = materials.filter((material) => {
    const matchesSubject = selectedSubject === 'All' || material.subject === selectedSubject
    const matchesLevel = selectedLevel === 'All' || material.level === selectedLevel
    const matchesExam = selectedExam === 'All' || material.exam === selectedExam
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSubject && matchesLevel && matchesExam && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Study Materials</h1>
        <p className="mt-2 text-sm text-gray-600">
          Access comprehensive study materials to help you prepare for the entrance exam
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search study materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {exams.map((exam) => (
                <option key={exam} value={exam}>
                  {exam}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Study Materials Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMaterials.map((material) => (
          <StudyMaterialCard key={material.id} material={material} />
        ))}
      </div>

      {/* Empty State */}
      {filteredMaterials.length === 0 && (
        <div className="text-center py-12">
          <FaFilter className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No materials found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  )
} 