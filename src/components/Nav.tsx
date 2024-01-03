const Nav: React.FC = () => {
  return (
    <nav className="flex-container">
      <span>Home</span>
      <span>Recipes</span>
      <span>Profile</span>
    </nav>
  )
}

export const ToggledNav: React.FC = () => {
  return (
    <nav className="toggled-flex-container">
      <span>Home</span>
      <span>Recipes</span>
      <span>Profile</span>
    </nav>
  )
}

export default Nav
