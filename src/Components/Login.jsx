import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="flex  w-[100vw] h-[100vh]">
      <div
        id="image-portion"
        className=" border-r-4 border-red-400 relative w-[40%] bg-black  h-[100%] grid grid-rows-4 gap-2"
      >
        {/* brand icon */}

        <div className="absolute inset-4 z-20 ">
          <Link to={"/"}>
            <img
              className=" max-w-[120px] max-h-20 "
              src="src\assets\artgen_logo.png"
            ></img>
          </Link>
        </div>

        {/* Black tint overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div relative z-0>
          <img
            src="src/assets/LoginImages/1.jpg"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div relative z-0>
          <img
            src="src/assets/LoginImages/2.jpg"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div relative z-0>
          <img
            src="src/assets/LoginImages/3.jpg"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div relative z-0>
          <img
            src="src/assets/LoginImages/4.jpg"
            className="w-full h-full object-cover"
          ></img>
        </div>
      </div>

      {/* login section */}

      <div
        id="login-portion"
        className="w-[60%]  flex flex-col justify-center items-center  "
      >
        <div className="signUpBtn absolute  top-2 right-2 ">
          <button className="hover:bg-red-700 transition-colors  bg-[#FF0000] font-denk px-3 py-2 rounded-lg text-[22px] tracking-wider text-white">
            SignUp
          </button>
        </div>

        <div className=" bg-[#181A1A] border rounded-xl px-8 py-8   w-[450px] flex flex-col  justify-center ">
          <div id="heading " className=" border-b flex justify-center pb-3">
            <h1 className="text-white font-bold text-[40px]  font-denk ">
              Welcome
            </h1>
          </div>

          <form className="flex flex-col gap-5 mt-5 w-[100%] ">
            <div className="relative">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute text-[20px] left-[12px] top-[28px] "
              />

              <input
                type="text"
                placeholder="Enter Username"
                className=" w-[100%] h-[45px] rounded-lg ps-10 mt-4 outline-none "
              />
            </div>

            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute text-[20px] left-[12px] top-[28px] "
              />

              <input
                type="password"
                placeholder="Enter Password"
                className=" w-[100%] h-[45px] rounded-lg ps-10 mt-4 outline-none   "
              />
            </div>

            <div className="flex justify-end ">
              <a className="text-white text-right font-semibold">
                Forgot Password?
              </a>
            </div>

            <div>
              <button className="hover:bg-red-700 transition-colors w-[100%] bg-[#FF0000] font-denk py-2 rounded-lg text-[25px] text-white">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login