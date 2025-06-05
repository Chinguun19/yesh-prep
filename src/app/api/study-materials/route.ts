import { NextResponse } from 'next/server'

const materials = [
  {
    id: 1,
    title: 'Calculus Fundamentals',
    subject: 'Mathematics',
    level: 'Beginner',
    description: 'Learn the basics of calculus including limits, derivatives, and integrals.',
    duration: '2 hours',
    lessons: 12,
    image: 'https://wallpaperaccess.com/full/2870989.jpg',
    exam: 'Entrance Exam',
  },
  {
    id: 2,
    title: 'Quantum Mechanics',
    subject: 'Physics',
    level: 'Advanced',
    description: 'Explore the principles of quantum mechanics and wave functions.',
    duration: '3 hours',
    lessons: 15,
    image: 'https://wallpaperaccess.com/full/2870989.jpg',
    exam: 'Mock Exam 1',
  },
]

export async function GET() {
  return NextResponse.json(materials)
}
