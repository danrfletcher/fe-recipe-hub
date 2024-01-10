import { Link } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

const CreateForkSuccess: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value)

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      <h2 className="cursive-header recipe-success-header">
        Congratulations!
      </h2>
      <div className="feat-recipe-wrapper">
        <p className="recipe-success-text">
          Your forked recipe has been created and is now live on our site.
        </p>
        <br />
        <p className="recipe-success-text">Thank you for contributing to Umami!</p>
        <img
        className="feat-recipe-img recipe-success-img"
        src="../../src/assets/fine-dining.jpg"
        alt="An image of your recipe" />
      </div>
      <Link to={`/`}>
        <button className="styled-btn large-red-btn">
          Home
        </button>
      </Link>
    </div>
  )
}

export default CreateForkSuccess
