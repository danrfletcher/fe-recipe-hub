import { useNavigate } from "react-router-dom"

const Error: React.FC = (props: any) => {

  const navigate = useNavigate()

  return (
    <section>
      <h2>Error</h2>
      <p>{props.message}</p>
      <button
        onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  )
}

export default Error
