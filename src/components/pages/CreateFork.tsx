import { useAppSelector } from "../../app/hooks";

export const CreateFork: React.FC = () => {
	const isNavToggled = useAppSelector((state) => state.navToggle.value);

  return(<div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>

  </div>)
}