import StepPageLayout from '../components/StepPageLayout'

export default function GoogleStep2() {
  return (
    <StepPageLayout vendor="google" step="developer">
      <div className="prose prose-lg max-w-none">
        <h2>Goal</h2>
        <p>Finish Google's <strong>Generative AI for Developers</strong> learning path (12 modules, ~26 hours) and <em>optionally</em> earn the Skill Badge.</p>
        
        <p>The path mixes theory and labs so you can:</p>
        
        <ul>
          <li>Experiment with <strong>transformers, diffusion, encoder–decoder models</strong>.</li>
          <li>Practice fine-tuning and <strong>TensorFlow/PyTorch</strong> workflows you'll meet in interviews.</li>
          <li>Get comfortable with <strong>Vertex AI Studio, Model Garden, and Matching Engine</strong> for RAG workflows.</li>
        </ul>
        
        <blockquote>
          <p><strong>Badge or pick-and-choose?</strong> Recruiters care more about the project you build than the badge itself, so feel free to cherry-pick modules aligned with your portfolio goals.</p>
        </blockquote>
      </div>
    </StepPageLayout>
  )
}
