"use client";
import React, { useState } from "react";

export default function Form() {
  const [fname, setFname] = useState("");
  const [validFname, setValidFname] = useState(true);
  const [fnameMessage, setfnameMessage] = useState("");

  const [lname, setLname] = useState("");
  const [validLname, setValidLname] = useState(true);
  const [lnameMessage, setlnameMessage] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [emailMessage, setEmailMessage] = useState("");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleValidation = () => {
    // first name validation
    if (fname == "") {
      setValidFname(false);
      setfnameMessage("First Name cannot be empty");
    } else {
      setValidFname(true);
      setfnameMessage("");
    }

    // last name validation
    if (lname == "") {
      setValidLname(false);
      setlnameMessage("Last Name cannot be empty");
    } else {
      setValidLname(true);
      setlnameMessage("");
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email) == false) {
      setValidEmail(false);
      setEmailMessage("Looks like this is not an email");
    } else {
      setValidEmail(true);
      setEmailMessage("");
    }

    // password validation
    if (password == "") {
      setValidPassword(false);
      setPasswordMessage("Password cannot be empty");
    } else {
      setValidPassword(true);
      setPasswordMessage("");
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl shadow-[0px_7px_0px_0px_rgba(0,0,0,0.18);] p-6 xl:p-10">

      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <input value={fname} type="text" placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
          className={`font-semibold w-full border-[1px] focus:border-Blue focus:ring-0 focus:outline-none rounded-md pl-5 py-3 ${validFname ? "" : "border-Red border-2"}`}/>
        {
          <div className="relative">
            <div className={`${validFname ? "" : "bg-[url('../../public/icon-error.svg')] bg-contain bg-no-repeat absolute right-5 -top-9 w-6 h-6"}`}></div>
            <p className="text-Red italic text-xs text-end font-medium pb-3 pt-1">{fnameMessage}</p>
          </div>
        }

        <input value={lname} type="text" placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
          className={`font-semibold w-full border-[1px] focus:border-Blue focus:ring-0 focus:outline-none rounded-md pl-5 py-3 ${validLname ? "" : "border-Red border-2"}`} />
        {
          <div className="relative">
            <div className={`${validLname ? "" : "bg-[url('../../public/icon-error.svg')] bg-contain bg-no-repeat absolute right-5 -top-9 w-6 h-6"}`}></div>
            <p className="text-Red italic text-xs text-end font-medium pb-3 pt-1">{lnameMessage}</p>
          </div>
        }

        <input value={email} type="email" placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          className={`font-semibold w-full border-[1px] focus:border-Blue focus:ring-0 focus:outline-none rounded-md pl-5 py-3 ${validEmail ? "" : "border-Red border-2"}`} />
        {
          <div className="relative">
            <div className={`${validEmail ? "" : "bg-[url('../../public/icon-error.svg')] bg-contain bg-no-repeat absolute right-5 -top-9 w-6 h-6"}`}></div>
            <p className="text-Red italic text-xs text-end font-medium pb-3 pt-1">{emailMessage}</p>
          </div>
        }

        <input value={password} type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className={`font-semibold w-full border-[1px] focus:border-Blue focus:ring-0 focus:outline-none rounded-md pl-5 py-3 ${validPassword ? "" : "border-Red border-2"}`} />
        {
          <div className="relative">
            <div className={`${validPassword ? "" : "bg-[url('../../public/icon-error.svg')] bg-contain bg-no-repeat absolute right-5 -top-9 w-6 h-6"}`}></div>
            <p className="text-Red italic text-xs text-end font-medium pb-3 pt-1">{passwordMessage}</p>
          </div>
        }

        <button
          className="bg-Green uppercase tracking-wide text-white py-3 rounded-md shadow-[0px_4px_0px_0px_rgba(0,0,0,0.15);] shadow-green-600"
          onClick={handleValidation}>
          Claim your free trial
        </button>
      </form>

      <p className="text-[0.65rem] mx-5 text-center text-Grayish-Blue">
        By clicking the button, you are agreeing to our<span className="text-Red font-medium"><br />Terms and Services</span>
      </p>

    </div>
  );
}
