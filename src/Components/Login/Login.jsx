import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { Google , update , In } = useContext(AuthContext)
    const handleSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(password,email)
        In(email,password)
        .then(res => {
          console.log('User sign in ', res.user)
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    const handleGoogle = ()=>{
       Google()
       .then(res => {
        console.log('Successfully compelted by google ', res.user)
       })
       .catch(err => {
        console.log(err.message)
       })
    }

  return (
    <div>
      <div className="bg-slate-700 min-h-screen">
        <section className="text-gray-600 body-font ">
          <div className="text-white flex flex-col justify-center pt-10 items-center">
            <img className="w-[100px]" src="/images/logo2.png" alt="" />{" "}
            <span className="text-bold text-2xl">MarriageMasters</span>
          </div>
          <div className="container px-5 pt-10 pb-20 mx-auto  justify-center items-center">
            <form onSubmit={handleSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 mx-auto">
              <h2 className="   font-semibold text-2xl title-font mb-5 text-center">
                Login Your Account
              </h2>
              <hr />
              <div className="relative mt-1 mb-2">
                <label
                  htmlFor="Email"
                  className="leading-10 font-semibold  text-gray-600"
                >
                  Email Address
                </label>
                <input
                  placeholder="Enter your email address"
                  type="email"
                  id="Email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-10 font-semibold  text-gray-600"
                >
                  Password
                </label>
                <input
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-700 text-white hover:text-blue-700 px-10 text-lg py-2 btn"
              >
                Login
              </button>

              <button onClick={handleGoogle} className="  bg-slate-800 text-white hover:text-slate-800 my-2 px-10  py-2 btn">Sign in with Google <img className="w-[20px]" src="/images/google.png" alt="" /></button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                New User ?{" "}
                <Link className="text-blue-700" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
