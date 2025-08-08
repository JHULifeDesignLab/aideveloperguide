import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../../components/MDXContent'

export default function GitHubPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
            <span className="text-2xl">🐱</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">GitHub & Portfolio</h1>
            <p className="text-gray-600">Build an impressive developer profile that stands out to recruiters</p>
          </div>
        </div>
      </div>

      <MDXProvider components={mdxComponents}>
        <div className="prose prose-lg max-w-none">
          <h2>🏠 Create a GitHub Profile README</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">✨ Profile README Magic</h3>
            <p className="text-gray-700 mb-3">
              Turn your GitHub profile into a mini-website by creating a repository with the same name as your username and adding a custom README.md file.
            </p>
            <div className="bg-white rounded p-4 border border-gray-300">
              <p className="text-sm text-gray-600 mb-2"><strong>Steps:</strong></p>
              <ol className="text-sm text-gray-700 space-y-1">
                <li>1. Create a new repository named exactly like your username</li>
                <li>2. Make it public and initialize with a README</li>
                <li>3. Add content that showcases your skills and projects</li>
                <li>4. Include stats, technologies, and current projects</li>
              </ol>
            </div>
          </div>

          <h2>📝 README Best Practices</h2>
          
          <h3>Essential Sections for Project READMEs:</h3>
          
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Purpose</th>
                <th>Tips</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Title & Description</strong></td>
                <td>Hook readers immediately</td>
                <td>Clear, concise explanation of what your project does</td>
              </tr>
              <tr>
                <td><strong>Demo</strong></td>
                <td>Show, don't just tell</td>
                <td>Screenshots, GIFs, or live demo links</td>
              </tr>
              <tr>
                <td><strong>Installation</strong></td>
                <td>Make it easy to run</td>
                <td>Step-by-step setup instructions</td>
              </tr>
              <tr>
                <td><strong>Usage</strong></td>
                <td>Show how it works</td>
                <td>Code examples and expected outputs</td>
              </tr>
              <tr>
                <td><strong>Technologies</strong></td>
                <td>Highlight your skills</td>
                <td>Badges for frameworks, languages, tools used</td>
              </tr>
              <tr>
                <td><strong>Future Improvements</strong></td>
                <td>Show you're thinking ahead</td>
                <td>Planned features and known limitations</td>
              </tr>
            </tbody>
          </table>

          <h2>🏆 Portfolio Project Ideas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🤖 AI/ML Projects</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Sentiment analysis web app</li>
                <li>• Image classification with custom dataset</li>
                <li>• Chatbot with personality</li>
                <li>• Document summarization tool</li>
                <li>• AI-powered recommendation system</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🌐 Full-Stack Projects</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Task management app with real-time updates</li>
                <li>• Social media dashboard</li>
                <li>• E-commerce platform</li>
                <li>• Data visualization dashboard</li>
                <li>• API with comprehensive documentation</li>
              </ul>
            </div>
          </div>

          <h2>📊 GitHub Profile Enhancements</h2>
          
          <h3>Useful Badges and Stats:</h3>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-gray-700 mb-4">Add these dynamic elements to your profile README:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">GitHub Stats:</h4>
                <code className="text-sm bg-white px-2 py-1 rounded block mt-1">
                  ![Your Stats](https://github-readme-stats.vercel.app/api?username=YOURUSERNAME)
                </code>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Top Languages:</h4>
                <code className="text-sm bg-white px-2 py-1 rounded block mt-1">
                  ![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=YOURUSERNAME)
                </code>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Technology Badges:</h4>
                <code className="text-sm bg-white px-2 py-1 rounded block mt-1">
                  ![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)
                </code>
              </div>
            </div>
          </div>

          <h2>🎯 Resume Integration Tips</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">💼 Making Projects Resume-Ready</h3>
            <ul className="text-yellow-800 space-y-2">
              <li>• <strong>Quantify impact:</strong> "Improved processing speed by 40%" vs "Made it faster"</li>
              <li>• <strong>Highlight technologies:</strong> List specific frameworks, tools, and languages</li>
              <li>• <strong>Include metrics:</strong> Users, data processed, accuracy achieved</li>
              <li>• <strong>Show problem-solving:</strong> What challenge did you address?</li>
              <li>• <strong>Deploy and share:</strong> Live demos speak louder than code</li>
            </ul>
          </div>

          <h2>🚀 Advanced GitHub Tips</h2>
          
          <h3>Professional Practices:</h3>
          
          <ul>
            <li><strong>Consistent commit messages:</strong> Use conventional commit format</li>
            <li><strong>Branch protection:</strong> Use pull requests even for personal projects</li>
            <li><strong>Issues and projects:</strong> Show your project management skills</li>
            <li><strong>Documentation:</strong> Wiki, contributing guidelines, code of conduct</li>
            <li><strong>CI/CD:</strong> GitHub Actions for automated testing and deployment</li>
          </ul>

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">🎨 AI-Powered README Generation</h3>
            <p className="text-purple-800 mb-3">
              Use AI tools to help create compelling project documentation:
            </p>
            <ul className="text-purple-800 space-y-2">
              <li>• <strong>ChatGPT/Claude:</strong> Generate README templates and descriptions</li>
              <li>• <strong>GitHub Copilot:</strong> Auto-complete documentation as you write</li>
              <li>• <strong>Context matters:</strong> Provide your repo link for better AI suggestions</li>
              <li>• <strong>Human touch:</strong> Always review and personalize AI-generated content</li>
            </ul>
          </div>
        </div>
      </MDXProvider>
    </div>
  )
}
