import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'
import testBg from '../assets/testBg.png'
import logo from '../assets/potara-logo.png'

function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [error, setError] = useState('')
  const { register, loading } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!username || !email || !password || !retypePassword) {
      setError('Please fill in all fields')
      return
    }

    if (password !== retypePassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    try {
      await register(username, email, password)
      navigate('/start')
    } catch (error) {
      setError(error.message)
    }
  }

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
        href="/"
        className="absolute top-1 right-8 text-white text-7xl font-bold hover:text-gray-200 transition"
      >
        ×
      </a>

      {/* Sign Up Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mx-4">
        <h1 className="font-unkempt text-4xl text-center mb-6 almost-black">
          Create your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="username" className="block text-sm almost-black mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm almost-black mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="create@potara.art"
              className="w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm almost-black mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="retype-password" className="block text-sm almost-black mb-1">
              Re-type Password
            </label>
            <input
              id="retype-password"
              type="password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#EB9191] hover:bg-[#d97c7c] text-white font-unkempt text-xl py-3 rounded-2xl shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
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