// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   const handleSignup = () => {
//     if(name && email && password){
//       localStorage.setItem(email, JSON.stringify({name, password}))
//       alert('Signup Successful! Please login.')
//       navigate('/login')  // Redirect to Login page
//     } else {
//       alert('Please fill all fields')
//     }
//   }

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//         <input 
//           type="text" 
//           placeholder="Full Name" 
//           className="border p-2 w-full mb-4 rounded"
//           value={name} 
//           onChange={(e) => setName(e.target.value)}
//         />
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
//           onClick={handleSignup} 
//           className="bg-pink-500 text-white p-2 w-full rounded hover:bg-pink-600"
//         >
//           Sign Up
//         </button>
//         <p className="mt-4 text-sm">
//           Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>Login</span>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Signup


import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

/* Small inline icons (keeps the component self-contained) */
const UserIcon = ({ className = "w-5 h-5 text-white/80" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MailIcon = ({ className = "w-5 h-5 text-white/80" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 8.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
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
    <path d="M2 12s4-7 10-7c2.1 0 4.02.5 5.7 1.36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.7 15.64C20.02 16.5 18.1 17 16 17c-6 0-10-7-10-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* Helper: compute SHA-256 hash in hex (uses Web Crypto API) */
async function hashStringSHA256(input) {
  const enc = new TextEncoder()
  const data = enc.encode(input)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

/* Password strength helper (simple heuristic) */
function getPasswordStrength(pw) {
  let score = 0
  if (pw.length >= 8) score += 1
  if (/[A-Z]/.test(pw)) score += 1
  if (/[0-9]/.test(pw)) score += 1
  if (/[^A-Za-z0-9]/.test(pw)) score += 1
  return score // 0..4
}

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [agree, setAgree] = useState(true)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setMessage(null)
  }, [name, email, password, confirmPassword])

  function validate() {
    const e = {}
    if (!name.trim()) e.name = "Full name is required"
    if (!email.trim()) e.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Please enter a valid email"
    if (!password) e.password = "Password is required"
    else if (password.length < 8) e.password = "Password must be at least 8 characters"
    if (password !== confirmPassword) e.confirmPassword = "Passwords do not match"
    if (!agree) e.agree = "You must accept the terms"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSignup = async (ev) => {
    ev?.preventDefault()
    if (!validate()) return

    setLoading(true)
    setMessage(null)

    // Ensure email not already registered (localStorage demo)
    const existing = localStorage.getItem(email.toLowerCase())
    if (existing) {
      setErrors({ email: "An account with this email already exists" })
      setLoading(false)
      return
    }

    try {
      // Hash the password before saving (demo, not a replacement for server-side auth)
      const passwordHash = await hashStringSHA256(password)

      const user = {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        passwordHash,
        createdAt: new Date().toISOString(),
      }

      // Persist to localStorage (demo only). Keyed by email.
      localStorage.setItem(user.email, JSON.stringify(user))

      setMessage({ type: "success", text: "Account created. Redirecting to login..." })
      setTimeout(() => navigate("/login"), 900)
    } catch (err) {
      console.error("Signup error:", err)
      setMessage({ type: "error", text: "Something went wrong. Try again." })
    } finally {
      setLoading(false)
      // Clear password fields for safety
      setPassword("")
      setConfirmPassword("")
    }
  }

  const strength = getPasswordStrength(password)
  const strengthLabels = ["Very weak", "Weak", "Okay", "Good", "Strong"]
  const strengthColors = ["bg-rose-500", "bg-amber-500", "bg-yellow-400", "bg-lime-500", "bg-green-500"]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0  bg-linear-to-br from-[#1b8ab3] to-[#09344b] opacity-90 filter blur-sm"></div>

      <div className="relative z-10 max-w-md w-full mx-4">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-10 backdrop-blur-lg border border-white/30 rounded-3xl">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-cyan-300/80 p-4 rounded-full">
                <UserIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="mt-4 text-white/90 tracking-widest text-xl">CREATE ACCOUNT</h1>
            </div>

            {message && (
              <div
                role="status"
                className={`mb-4 text-sm px-4 py-2 rounded ${message.type === "success" ? "bg-green-700/30 text-green-200" : "bg-red-700/30 text-red-200"}`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSignup} noValidate>
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">Full Name</label>
                <div className="flex items-center space-x-3 border-b border-white/30 pb-2">
                  <UserIcon />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="flex-1 bg-transparent outline-none text-white placeholder-white/60 py-2"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                </div>
                {errors.name && <p id="name-error" className="mt-2 text-xs text-rose-300">{errors.name}</p>}
              </div>

              <div className="mb-4">
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
                    <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.25"/>
                      <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

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

                {/* Strength meter */}
                {password.length > 0 && (
                  <div className="mt-2">
                    <div className="h-2 bg-white/6 rounded overflow-hidden">
                      <div
                        className={`h-2 ${strengthColors[strength]} transition-all`}
                        style={{ width: `${(strength / 4) * 100}%` }}
                      />
                    </div>
                    <p className="mt-1 text-xs text-white/70">{strengthLabels[strength]}</p>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <div className="flex items-center space-x-3 border-b border-white/30 pb-2">
                  <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.25"/>
                    <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="flex-1 bg-transparent outline-none text-white placeholder-white/60 py-2"
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                    aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                  />
                </div>
                {errors.confirmPassword && <p id="confirmPassword-error" className="mt-2 text-xs text-rose-300">{errors.confirmPassword}</p>}
              </div>

              <div className="flex items-center justify-between text-sm text-white/80 mb-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="w-4 h-4 rounded bg-white/5 text-blue-400 border-white/20"
                  />
                  <span>I agree to the Terms</span>
                </label>

                <div className="text-xs text-white/70">
                  <button type="button" onClick={() => alert("Show terms (demo)")} className="underline cursor-pointer">Read</button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-md bg-cyan-300/80 text-white tracking-wider hover:bg-cyan-600 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Sign Up"}
              </button>

              <p className="mt-6 text-center text-sm text-white/70">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-white cursor-pointer underline"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}