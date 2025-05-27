interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
  subject: string
}

interface QuestionCardProps {
  question: Question
  selectedAnswer: string | undefined
  onAnswer: (answer: string) => void
  isSubmitted: boolean
}

const QuestionCard = ({
  question,
  selectedAnswer,
  onAnswer,
  isSubmitted,
}: QuestionCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-600">{question.subject}</span>
      </div>
      <h2 className="text-lg font-medium text-gray-900 mb-6">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option
          const isCorrect = isSubmitted && option === question.correctAnswer
          const isWrong = isSubmitted && isSelected && option !== question.correctAnswer

          return (
            <button
              key={option}
              onClick={() => !isSubmitted && onAnswer(option)}
              disabled={isSubmitted}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                isSelected
                  ? isSubmitted
                    ? isCorrect
                      ? 'bg-green-50 border-green-500 text-green-700'
                      : 'bg-red-50 border-red-500 text-red-700'
                    : 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : isSubmitted && isCorrect
                  ? 'bg-green-50 border-green-500 text-green-700'
                  : 'border-gray-200 hover:border-indigo-500 hover:bg-indigo-50'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 mr-3 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? isSubmitted
                        ? isCorrect
                          ? 'border-green-500 bg-green-500'
                          : 'border-red-500 bg-red-500'
                        : 'border-indigo-500 bg-indigo-500'
                      : isSubmitted && isCorrect
                      ? 'border-green-500 bg-green-500'
                      : 'border-gray-300'
                  }`}
                >
                  {(isSelected || (isSubmitted && isCorrect)) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span>{option}</span>
              </div>
              {isSubmitted && isWrong && (
                <p className="mt-2 text-sm text-red-600 ml-8">{question.explanation}</p>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionCard 