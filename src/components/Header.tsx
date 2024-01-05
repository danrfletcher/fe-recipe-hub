import { SlArrowUp, SlMenu } from "react-icons/sl";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { navToggle } from "../features/navSlice";
import { ToggledNav } from "./Nav";

const Header: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value);
  
  const dispatch = useAppDispatch();

  return (
    <>
      <header>
        <h1>Umami</h1>
        <div className="icon-container"
          onClick={() => dispatch(navToggle())}>
          {!isNavToggled ? (
            <SlMenu className="icon" />
          ) : (
            <SlArrowUp className="icon" />
          )}
        </div>
      </header>
      {isNavToggled ? (
        <ToggledNav class={"slide-in"} />
      ) : (
        <ToggledNav class={"slide-out"} />
      )}
    </>
  );
};

export default Header;
