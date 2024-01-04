const Nav: React.FC = () => {
  return (
    <nav className="flex-container">
      <span>Home</span>
      <span>Recipes</span>
      <span>Profile</span>
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
        <span>Home</span>
        <span>Recipes</span>
        <span>Profile</span>
      </nav>
    </div>
  )
}

export default Nav
