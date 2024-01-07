import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logout } from "../../features/auth/authSlice"

const LoginSuccess: React.FC = () => {

  const isNavToggled = useAppSelector((state) => state.navToggle.value)
  const user = useAppSelector((state) => state.auth.name)
  const username = useAppSelector((state) => state.auth.username)
  const profileImg = useAppSelector((state) => state.auth.profileImg)
  const bio = useAppSelector((state) => state.auth.bio)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div className={isNavToggled ? "page-slide-in" : "page-slide-out"}>
      {user ? (
        <h2 className="auth-header profile-el">Hello, {user[0].toUpperCase() + user.slice(1)}!</h2>
      ) : (
        <h2 className="auth-header profile-el">Hello!</h2>
      )}
      <img className="auth-img profile-el" src={profileImg} alt="User profile image" />
      <div className="profile-wrapper">
        <h3 className="profile-text profile-header">Username:</h3>
        <p className="profile-text">{username}</p>
        <h3 className="profile-text profile-header">Bio:</h3>
        <p className="profile-text profile-bio">{bio}</p>
      </div>
      <button
        className="styled-btn back-btn"
        onClick={handleClick}>
        Log out
      </button>
    </div>
  )
}

export default LoginSuccess
