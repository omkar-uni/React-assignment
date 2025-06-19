import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col  gap-9 h-screen w-full px-7 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-gray-800 font-bold">
          Signin to your PopX account
        </h1>
        <p className="text-gray-400 font-medium text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="flex flex-col gap-6 pb-7 relative"
      >
        <label className="text-[#6C25FF] font-medium absolute top-[-6%] left-3 bg-[#F7F8F9] pr-3 pl-1">
          Email address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-gray-300 border-2 rounded-lg py-3"
          type="email"
          placeholder="   Enter email address"
        />
        <label className="text-[#6C25FF] font-medium absolute top-[26.4%] left-3 bg-[#F7F8F9] pr-3 pl-1">
          Password
        </label>
        <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          className="border-gray-300 border-2 rounded-lg py-3"
          type="password"
          placeholder="   Enter password"
        />
        <Link to={"/profile"} className="bg-[#CBCBCB] py-3  rounded-lg text-white font-bold flex justify-center items-center">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Login;
