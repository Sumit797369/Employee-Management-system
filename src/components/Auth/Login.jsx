import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-emerald-900 via-black to-emerald-800">
      <div className="w-[380px] rounded-2xl border border-emerald-500/40 bg-black/40 backdrop-blur-xl p-10 shadow-2xl">
        
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h1>

        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className="flex flex-col gap-4"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-full border border-emerald-500/60 bg-transparent px-5 py-3 text-lg text-white placeholder:text-gray-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            type="password"
            placeholder="Enter password"
            className="w-full rounded-full border border-emerald-500/60 bg-transparent px-5 py-3 text-lg text-white placeholder:text-gray-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
          />

          <button className="mt-4 w-full rounded-full bg-emerald-600 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700 active:scale-95">
            Log in
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login
