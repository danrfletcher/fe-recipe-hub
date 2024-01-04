import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

interface FormValues {
  username: string
  password: string
}

const Login: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value);
  const { register, handleSubmit } = useForm<FormValues>()
  const submitForm: SubmitHandler<FormValues> = (data) => {
    console.log(data.username)
  }

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      <h2>Welcome to Umami</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="on"
            {...register("username")}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            required />
        </div>
        <button type="submit">
          Log in
        </button>
      </form>
      <p>Not signed up? <Link to="/register">Register</Link></p>
    </div>
  )
}

export default Login
