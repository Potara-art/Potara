import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'
import logo from '../assets/potara-logo.png'

function Header() {
  const navigate = useNavigate()
  const { user, logout, isAuthenticated } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <header className="top-0 left-0 right-0 z-50 h-20 bg-beige flex items-center px-5">
      {/* Logo (left side) */}
      <a href="/">
        <img className="w-32" src={logo} alt="Potara Logo" />
      </a>

      {/* Right side content */}
      <div className="ml-auto flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <span className="almost-black font-unkempt text-lg">
              Hello, {user?.username}!
            </span>
            <button
              onClick={() => navigate('/gallery')}
              className="bg-[#EB9191] hover:bg-awesomeblue text-white font-unkempt text-xl px-6 py-2 rounded-2xl shadow-md transition transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={handleLogout}
              className="bg-[#EB9191] hover:bg-awesomeblue text-white font-unkempt text-xl px-6 py-2 rounded-2xl shadow-md transition transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Log Out
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/sign-up')}
            className="bg-[#EB9191] hover:bg-awesomeblue text-white font-unkempt text-xl px-6 py-2 rounded-2xl shadow-md transition transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Sign Up / Log In
          </button>
        )}
      </div>
    </header>
  )
}

export default Header