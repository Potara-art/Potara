// import { useNavigate } from 'react-router-dom'
import testBg from '../assets/testBg.svg'

function SignUp() 
{
  return (
    <>
      <main
        className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${testBg})` }}
      >
        {/* Sign Up Card */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mx-4">
          <h1 className="font-unkempt text-4xl text-center mb-6 almost-black">
            Create your Account
          </h1>

          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm almost-black mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter Username"
                className="w-full rounded-2xl border border-gray-300 text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm almost-black mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="create@potara.art"
                className="w-full rounded-2xl border border-gray-300 text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm almost-black mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-gray-300 text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
              />
            </div>

            <div>
              <label htmlFor="retype-password" className="block text-sm almost-black mb-1">
                Re-type Password
              </label>
              <input
                id="retype-password"
                type="retype-password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-gray-300 text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#EB9191] hover:bg-[#d97c7c] text-white font-unkempt text-xl py-3 rounded-2xl shadow-md transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <a href="/login" className="text-[#EB9191] underline">Log in</a>
          </p>
        </div>
      </main>
    </>
  )
}

export default SignUp