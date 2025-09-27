import mountains from './assets/mountains.svg'
import potaraLogo from './assets/potara-logo.png'

function App() {
  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center justify-start pt-37">

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-black text-3xl mb-2">
          Welcome to
        </h2>

        <img
          src={potaraLogo}
          alt="Potara Logo"
          className="w-103 mb-2"
        />

        <h1 className="text-black text-3xl font-unkempt mb-6">
          Make Drawing Simple.
        </h1>

        <button className="px-10 py-6 bg-white text-black text-3xl font-semibold rounded-3xl shadow-md hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>

      {/* Background mountains */}
      <img
        src={mountains}
        alt="Mountains"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] z-0"
      />
    </div>
  )
}

export default App