import React from "react";
import { Link } from "react-router";

const SignUp = () => {

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(username, email, password);
    }

  return (
    <form onSubmit={handleSignUp} className="flex flex-col justify-center items-center h-screen delius-font text-[#FE4EDA]">
      <div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[300px] md:w-[700px] border p-4 text-center">
          <legend className="fieldset-legend text-3xl md:text-5xl font-bold text-[#FE4EDA]">
            Sign Up
          </legend>

          <label className="label">Username</label>
          <input
            type="text"
            name="username"
            className="input input-md md:input-lg  md:w-full mb-5"
            placeholder="Username"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-md md:input-lg  md:w-full mb-5"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input input-md md:input-lg  md:w-full mb-5 "
            placeholder="Password"
          />
          <button className="btn btn-neutral mt-4 text-[#FE4EDA] hover:bg-[#bd4efed7] hover:text-[#eba6dd] transition-all duration-300">
            Sign Up
          </button>

          <p className="text-sm mt-4 text-white text-left">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#FE4EDA] hover:text-[#eba6dd] transition-all duration-300"
            >
              Login
            </Link>
          </p>
        </fieldset>
      </div>
    </form>
  );
};

export default SignUp;
