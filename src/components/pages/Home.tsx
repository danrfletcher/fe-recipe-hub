import { useAppSelector } from "../../app/hooks";

const Home: React.FC = () => {

  const isToggled = useAppSelector((state) => state.toggle.value);

  return (
    <div className={isToggled ? "page-slide-in" : "page-slide-out"}>
      <h2>Home</h2>
    </div>
  )
}

export default Home
