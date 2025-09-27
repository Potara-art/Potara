import logo from '../assets/potara-logo.png'

function Header() 
{
  return (
    <header className="top-0 left-0 right-0 z-50 h-20 bg-beige flex items-center px-5">
      <a href="/">
        <img className="w-32" src={logo} alt="Potara Logo" />
      </a>
    </header>
  );
}

export default Header