import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logout } from "../../features/auth/authSlice"

const LoginSuccess: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value)
  const user = useAppSelector((state) => state.auth.username)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      <h2 className="auth-header">Hello!</h2>
      <div className="login-success">
        <p className="login-success-text">You are currently logged in as:</p>
        <span className="username-text">{user}</span>
        <button
          className="styled-btn back-btn"
          onClick={handleClick}>
          Log out
        </button>
      </div>
    </div>
  )
}

export default LoginSuccess
