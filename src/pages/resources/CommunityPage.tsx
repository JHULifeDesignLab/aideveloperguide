export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
            <span className="text-2xl">👥</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Community & News</h1>
            <p className="text-gray-600">Connect with fellow developers and stay updated with AI research</p>
          </div>
        </div>
      </div>
      
      <div className="bg-green-50 rounded-xl p-8 border border-green-200 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-4">🚧 Coming Soon</h2>
        <p className="text-green-800">
          We're building a comprehensive guide to AI communities, research updates, and networking opportunities. 
          Stay tuned for the latest in AI news and community connections!
        </p>
      </div>
    </div>
  )
}
