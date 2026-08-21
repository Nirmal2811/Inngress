import { useParams, Navigate } from 'react-router-dom'
import { getSolutionBySlug } from '../data/solutions'
import SolutionHero from '../components/solution/SolutionHero'
import SolutionContent from '../components/solution/SolutionContent'
import SolutionProcess from '../components/solution/SolutionProcess'

function SolutionDetail() {
  const { slug } = useParams()
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    return <Navigate to="/" replace />
  }

  return (
    <main>
      <SolutionHero title={solution.title} image={solution.image} />
      <SolutionContent
        icon={solution.icon}
        title={solution.title}
        image={solution.image}
        longDescription={solution.longDescription}
        highlights={solution.highlights}
      />
      <SolutionProcess />
    </main>
  )
}

export default SolutionDetail
