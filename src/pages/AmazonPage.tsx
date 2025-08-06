import { Link } from 'react-router-dom'

export default function AmazonPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-amazon-orange rounded-lg flex items-center justify-center mr-4">
            <span className="text-white font-bold text-2xl">AWS</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Amazon Web Services</h1>
            <p className="text-gray-600">Cloud Developer Certification Path</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Why AWS?</h2>
          <p>
            Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, 
            offering over 200 fully featured services from data centers globally. AWS is used by millions 
            of customers—including the fastest-growing startups, largest enterprises, and leading government agencies.
          </p>

          <h2>Certification Path</h2>
          <p>
            The AWS certification path is designed to validate your cloud expertise and help you advance your career. 
            Our guide focuses on the most in-demand certifications for developers.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-2">Coming Soon</h3>
            <p className="text-orange-800">
              We're currently developing comprehensive AWS content. Check back soon for detailed guides 
              on AWS Developer Associate certification and hands-on projects.
            </p>
          </div>

          <h2>What You'll Learn</h2>
          <ul>
            <li>Core AWS services (EC2, S3, Lambda, DynamoDB)</li>
            <li>Serverless application development</li>
            <li>DevOps practices with AWS</li>
            <li>Security and compliance best practices</li>
            <li>Cost optimization strategies</li>
          </ul>

          <div className="mt-8">
            <Link 
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amazon-orange hover:bg-orange-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
