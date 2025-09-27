import mountains from './assets/mountains.svg'
import potaraLogo from './assets/potara-logo.png'
import star from './assets/star.png'
import swirl from './assets/swirl.png'

function App() {
  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center justify-start pt-36">

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-black text-4xl">
          Welcome to
        </h2>

        <img
          src={star}
          alt="Star"
          className="absolute -top-18 -left-16 w-38 h-38"
        />

        <img
          src={swirl}
          alt="Swirl"
          className="absolute top-[30px] -left-28 w-24 h-24"
        />

        <img
          src={potaraLogo}
          alt="Potara Logo"
          className="w-96"
        />

        <h1 className="text-black text-4xl mb-6">
          Make Drawing Simple.
        </h1>

        <button className="px-8 py-5 bg-white text-black text-4xl rounded-3xl shadow-md hover:bg-gray-200 transition font-unkempt">
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