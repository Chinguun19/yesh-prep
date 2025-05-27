'use client'

import { useState, useEffect } from 'react'
import { FaClock, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa'
import Timer from '@/components/practice/Timer'
import QuestionCard from '@/components/practice/QuestionCard'

const mockQuestions = [
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
  // Add more questions...
]

export default function PracticeTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(3600) // 60 minutes

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const calculateScore = () => {
    let correct = 0
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      if (mockQuestions[Number(questionIndex)].correctAnswer === answer) {
        correct++
      }
    })
    return Math.round((correct / mockQuestions.length) * 100)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Practice Test</h1>
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleSubmit} />
      </div>

      {/* Question Card */}
      <QuestionCard
        question={mockQuestions[currentQuestion]}
        selectedAnswer={answers[currentQuestion]}
        onAnswer={handleAnswer}
        isSubmitted={isSubmitted}
      />

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </button>

        <div className="flex items-center space-x-2">
          {mockQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentQuestion === index
                  ? 'bg-indigo-600 text-white'
                  : answers[index]
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentQuestion === mockQuestions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaCheck className="mr-2 h-4 w-4" />
            Submit Test
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            Next
            <FaChevronRight className="ml-2 h-4 w-4" />
          </button>
        )}
      </div>

      {/* Results */}
      {isSubmitted && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Test Results</h2>
          <div className="text-4xl font-bold text-indigo-600 mb-4">
            {calculateScore()}%
          </div>
          <div className="space-y-4">
            {mockQuestions.map((question, index) => (
              <div key={question.id} className="p-4 rounded-lg bg-gray-50">
                <div className="font-medium text-gray-900">Question {index + 1}</div>
                <div className="mt-1 text-sm text-gray-600">
                  Your answer: {answers[index] || 'Not answered'}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Correct answer: {question.correctAnswer}
                </div>
                {answers[index] !== question.correctAnswer && (
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Explanation:</span> {question.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 