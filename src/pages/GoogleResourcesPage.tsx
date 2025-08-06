import { Link } from 'react-router-dom'

export default function GoogleResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
          <li>
            <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors flex items-center">
              <span className="w-4 h-4 mr-1 text-center">🏠</span>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="flex-shrink-0 h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link to="/google" className="ml-4 text-sm font-medium text-blue-500 hover:opacity-75 transition-opacity">
                Google Cloud
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="flex-shrink-0 h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-4 text-sm font-medium text-gray-500">
                Resources
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Content */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
        <div className="prose prose-lg max-w-none p-8 md:p-12">
          <h1>Appendices & Extra Resources</h1>
          
          <h2>Appendix A · Sample project ideas</h2>
          <ul>
            <li><strong>Long-document summarizer</strong> using PaLM Text-Bison and Vertex AI Codelab.</li>
            <li><strong>Document Q&A chatbot with RAG</strong> (LangChain ➜ Vertex AI Vector Search).</li>
            <li><strong>Imagen image-generation web app</strong> served from Model Garden.</li>
            <li><strong>Contextual Chatbot (Chat-Bison)</strong> with persona prompts.</li>
            <li><strong>Autonomous browsing agent</strong>—DeepLearning.AI short course walks you through it.</li>
          </ul>
          
          <blockquote>
            <p><strong>Portfolio tip</strong> – One fully-working, well-documented project beats an ambitious half-finished idea. Deploy it on Cloud Run and showcase it on GitHub with screenshots and a clear README.</p>
          </blockquote>
          
          <hr />
          
          <h2>Appendix B · Courses, tools & communities</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Category</th>
                  <th className="text-left">Highlights (all free)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AI foundations</strong></td>
                  <td>DeepLearning.AI, Harvard CS50 AI, freeCodeCamp DL playlist.</td>
                </tr>
                <tr>
                  <td><strong>Math intuition</strong></td>
                  <td>3Blue1Brown visual proofs & calculus refreshers.</td>
                </tr>
                <tr>
                  <td><strong>News & research</strong></td>
                  <td>AI Daily Brief podcast, Papers With Code for latest papers.</td>
                </tr>
                <tr>
                  <td><strong>Dev tooling</strong></td>
                  <td>TensorFlow tutorials, GitHub branching game, VS Code + Copilot student license.</td>
                </tr>
                <tr>
                  <td><strong>Linux practice</strong></td>
                  <td>OverTheWire Bandit wargame for CLI skills.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3>Bonus – Git & portfolio hygiene</h3>
          <p><em>Turn your GitHub profile into a mini-site by creating a repo named after your username and adding a custom README.</em> This is a recruiter-magnet showcase.</p>
        </div>
      </div>
    </div>
  )
}
