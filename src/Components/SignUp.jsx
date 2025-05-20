import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider";
import Swal from 'sweetalert2'
import { Icon } from '@iconify-icon/react';

const SignUp = () => {
    let navigate = useNavigate();
    const {createUser} = useContext(AuthContext);
    const [passError, setPassError] = useState()
    const [eyeIcon, setEyeIcon] = useState(true)
    const [lowerCase, setLowerCase] = useState('Password Must Contain Atleast 1 lower case letter')
    const [lowerPassIcon, setLowerPassIcon] = useState(<Icon icon="mdi:cross-circle-outline"  width={20}/>)
    const [upperCase, setUpperCase] = useState('Password Must Contain Atleast 1 Upper case letter')
    const [upperCaseIcon, setUpperCaseIcon] = useState(<Icon icon="mdi:cross-circle-outline"  width={20}/>)
    const [atleast6, setAtLeast6] = useState('Password Must Contain Atleast 6 letter')
    const [atleast6Icon, setAtLeast6Icon] = useState(<Icon icon="mdi:cross-circle-outline"  width={20}/>)


    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        // firebase create user
        createUser(email, password)
        .then(result => {
            if (result.user.accessToken) {
                console.log('user created in firebase',result.user);

                // User Info Save to DB
                const userInfo = {username,email,}

                fetch(`http://localhost:5000/users`,{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data=>{
                    console.log('user added to db',data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: "SignUp Successful",
                            icon: "success",
                            draggable: true
                        });
                    }
                })

                setPassError('')
                navigate('/');
            }
        })
        .catch(error => {
            console.log(error.message);
            Swal.fire({
                title: "Failed, If U already have an account, Please Login",
                icon: "error",
                draggable: true
            });
            setPassError('')
        })
    }

    const handleChange = (value)=>{
      const LOWERCASE = /(?=.*[a-z])/;
      const oneUpperCase = /(?=.*[A-Z])/;
      const minimumSix = /([A-Za-z\d]{6,}$)/; 

      // Check lowercase
      if (!LOWERCASE.test(value)) {
        setLowerCase('Password Must Contain Atleast 1 lower case letter')
        setLowerPassIcon(<Icon icon="mdi:cross-circle-outline" className="text-red-500" width={20}/>)
      }
      else{
        setLowerCase('Password Must Contain Atleast 1 lower case letter')
        setLowerPassIcon(<Icon icon="mdi:hand-okay" className="text-green-500" width={20}/>)
      }

      // Check uppercase
      if (!oneUpperCase.test(value)) {
        setUpperCase('Password Must Contain Atleast 1 Upper case letter')
        setUpperCaseIcon(<Icon icon="mdi:cross-circle-outline" className="text-red-500" width={20}/>)
      }
      else{
        setUpperCase('Password Must Contain Atleast 1 Upper case letter')
        setUpperCaseIcon(<Icon icon="mdi:hand-okay" className="text-green-500" width={20}/>)
      }

      // Check Atleast 6 letter
      if (!minimumSix.test(value)) {
        setAtLeast6('Password Must Contain Atleast 6 letter')
        setAtLeast6Icon(<Icon icon="mdi:cross-circle-outline" className="text-red-500" width={20}/>)
      }
      else{
        setAtLeast6('Password Must Contain Atleast 6 letter')
        setAtLeast6Icon(<Icon icon="mdi:hand-okay" className="text-green-500" width={20}/>)
      }
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
          <div className="relative">
            <input
              type={eyeIcon ? "password" : "text"}
              name="password"
              className=" input input-md md:input-lg  md:w-[600px] w-[200px] mr-15 mb-5 "
              placeholder="Password"
              onChange={(e)=>handleChange(e.target.value)}
            />
            <button type="button" onClick={()=>setEyeIcon(!eyeIcon)} className="btn absolute right-0">{eyeIcon ? <Icon icon="mdi:eye"  width={20}/> :<Icon icon="mdi:eye-closed"  width={20}/>}</button>
            <div className="flex items-center text-left text-white gap-2">
              {lowerPassIcon}
              {lowerCase}
            </div>
            <div className="flex items-center text-left text-white gap-2">
              {upperCaseIcon}
              {upperCase}
            </div>
            <div className="flex items-center text-left text-white gap-2">
              {atleast6Icon}
              {atleast6}
            </div>
          </div>
          <button className="btn btn-neutral mt-4 text-[#FE4EDA] hover:bg-[#bd4efed7] hover:text-[#eba6dd] transition-all duration-300">
            Sign Up
          </button>

          {passError && <p className="text-red-500 text-sm mt-2">{passError}</p>}

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
