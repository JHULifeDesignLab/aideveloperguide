import { Link } from 'react-router-dom'

export default function MicrosoftPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-microsoft-blue rounded-lg flex items-center justify-center mr-4">
            <span className="text-white font-bold text-xl">Azure</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Microsoft Azure</h1>
            <p className="text-gray-600">Cloud Developer Certification Path</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Why Microsoft Azure?</h2>
          <p>
            Microsoft Azure is a comprehensive cloud computing platform that offers a wide range of services 
            including computing, analytics, storage, and networking. Azure is trusted by 95% of Fortune 500 
            companies and continues to grow rapidly in the enterprise market.
          </p>

          <h2>Certification Path</h2>
          <p>
            Azure certifications are highly valued in the industry, especially for developers working in 
            enterprise environments. Our guide focuses on the most practical certifications for modern developers.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Coming Soon</h3>
            <p className="text-blue-800">
              We're currently developing comprehensive Microsoft Azure content. Check back soon for detailed 
              guides on Azure Developer Associate certification and hands-on projects.
            </p>
          </div>

          <h2>What You'll Learn</h2>
          <ul>
            <li>Azure App Service and Functions</li>
            <li>Azure Storage and Databases</li>
            <li>Azure DevOps and CI/CD pipelines</li>
            <li>Azure Active Directory integration</li>
            <li>Monitoring and troubleshooting</li>
          </ul>

          <div className="mt-8">
            <Link 
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-microsoft-blue hover:bg-blue-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
