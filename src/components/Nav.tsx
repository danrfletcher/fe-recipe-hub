import { Link } from "react-router-dom"

const Nav: React.FC = () => {
  return (
    <nav className="flex-container">
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/login">Log in</Link>
    </nav>
  )
}

interface Props {
  class: string
}

export const ToggledNav: React.FC<Props> = (props) => {

  return (
    <div className={props.class} >
      <nav className="toggled-flex-container">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/login">Log in</Link>
      </nav>
    </div>
  )
}

export default Nav
