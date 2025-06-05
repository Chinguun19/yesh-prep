import { NextResponse } from 'next/server'

const questions = [
  {
    id: 1,
    question: 'What is the derivative of x² with respect to x?',
    options: ['x', '2x', '2', 'x²'],
    correctAnswer: '2x',
    explanation: 'The power rule states that the derivative of x^n is nx^(n-1).',
    subject: 'Mathematics',
    exam: 'Mock Exam 1',
  },
  {
    id: 2,
    question: 'Which of the following is a noble gas?',
    options: ['Oxygen', 'Helium', 'Chlorine', 'Sodium'],
    correctAnswer: 'Helium',
    explanation: 'Helium is a noble gas in Group 18 of the periodic table.',
    subject: 'Chemistry',
    exam: 'Mock Exam 1',
  },
  {
    id: 3,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: 'Basic addition.',
    subject: 'Mathematics',
    exam: 'Entrance Exam',
  },
  {
    id: 4,
    question: 'What planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
    explanation: 'Mars is often called the Red Planet due to its reddish appearance.',
    subject: 'Physics',
    exam: 'Entrance Exam',
  },
]

export async function GET() {
  return NextResponse.json(questions)
}
