import React from "react";
import { Link } from "react-router";

const SignIn = () => {
  return (
    <form className="flex flex-col justify-center items-center h-screen delius-font text-[#FE4EDA]">
      <div >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[300px] md:w-[700px] border p-4 text-center">
          <legend className="fieldset-legend text-3xl md:text-5xl font-bold text-[#FE4EDA]">
            Login
          </legend>

          <label className="label">Email</label>
          <input type="email" name="email" className="input input-md md:input-lg  md:w-full mb-5" placeholder="Email" />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input input-md md:input-lg  md:w-full mb-5 "
            placeholder="Password"
          />
        <button className="btn btn-neutral mt-4 text-[#FE4EDA] hover:bg-[#bd4efed7] hover:text-[#eba6dd] transition-all duration-300">Login</button>

        <p className="text-sm mt-4 text-white text-left">Don't have an account? <Link to="/signup" className="text-[#FE4EDA] hover:text-[#eba6dd] transition-all duration-300">Sign up</Link></p>
        </fieldset>
      </div>
    </form>
  );
};

export default SignIn;
