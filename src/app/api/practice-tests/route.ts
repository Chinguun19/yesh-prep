import { NextResponse } from 'next/server'

const questions = [
  {
    id: 1,
    question: 'What is the derivative of x² with respect to x?',
    options: ['x', '2x', '2', 'x²'],
    correctAnswer: '2x',
    explanation: 'The power rule states that the derivative of x^n is nx^(n-1).',
    subject: 'Mathematics',
  },
  {
    id: 2,
    question: 'Which of the following is a noble gas?',
    options: ['Oxygen', 'Helium', 'Chlorine', 'Sodium'],
    correctAnswer: 'Helium',
    explanation: 'Helium is a noble gas in Group 18 of the periodic table.',
    subject: 'Chemistry',
  },
]

export async function GET() {
  return NextResponse.json(questions)
}
