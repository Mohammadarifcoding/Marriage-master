import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";
import { AuthContext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  
    const { creatUser , OUT  , update , In , Google} = useContext(AuthContext)
    const navigate = useNavigate()
    const lo = useLocation()
const handleSubmit = e =>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const photo = e.target.photo.value
    const password = e.target.password.value

    if(password.length < 6){
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The password need to contain 6 character',
      })
        return
    }
    else if(!/[A-Z]/.test(password)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The password need to contain Capital letter',
      })
      return
    }
    else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The password need to contain special character',
      })
      return
 }
    creatUser(email,password)
    .then( res => {
      console.log('User created',res.user)

        Swal.fire(
          'Good job!',
          `${name } are signed in successfully`,
          'success'  )
       
        update(name,photo)
        .then()
        .catch()
        { lo.state ? navigate(lo.state) : navigate('/') }
        location.reload()
       { lo.state ? navigate(lo.state) : navigate('/') }
       
      
    })
    .catch(err => {
      console.log(err.message)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again',
      })
    })
    



}


const handleGoogle = ()=>{
  Google()
  .then(res => {
    Swal.fire(
      'Good job!',
      `user are signed in successfully`,
      'success'  )
   console.log('Successfully compelted by google ', res.user)
   { lo.state ? navigate(lo.state) : navigate('/') }
  })
  .catch(err => {
   console.log(err.message)
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong! Please try again',
  })
  })
}

  return (
    <div>
      <div className="bg-slate-700 min-h-screen" >
        <section className="text-gray-600 body-font pb-10 ">
          <div data-aos="flip-left" className="container px-5 pt-1 mx-auto  justify-center items-center">
            <form onSubmit={handleSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-6 flex flex-col w-full mt-10 mx-auto">
              <h2 className=" font-semibold text-2xl title-font mb-3 text-center">
                Register Your Account
              </h2>
              <hr />
              <div className="relative mt-1 mb-2">
                <label
                  htmlFor="Name"
                  className="leading-10 font-semibold  text-gray-600"
                >
                  Your Name
                </label>
                <input
                  placeholder="Enter your name"
                  type="text"
                  id="Name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mt-1 mb-2">
                <label
                  htmlFor="photo"
                  className="leading-10 font-semibold  text-gray-600"
                >
                  Your Photo
                </label>
                <input
                  placeholder="Enter your Photo URL"
                  type="text"
                  id="photo"
                  name="photo"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
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
                Register
              </button>
              <button type="button" onClick={handleGoogle} className="bg-slate-800 btn text-white hover:text-slate-800 my-2 px-10 flex py-4  "> <span>Create Account  </span><img className="w-[20px]" src="/images/google.png" alt="" /></button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Already User ?
                <Link className="text-blue-700" to="/login">
                  login
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

export default Register;
