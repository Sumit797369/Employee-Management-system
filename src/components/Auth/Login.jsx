import React, { use, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      
      <div className="w-[420px] rounded-2xl bg-black/90 p-10 shadow-2xl border border-gray-700">
        
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Admin Login
        </h2>

        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-4"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full py-3 px-5 text-sm text-black bg-white outline-none focus:ring-2 focus:ring-blue-600"
            type="email"
            placeholder="Enter your email"
          />

          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full py-3 px-5 text-sm text-black bg-white outline-none focus:ring-2 focus:ring-blue-600"
            type="password"
            placeholder="Enter password"
          />

          <button className="mt-6 rounded-full py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200">
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          © 2025 Admin Panel
        </p>
      </div>
    </div>
  );
};

export default Login;
