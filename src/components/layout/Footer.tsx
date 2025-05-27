import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Study Materials', path: '/study-materials' },
        { name: 'Practice Tests', path: '/practice-tests' },
        { name: 'FAQ', path: '/faq' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Discussion Forum', path: '/discussion' },
        { name: 'Student Success Stories', path: '/success-stories' },
        { name: 'Blog', path: '/blog' },
      ],
    },
  ]

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Yesh Prep</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Helping students achieve their dreams of joining Yesh University through comprehensive exam preparation.
            </p>
          </div>

          {/* Links sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-base text-gray-600 hover:text-indigo-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Yesh University Exam Prep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 