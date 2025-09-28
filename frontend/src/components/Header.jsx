import { useNavigate } from 'react-router-dom'
import logo from '../assets/potara-logo.png'

function Header() 
{
  const navigate = useNavigate()   // <-- you need this line

  return (
    <header className="top-0 left-0 right-0 z-50 h-20 bg-beige flex items-center px-5">
      {/* Logo (left side) */}
      <a href="/">
        <img className="w-32" src={logo} alt="Potara Logo" />
      </a>

      {/* Button (right side) */}
      <button
        onClick={() => navigate('/sign-up')}
        className="ml-auto bg-[#EB9191] hover:bg-awesomeblue text-white font-unkempt text-xl px-6 py-2 rounded-2xl shadow-md transition transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        Sign Up / Log In
      </button>
    </header>
  )
}

export default Header