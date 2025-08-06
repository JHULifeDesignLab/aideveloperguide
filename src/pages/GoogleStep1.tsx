import StepPageLayout from '../components/StepPageLayout'

export default function GoogleStep1() {
  return (
    <StepPageLayout vendor="google" step="beginner">
      <div className="prose prose-lg max-w-none">
        <h2>Goal</h2>
        <p>Build a rock-solid foundation in generative-AI concepts, tools, and ethics—<em>no prior AI experience required</em>.</p>
        
        <h3>Core modules</h3>
        <ol>
          <li><strong>Introduction to Generative AI</strong> (~45 min) – how text/image generators work and real-world use cases.</li>
          <li><strong>Introduction to Large Language Models (LLMs)</strong> (~1 h) – prompt-tuning, attention, and hands-on PaLM/Vertex AI labs.</li>
          <li><strong>Introduction to Responsible AI</strong> (~30 min) – Google AI Principles, fairness, safety, transparency.</li>
        </ol>
        
        <h3>Optional labs (earn the Beginner Skill Badge)</h3>
        <ol start={4}>
          <li><strong>Prompt Design in Vertex AI</strong> (~3 h 45 m) – single- & multimodal prompt engineering practice.</li>
          <li><strong>Responsible AI: Applying Principles with Google Cloud</strong> (~2 h) – practical mitigation techniques and policy checks.</li>
        </ol>
        
        <blockquote>
          <p><strong>Tip</strong> – These short courses give you just enough confidence before you tackle the deeper, 12-module developer path.</p>
        </blockquote>
      </div>
    </StepPageLayout>
  )
}
