export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
            <span className="text-2xl">🛠️</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Development Tools</h1>
            <p className="text-gray-600">Essential tools and frameworks for modern AI development</p>
          </div>
        </div>
      </div>
      
      <div className="bg-purple-50 rounded-xl p-8 border border-purple-200 text-center">
        <h2 className="text-2xl font-bold text-purple-900 mb-4">🚧 Coming Soon</h2>
        <p className="text-purple-800">
          We're curating the best development tools, IDEs, libraries, and frameworks for AI development. 
          Check back soon for comprehensive tool recommendations!
        </p>
      </div>
    </div>
  )
}
