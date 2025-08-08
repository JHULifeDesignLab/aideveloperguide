import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GooglePage from './pages/GooglePage'
import AmazonPage from './pages/AmazonPage'
import MicrosoftPage from './pages/MicrosoftPage'
import GoogleStep1 from './pages/GoogleStep1'
import GoogleStep2 from './pages/GoogleStep2'
import GoogleStep3 from './pages/GoogleStep3'
import GoogleResourcesPage from './pages/GoogleResourcesPage'
// New Resources pages
import ResourcesPage from './pages/ResourcesPage'
import LearningPage from './pages/resources/LearningPage'
import GitHubPage from './pages/resources/GitHubPage'
import ToolsPage from './pages/resources/ToolsPage'
import CommunityPage from './pages/resources/CommunityPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/google" element={<GooglePage />} />
        <Route path="/google/step-1" element={<GoogleStep1 />} />
        <Route path="/google/step-2" element={<GoogleStep2 />} />
        <Route path="/google/step-3" element={<GoogleStep3 />} />
        <Route path="/google/resources" element={<GoogleResourcesPage />} />
        <Route path="/amazon" element={<AmazonPage />} />
        <Route path="/microsoft" element={<MicrosoftPage />} />
        {/* New Resources routes */}
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/learning" element={<LearningPage />} />
        <Route path="/resources/github" element={<GitHubPage />} />
        <Route path="/resources/tools" element={<ToolsPage />} />
        <Route path="/resources/community" element={<CommunityPage />} />
      </Routes>
    </Layout>
  )
}

export default App
