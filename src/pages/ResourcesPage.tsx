import { Link } from 'react-router-dom'

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">📚</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer Resources</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Essential tools, courses, and guidance to accelerate your AI development journey
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Link 
          to="/resources/learning" 
          className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-200"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
              Further Learning
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Curated courses, tutorials, and educational resources to deepen your AI and development skills
          </p>
          <div className="flex items-center text-blue-600 group-hover:text-blue-700">
            <span className="text-sm font-medium">Explore courses</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <Link 
          to="/resources/github" 
          className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-200"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">🐱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800">
              GitHub & Portfolio
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Best practices for showcasing your projects, creating impressive READMEs, and building your developer profile
          </p>
          <div className="flex items-center text-gray-800 group-hover:text-gray-900">
            <span className="text-sm font-medium">Build your profile</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <Link 
          to="/resources/tools" 
          className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-200"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600">
              Development Tools
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Essential development tools, IDEs, libraries, and frameworks for modern AI development
          </p>
          <div className="flex items-center text-purple-600 group-hover:text-purple-700">
            <span className="text-sm font-medium">Discover tools</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <Link 
          to="/resources/community" 
          className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-200"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600">
              Community & News
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Stay updated with AI research, join communities, and connect with fellow developers
          </p>
          <div className="flex items-center text-green-600 group-hover:text-green-700">
            <span className="text-sm font-medium">Join community</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Quick Tips</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold text-blue-700 mb-2">📖 Learn in Public</div>
            <p className="text-gray-600">Share your learning journey on social media and GitHub</p>
          </div>
          <div>
            <div className="font-semibold text-blue-700 mb-2">🔗 Build & Deploy</div>
            <p className="text-gray-600">Create working projects that others can actually use</p>
          </div>
          <div>
            <div className="font-semibold text-blue-700 mb-2">🤝 Connect & Network</div>
            <p className="text-gray-600">Engage with the AI community and seek mentorship</p>
          </div>
        </div>
      </div>
    </div>
  )
}
