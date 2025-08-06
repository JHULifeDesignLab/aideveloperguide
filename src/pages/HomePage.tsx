import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Developer Guide
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          A comprehensive guide to getting started with AWS, Google, and Microsoft developer certificates, 
          provided by the JHU Life Design Lab.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="relative group">
          <Link
            to="/google"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-google-blue"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-google-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Google Cloud</h3>
                <p className="text-sm text-gray-500">Generative AI Developer Path</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Learn to build with Google's Generative AI tools and earn your developer certification.
            </p>
          </Link>
        </div>

        <div className="relative group">
          <Link
            to="/amazon"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amazon-orange"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amazon-orange rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Amazon AWS</h3>
                <p className="text-sm text-gray-500">Cloud Developer Path</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Master AWS services and build scalable cloud applications.
            </p>
          </Link>
        </div>

        <div className="relative group">
          <Link
            to="/microsoft"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-microsoft-blue"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-microsoft-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Microsoft Azure</h3>
                <p className="text-sm text-gray-500">Cloud Developer Path</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Build modern applications with Microsoft Azure services.
            </p>
          </Link>
        </div>
      </div>

      <div className="mt-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why These Certifications?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Impact</h3>
            <p className="text-gray-600">
              Cloud certifications are among the highest-paying in tech, with average salary increases 
              of 25-30% after certification.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Demand</h3>
            <p className="text-gray-600">
              95% of enterprises use cloud services, creating massive demand for certified professionals 
              across all industries.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hands-On Learning</h3>
            <p className="text-gray-600">
              Our guides focus on practical projects and real-world applications, not just theory.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Structured Path</h3>
            <p className="text-gray-600">
              Follow our step-by-step roadmaps designed specifically for students and new developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
