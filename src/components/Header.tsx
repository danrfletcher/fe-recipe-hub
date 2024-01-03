import { SlMenu } from "react-icons/sl";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Umami</h1>
      <div className="icon-container">
        <SlMenu style={{background: "transparent", color: "#660f27", cursor: "pointer"}} />
      </div>
    </header>
  )
}

export default Header
