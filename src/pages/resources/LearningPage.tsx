import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../../components/MDXContent'

export default function LearningPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
            <span className="text-2xl">🎓</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Further Learning</h1>
            <p className="text-gray-600">Curated educational resources to advance your skills</p>
          </div>
        </div>
      </div>

      <MDXProvider components={mdxComponents}>
        <div className="prose prose-lg max-w-none">
          <h2>📚 Courses & Educational Content</h2>
          


          <table>
            <thead>
                <tr>
                <th>Category</th>
                <th>Highlights (all free)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><strong>AI & ML Foundations</strong></td>
                <td>
                    <ul>
                        <li><a href="https://learn.deeplearning.ai/">DeepLearning.AI:</a> Collection of courses and projects focused on the realm of AI</li>
                        <li><a href="https://www.youtube.com/watch?v=5NgNicANyqM">Harvard CS50 AI with Python – Full Course:</a> 12 hours</li>
                        <li><a href="https://www.youtube.com/@freecodecamp/featured">freeCodeCamp.org YouTube (Deep Learning, Git, AI Tools):</a> YouTube Channel with various AI topics and projects </li>
                        <li><a href="https://www.youtube.com/@mitocw">MIT OpenCourseWare AI Courses:</a> Collection of MIT courses </li>
                    </ul>
                </td>
                </tr>
                <tr>
                <td><strong>AI Math & Concept Visualization </strong></td>
                <td>
                    <ul>
                        <li><a href="https://www.youtube.com/c/3blue1brown">3Blue1Brown YouTube Channel:</a> Videos that build intuition in mathematical concepts (a great resource for any JHU course!)</li>
                        <li><a href="https://www.khanacademy.org/math">Khan Academy Math</a>: Statistics, probability, and mathematical foundations</li>
                        <li><a href="https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/">MIT Linear Algebra</a>: Gilbert Strang's legendary course</li>
                    </ul>
                </td>
                </tr>
                <tr>
                <td><strong>News & Research</strong></td>
                <td>
                    <ul>
                        <li><a href="https://podcasts.apple.com/us/podcast/the-ai-daily-brief-formerly-the-ai-breakdown/id1680633614">The AI Daily Brief Podcast:</a> 20-minute daily podcasts that summarize current news in AI and deep-dive into one topic</li>
                        <li><a href="https://paperswithcode.com/">Papers With Code:</a> recent papers in AI</li>
                        <li><a href="https://arxiv.org/list/cs.AI/recent">arXiv AI Papers</a>: Cutting-edge research publications</li>
                        <li><a href="https://www.technologyreview.com/topic/artificial-intelligence/">MIT Technology Review AI</a>: Industry insights and analysis</li>
                    </ul>
                </td>
                </tr>
                <tr>
                <td><strong>Tools & Workflow Tutorials </strong></td>
                <td>
                    <ul>
                        <li>Microsoft CoPilot is free for students. Go to Settings - Billing and licensing - Education Benefits.</li>
                        <li>TensorFlow is an open source library for ML and Deep Learning (DL)</li>
                            <ul>
                                <li><a href="https://www.tensorflow.org/tutorials">TensorFlow Tutorials</a></li>
                                <li><a href="https://www.youtube.com/@TensorFlow">TensorFlow YouTube Channel</a></li>
                            </ul>
                        <li>GitHub is a version control and collaboration tool</li>
                            <ul>
                                <li><a href="https://www.youtube.com/@GitHub">GitHub YouTube Channel</a></li>
                                <li><a href="https://learngitbranching.js.org/?locale=en_US">Learn Git Branching (interactive tutorial)</a></li>
                            </ul>
                        <li>VSCode allows for seamless integration with GitHub Copilot (AI Code Assistant, available for free for students: Settings - Billing & Profile - Education benefits)</li>
                            <ul>
                                <li><a href="https://www.youtube.com/@code">Visual Studio Code YouTube Channel </a></li>
                            </ul>
                        <li>Linux: open source operating system</li>
                            <ul>
                                <li><a href="https://overthewire.org/wargames/bandit/">OverTheWire: Bandit Linux Wargame</a></li>
                                <li><a href="https://linuxjourney.com/">Linux Journey</a>: Comprehensive Linux learning path</li>
                                <li><a href="https://www.codecademy.com/learn/learn-the-command-line">Codecademy Command Line</a>: Interactive terminal tutorials</li>
                            </ul>
                    </ul>
                </td>
                </tr>
                <tr>
                <td><strong>Inspiration & Projects </strong></td>
                <td>
                    <ul>
                        <li><a href="https://towardsdatascience.com/">Towards Data Science on Medium:</a> Published AI, ML & data-science insights.</li>
                    </ul>
                </td>
                </tr>
            </tbody>
            </table>

          <h2>🎯 JHU-Specific Resources</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">📖 LinkedIn Learning (Free for JHU Students)</h3>
            <p className="text-blue-800 mb-3">
              Access thousands of professional courses at no cost. Log in at <a href="https://linkedinlearning.jh.edu" className="underline">linkedinlearning.jh.edu</a>
            </p>
            <ul className="text-blue-800">
              <li>• <a href="https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=2106537">Agentic AI course</a> - Advanced AI agents and architectures</li>
              <li>• Machine Learning and Data Science learning paths</li>
              <li>• Software development and programming courses</li>
              <li>• Professional skills and career development</li>
            </ul>
          </div>

          <h2>🚀 Advanced Learning Paths</h2>
          
          <p>Once you've completed the basics, consider these next steps:</p>
          
          <ul>
            <li><strong>Google Cloud Professional ML Engineer</strong> - Industry-recognized certification</li>
            <li><strong>AWS Machine Learning Specialty</strong> - Cloud-based ML expertise</li>
            <li><strong>Microsoft Azure AI Engineer</strong> - Enterprise AI solutions</li>
            <li><strong>Deep Learning Specialization</strong> - Advanced neural network architectures</li>
          </ul>

          <div className="bg-green-50 rounded-lg p-6 border border-green-100">
            <h3 className="text-lg font-semibold text-green-900 mb-3">💡 Learning Tips</h3>
            <ul className="text-green-800 space-y-2">
              <li>• <strong>Practice actively:</strong> Don't just watch videos - code along and experiment</li>
              <li>• <strong>Build projects:</strong> Apply what you learn in real-world scenarios</li>
              <li>• <strong>Join communities:</strong> Connect with other learners and experts</li>
              <li>• <strong>Stay updated:</strong> AI moves fast - follow research and industry news</li>
              <li>• <strong>Document your journey:</strong> Blog about what you learn and build</li>
            </ul>
          </div>
        </div>
      </MDXProvider>
    </div>
  )
}
