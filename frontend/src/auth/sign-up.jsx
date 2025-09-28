import testBg from '../assets/testBg.png'
import logo from '../assets/potara-logo.png'

function SignUp() 
{
  return (
    <main
      className="relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${testBg})` }}
    >
      {/* Logo (top-left) */}
      <a href="/" className="absolute top-5 left-5">
        <img src={logo} alt="Potara Logo" className="w-32" />
      </a>

      {/* Close button (top-right) */}
      <a
        href="/start"
        className="absolute top-1 right-8 text-white text-7xl font-bold hover:text-gray-200 transition"
      >
        ×
      </a>

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
              className="w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
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
              className="w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
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
              className="w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
            />
          </div>

          <div>
            <label htmlFor="retype-password" className="block text-sm almost-black mb-1">
              Re-type Password
            </label>
            <input
              id="retype-password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
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
          Already have an account?{" "}
          <a href="/log-in" className="text-[#EB9191] underline">
            Log in
          </a>
        </p>
      </div>
    </main>
  )
}

export default SignUp