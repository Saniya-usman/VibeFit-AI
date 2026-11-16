// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   const handleLogin = () => {
//     const user = JSON.parse(localStorage.getItem(email))
//     if(user && user.password === password){
//       alert('Login Successful!')
//       navigate('/')  // Go to Home page
//     } else {
//       alert('Invalid email or password')
//     }
//   }

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <input 
//           type="email" 
//           placeholder="Email" 
//           className="border p-2 w-full mb-4 rounded"
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           className="border p-2 w-full mb-4 rounded"
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button 
//           onClick={handleLogin} 
//           className="bg-cyan-700 text-white p-2 w-full rounded hover:bg-cyan-800"
//         >
//           Get Started
//         </button>
//         <p className="mt-4 text-sm">
//           Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login



import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

/* Inline SVG icons to avoid extra dependencies */
const UserCircle = ({ className = "w-14 h-14 text-white" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 19c0-3.333 3.333-5 8-5s8 1.667 8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MailIcon = ({ className = "w-5 h-5 text-white/80" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 8.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LockIcon = ({ className = "w-5 h-5 text-white/80" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Eye = ({ className = "w-5 h-5 text-white/80" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const EyeOff = ({ className = "w-5 h-5 text-white/80" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.58 10.58A3 3 0 0 0 13.42 13.42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12s4-7 10-7c2.1 0 4.02.5 5.7 1.36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.7 15.64C20.02 16.5 18.1 17 16 17c-6 0-10-7-10-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Prefill remembered email (demo)
    const remembered = localStorage.getItem("rememberedEmail")
    if (remembered) {
      setEmail(remembered)
      setRemember(true)
    }
  }, [])

  const validate = () => {
    const e = {}
    if (!email) e.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email"
    if (!password) e.password = "Password is required"
    else if (password.length < 6) e.password = "Password must be at least 6 characters"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleLogin = async (ev) => {
    ev?.preventDefault()
    if (!validate()) return

    setLoading(true)
    setMessage(null)

    // Simulate async login (demo)
    await new Promise((r) => setTimeout(r, 700))

    // Example authentication: check localStorage for a stored user by email
    // (You can replace this with an API call)
    const raw = localStorage.getItem(email)
    const user = raw ? JSON.parse(raw) : null

    if (user && user.password === password) {
      if (remember) localStorage.setItem("rememberedEmail", email)
      else localStorage.removeItem("rememberedEmail")

      setMessage({ type: "success", text: "Login successful — redirecting..." })
      setTimeout(() => navigate("/"), 800)
    } else {
      setMessage({ type: "error", text: "Invalid email or password" })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex  bg-gray-900 items-center justify-center ">
      {/* full-screen gradient backdrop */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1b8ab3] to-[#09344b]



  opacity-90 filter blur-sm"></div>

      <div className="relative z-10 max-w-md w-full mx-4">
        <div className="rounded-3xl   overflow-hidden shadow-2xl">
          <div className="p-10 bg-linear-to-br from-white/8 to-white/6 backdrop-blur-lg border border-white/30 rounded-3xl">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-cyan-300/80  p-4 rounded-full">
                <UserCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="mt-4 text-white/90 tracking-widest text-xl">CUSTOMER LOGIN</h1>
            </div>

            {message && (
              <div
                role="status"
                className={`mb-4 text-sm px-4 py-2 rounded ${message.type === "success" ? "bg-green-700/30 text-green-200" : "bg-red-700/30 text-red-200"}`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleLogin} noValidate>
              <div className="mb-6">
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="flex items-center space-x-3 border-b border-white/30 pb-2">
                  <MailIcon />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email ID"
                    className="flex-1 bg-transparent outline-none text-white placeholder-white/60 py-2"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </div>
                {errors.email && <p id="email-error" className="mt-2 text-xs text-rose-300">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="flex items-center justify-between space-x-3 border-b border-white/30 pb-2">
                  <div className="flex items-center space-x-3">
                    <LockIcon />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="bg-transparent outline-none text-white placeholder-white/60 py-2"
                      aria-invalid={errors.password ? "true" : "false"}
                      aria-describedby={errors.password ? "password-error" : undefined}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="p-1 rounded hover:bg-white/6"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                {errors.password && <p id="password-error" className="mt-2 text-xs text-rose-300">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between text-sm text-white/80 mb-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 rounded bg-white/5 text-blue-400 border-white/20"
                  />
                  <span>Remember me</span>
                </label>

                <button type="button" className="text-white/70 hover:underline cursor-pointer" onClick={() => alert("Forgot password flow here")}>
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-md bg-cyan-300/80  text-white tracking-wider cursor-pointer hover:bg-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in..." : "LOGIN"}
              </button>

              <p className="mt-6 text-center text-sm text-white/70">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="text-white underline cursor-pointer"
                >
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}