import { useNavigate } from "react-router-dom"

const Error: React.FC = () => {

  const navigate = useNavigate()

  return (
    <section>
      <h2>Error</h2>
      <button
        onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  )
}

export default Error
