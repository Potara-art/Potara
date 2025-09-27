import mountains from './assets/mountains.svg'

function App() 
{
  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center justify-center">
      <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
        Get Started
      </button>

      <img
        src={mountains}
        alt="Mountains"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-full"
      />
    </div>
  )
}

export default App
