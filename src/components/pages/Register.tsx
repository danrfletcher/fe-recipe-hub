import { useAppSelector } from "../../app/hooks";

const Register: React.FC = () => {

  const isToggled = useAppSelector((state) => state.toggle.value);

  return (
    <div className={isToggled ? "page-slide-in" : "page-slide-out"}>
      <h2>Register</h2>
    </div>
  )
}

export default Register
