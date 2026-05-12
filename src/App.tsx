import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GooglePage from './pages/deployment/google/GooglePage'
import AmazonPage from './pages/deployment/amazon/AmazonPage'
import MicrosoftPage from './pages/deployment/microsoft/MicrosoftPage'
import GoogleStep1 from './pages/deployment/google/GoogleStep1'
import GoogleStep2 from './pages/deployment/google/GoogleStep2'
import GoogleStep3 from './pages/deployment/google/GoogleStep3'
import GoogleResourcesPage from './pages/deployment/google/GoogleResourcesPage'
import AmazonStep1 from './pages/deployment/amazon/AmazonStep1'
import AmazonStep2 from './pages/deployment/amazon/AmazonStep2'
import AmazonStep3 from './pages/deployment/amazon/AmazonStep3'
import AmazonResourcesPage from './pages/deployment/amazon/AmazonResourcesPage'
import MicrosoftStep1 from './pages/deployment/microsoft/MicrosoftStep1'
import MicrosoftStep2 from './pages/deployment/microsoft/MicrosoftStep2'
import MicrosoftStep3 from './pages/deployment/microsoft/MicrosoftStep3'
import MicrosoftResourcesPage from './pages/deployment/microsoft/MicrosoftResourcesPage'
import ClaudeCodePage from './pages/devTools/claudeCode/ClaudeCodePage'
import ClaudeCodeStep1 from './pages/devTools/claudeCode/ClaudeCodeStep1'
import ClaudeCodeStep2 from './pages/devTools/claudeCode/ClaudeCodeStep2'
import ClaudeCodeStep3 from './pages/devTools/claudeCode/ClaudeCodeStep3'
import ClaudeCodeResourcesPage from './pages/devTools/claudeCode/ClaudeCodeResourcesPage'
import ClaudeCodeLeakPage from './pages/devTools/claudeCode/ClaudeCodeLeakPage'
import RagPage from './pages/productStack/rag/RagPage'
import RagStep1 from './pages/productStack/rag/RagStep1'
import RagStep2 from './pages/productStack/rag/RagStep2'
import RagStep3 from './pages/productStack/rag/RagStep3'
import RagResourcesPage from './pages/productStack/rag/RagResourcesPage'
// Resources pages
import LearningPage from './pages/resources/LearningPage'
import GitHubPage from './pages/resources/GitHubPage'
import ToolsPage from './pages/resources/ToolsPage'
import CommunityPage from './pages/resources/CommunityPage'
import ResumePage from './pages/resources/ResumePage'
import LinkedInPage from './pages/resources/LinkedInPage'
import KeywordsIndexPage from './pages/KeywordsIndexPage'
import WhereToStartPage from './pages/WhereToStartPage'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/google" element={<GooglePage />} />
        <Route path="/google/step-1" element={<GoogleStep1 />} />
        <Route path="/google/step-2" element={<GoogleStep2 />} />
        <Route path="/google/step-3" element={<GoogleStep3 />} />
        <Route path="/google/resources" element={<GoogleResourcesPage />} />
        <Route path="/amazon" element={<AmazonPage />} />
        <Route path="/amazon/step-1" element={<AmazonStep1 />} />
        <Route path="/amazon/step-2" element={<AmazonStep2 />} />
        <Route path="/amazon/step-3" element={<AmazonStep3 />} />
        <Route path="/amazon/resources" element={<AmazonResourcesPage />} />
        <Route path="/microsoft" element={<MicrosoftPage />} />
        <Route path="/microsoft/step-1" element={<MicrosoftStep1 />} />
        <Route path="/microsoft/step-2" element={<MicrosoftStep2 />} />
        <Route path="/microsoft/step-3" element={<MicrosoftStep3 />} />
        <Route path="/microsoft/resources" element={<MicrosoftResourcesPage />} />
        <Route path="/claude-code" element={<ClaudeCodePage />} />
        <Route path="/claude-code/step-1" element={<ClaudeCodeStep1 />} />
        <Route path="/claude-code/step-2" element={<ClaudeCodeStep2 />} />
        <Route path="/claude-code/step-3" element={<ClaudeCodeStep3 />} />
        <Route path="/claude-code/resources" element={<ClaudeCodeResourcesPage />} />
        <Route path="/claude-code/the-leak" element={<ClaudeCodeLeakPage />} />
        <Route path="/rag" element={<RagPage />} />
        <Route path="/rag/step-1" element={<RagStep1 />} />
        <Route path="/rag/step-2" element={<RagStep2 />} />
        <Route path="/rag/step-3" element={<RagStep3 />} />
        <Route path="/rag/resources" element={<RagResourcesPage />} />
        {/* Resources routes — /resources redirects to first tab */}
        <Route path="/resources" element={<Navigate to="/resources/resume" replace />} />
        <Route path="/resources/resume" element={<ResumePage />} />
        <Route path="/resources/linkedin" element={<LinkedInPage />} />
        <Route path="/resources/projects" element={<ToolsPage />} />
        <Route path="/resources/learning" element={<LearningPage />} />
        <Route path="/resources/github" element={<GitHubPage />} />
        <Route path="/resources/community" element={<CommunityPage />} />
        <Route path="/keywords" element={<KeywordsIndexPage />} />
        <Route path="/where-to-start" element={<WhereToStartPage />} />
      </Routes>
    </Layout>
  )
}

export default App
