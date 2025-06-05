'use client'

import { useState, useEffect } from 'react'
import { FaClock, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa'
import Timer from '@/components/practice/Timer'
import QuestionCard from '@/components/practice/QuestionCard'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
  subject: string
  exam: string
}

export default function PracticeTestPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(3600) // 60 minutes
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [selectedExam, setSelectedExam] = useState('All')

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch('/api/practice-tests')
      const data = await res.json()
      setQuestions(data)
    }
    fetchQuestions()
  }, [])

  if (!questions.length) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">Loading...</div>
    )
  }

  const subjects = Array.from(new Set(questions.map((q) => q.subject)))
  const exams = Array.from(new Set(questions.map((q) => q.exam)))

  const filteredQuestions = questions.filter(
    (q) =>
      (selectedSubject === 'All' || q.subject === selectedSubject) &&
      (selectedExam === 'All' || q.exam === selectedExam)
  )

  if (!filteredQuestions.length) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        No questions found for your selection.
      </div>
    )
  }

  useEffect(() => {
    setCurrentQuestion(0)
    setAnswers({})
    setIsSubmitted(false)
  }, [selectedSubject, selectedExam])

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
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
      if (filteredQuestions[Number(questionIndex)].correctAnswer === answer) {
        correct++
      }
    })
    return Math.round((correct / filteredQuestions.length) * 100)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Practice Test</h1>
        {!isSubmitted && (
          <Timer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            onTimeUp={handleSubmit}
          />
        )}
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-4">
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
        >
          <option value="All">All Subjects</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
        >
          <option value="All">All Exams</option>
          {exams.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      {/* Question Card */}
      <QuestionCard
        question={filteredQuestions[currentQuestion]}
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
          {filteredQuestions.map((_, index) => (
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

        {currentQuestion === filteredQuestions.length - 1 ? (
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
            {filteredQuestions.map((question, index) => (
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