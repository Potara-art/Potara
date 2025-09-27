import logo from '../assets/potara-logo.png'

function Header() {
  return (
    <header className="top-0 left-0 right-0 z-50 h-20 bg-beige flex items-center px-5">
      {/* Logo (left side) */}
      <a href="/">
        <img className="w-32" src={logo} alt="Potara Logo" />
      </a>

      {/* Button (right side) */}
      <button className="ml-auto bg-[#EB9191] hover:bg-[#d97c7c] text-white font-unkempt text-xl px-8 py-3 rounded-2xl shadow-md transition">
        Sign Up / Log In
      </button>

    </header>
  )
}

export default Header