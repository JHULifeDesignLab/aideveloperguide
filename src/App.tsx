import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GooglePage from './pages/GooglePage'
import AmazonPage from './pages/AmazonPage'
import MicrosoftPage from './pages/MicrosoftPage'
import GoogleStep1 from './pages/GoogleStep1New'
import GoogleStep2 from './pages/GoogleStep2New'
import GoogleStep3 from './pages/GoogleStep3New'
import GoogleResourcesPage from './pages/GoogleResourcesNew'

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
      </Routes>
    </Layout>
  )
}

export default App
