import testBg from '../assets/testBg.svg'

function LogIn() 
{
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${testBg})` }}
    >
      {/* Log In Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mx-4">
        <h1 className="font-unkempt text-4xl text-center mb-6 almost-black">
          Log in to your Account
        </h1>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm almost-black mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-gray-300 bg-white text-black placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
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
              className="w-full rounded-2xl border border-gray-300 bg-white text-black placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#EB9191] hover:bg-[#d97c7c] text-white font-unkempt text-xl py-3 rounded-2xl shadow-md transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{' '}
          <a href="/sign-up" className="text-[#EB9191] underline">
            Sign up
          </a>
        </p>
      </div>
    </main>
  )
}

export default LogIn