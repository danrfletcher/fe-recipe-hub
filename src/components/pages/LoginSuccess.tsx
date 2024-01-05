import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logout } from "../../features/auth/authSlice"

const LoginSuccess: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value)
  const user = useAppSelector((state) => state.user.value)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      <h2 className="auth-header">Welcome back!</h2>
      <p>You are currently logged in as</p>
      <span>{user}</span>
      <button
        className="login-btn"
        onClick={handleClick}>
        Log out
      </button>
    </div>
  )
}

export default LoginSuccess
