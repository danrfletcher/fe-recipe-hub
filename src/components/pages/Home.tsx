import { useAppSelector } from "../../app/hooks";

const Home: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value);

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      <h2>Home</h2>
    </div>
  )
}

export default Home
