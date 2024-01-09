import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../app/hooks"

const Error: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value)

  const navigate = useNavigate()

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      <section className="error-container">
        <h2 className="error-header">Oops!</h2>
        <p>Something went wrong...</p>
        <div className="btn-container">
          <button
            className="styled-btn back-btn"
            onClick={() => navigate(-1)}>
            Back
          </button>
          <button
            className="styled-btn auth-btn"
            onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </section>
    </div>
  )
}

export default Error
