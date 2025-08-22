import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/developerguide/jhu-shield.png" 
            alt="Johns Hopkins University" 
            className="h-16 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <div className="hidden bg-blue-900 text-white px-6 py-3 rounded-lg font-bold text-xl">
            Johns Hopkins University
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Life Design Lab Developer Guide
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          A comprehensive guide to getting started with cloud developer certifications, 
          provided by the Johns Hopkins University Life Design Lab.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="relative group">
          <Link
            to="/google"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google" 
                  className="h-12 w-12"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Google Cloud</h3>
                <p className="text-sm text-gray-500">Cloud Developer Path</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Build modern applications with Google Cloud services.
            </p>
          </Link>
        </div>

        <div className="relative group">
          <Link
            to="/amazon"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="https://www.amazon.com/favicon.ico" 
                  alt="Amazon" 
                  className="h-12 w-12"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Amazon AWS</h3>
                <p className="text-sm text-gray-500">Cloud Developer Path</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Build scalable applications with AWS cloud services.
            </p>
          </Link>
        </div>

        <div className="relative group">
          <Link
            to="/microsoft"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="https://www.microsoft.com/favicon.ico" 
                  alt="Microsoft" 
                  className="h-12 w-12"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Microsoft Azure</h3>
                <p className="text-sm text-gray-500">Cloud Developer Path</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Build modern applications with Azure cloud services.
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
