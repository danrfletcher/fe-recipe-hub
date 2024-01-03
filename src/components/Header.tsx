import { SlMenu } from "react-icons/sl";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggle } from "../features/navSlice";
import { ToggledNav } from "./Nav";

const Header: React.FC = () => {

  const isToggled = useAppSelector((state) => state.toggle.value)

  const dispatch = useAppDispatch()

  return (
    <>
      <header>
        <h1>Umami</h1>
        <div
          className="icon-container"
          onClick={() => dispatch(toggle())}>
          <SlMenu className="icon" />
        </div>
      </header>
      {isToggled ? (
        <ToggledNav />
      ) : (
        null
      )}
    </>
  )
}

export default Header
