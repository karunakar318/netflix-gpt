import { useState } from "react"
import Header from "./Header"
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div>
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background"/>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-32 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign up":"Sign in"}</h1>
        {isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800"/>}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign up":"Sign in"}</button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">{isSignInForm?"New to Netflix?Sign Up Now":"Already a User?Sign in Now"}</p>
      </form> 
    </div>
  )
}

export default Login