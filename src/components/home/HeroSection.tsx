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
    <section className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto">{subtitle}</p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href={primaryAction.href}
              className="rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-500"
            >
              {primaryAction.label}
            </Link>
            <Link
              href={secondaryAction.href}
              className="rounded-md border border-indigo-600 px-6 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
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
