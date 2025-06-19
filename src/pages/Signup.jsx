import React, { useState } from "react";
import { Link } from "react-router";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setFullname("");
    setPhone("");
    setEmail("");
    setPassword("");
    setCompany("");
    setAgency("");
  };

  return (
    <div className="flex flex-col  gap-9 h-screen w-full px-7 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-gray-800 font-bold">
          Create your <br /> PopX account
        </h1>
      </div>
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="flex flex-col gap-6 pb-7 relative"
      >
        <label className="text-[#6C25FF] font-medium absolute top-[-2%] left-3 bg-[#F7F8F9] pr-3 pl-1">
          Full Name<span className="text-red-600">*</span>
        </label>
        <input
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="border-gray-300 border-2 rounded-lg py-3"
          type="text"
          placeholder="   Enter Name"
        />
        <label className="text-[#6C25FF] font-medium absolute top-[12.4%] left-3 bg-[#F7F8F9] pr-3 pl-1">
          Phone Number<span className="text-red-600">*</span>
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-gray-300 border-2 rounded-lg py-3"
          type="number"
          placeholder="   Enter phone number"
        />
        <label className="text-[#6C25FF] font-medium absolute top-[26%] left-3 bg-[#F7F8F9] pr-3 pl-1">
          Email address<span className="text-red-600">*</span>
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-gray-300 border-2 rounded-lg py-3"
          type="email"
          placeholder="   Enter email address"
        />
        <label className="text-[#6C25FF] font-medium absolute top-[40%] left-3 bg-[#F7F8F9] pr-3 pl-1">
          Password<span className="text-red-600">*</span>
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-gray-300 border-2 rounded-lg py-3"
          type="password"
          placeholder="   Enter password"
        />
        <label className="text-[#6C25FF] font-medium absolute top-[54%] left-3 bg-[#F7F8F9] pr-3 pl-1">
          Company Name<span className="text-red-600">*</span>
        </label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border-gray-300 border-2 rounded-lg py-3"
          type="text"
          placeholder="   Enter Company name"
        />
        <div className="flex flex-col  gap-2 ">
          <label className="font-medium  bg-[#F7F8F9] ">
            Are you an Agency?<span className="text-red-600">*</span>
          </label>
          <div className="flex gap-4">
            <input
              value="no"
              checked={agency === "no"}
              onChange={(e) => setAgency(e.target.value)}
              type="radio"
              name="agency"
            />
            Yes
            <input
              checked={agency === "yes"}
              onChange={(e) => setAgency(e.target.value)}
              type="radio"
              value="yes"
              name="agency"
            />
            No
          </div>
        </div>

        <Link to="/login" className="bg-[#6C25FF] py-3  rounded-lg text-white font-bold flex justify-center items-center">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Signup;
