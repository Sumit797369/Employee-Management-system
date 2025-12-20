import React, { use, useState } from "react";

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-black rounded-lg p-20">
        <form className="flex flex-col items-center justify-center">
          <input required value={email} onChange={(e)=>{}}
            className="border-2 border-black rounded-full py-2 px-5 text-black bg-transparent outline-none "
            type="email"
            placeholder="Enter Your Name"
          />
          <input required
            className="border-2 border-black rounded-full py-2 px-5 mt-3 text-black bg-transparent outline-none "
            type="password"
            placeholder="Enter Password"
          />
          <button className=" border-2 border-black rounded-full py-2 px-8 mt-7 text-black bg-transparent outline-none ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
