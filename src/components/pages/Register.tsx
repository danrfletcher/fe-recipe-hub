import { useAppSelector } from "../../app/hooks";

const Register: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value);

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      <h2>Register</h2>
    </div>
  )
}

export default Register
