import { SlMenu } from "react-icons/sl";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Umami</h1>
      <div className="icon-container">
        <SlMenu className="icon" />
      </div>
    </header>
  )
}

export default Header
