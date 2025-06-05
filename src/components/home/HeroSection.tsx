import Link from 'next/link'

interface Action {
  href: string
  label: string
}

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryAction: Action
  secondaryAction: Action
}

const HeroSection = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            {title}
            <span className="block">With Confidence</span>
          </h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto">{subtitle}</p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href={primaryAction.href}
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-gray-100"
            >
              {primaryAction.label}
            </Link>
            <Link
              href={secondaryAction.href}
              className="rounded-md bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-400"
            >
              {secondaryAction.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
