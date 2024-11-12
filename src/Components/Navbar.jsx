import React, { useEffect, useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faMagicWandSparkles, faPlane,  faRightToBracket, faShuffle, faUpload } from '@fortawesome/free-solid-svg-icons'

import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons/faArrowTrendUp';
import { Link } from 'react-router-dom';



function Navbar() {

  function handleMenu() {
    const navDialog = document.getElementById('nav-dialog');


    navDialog.classList.toggle('hidden')
  }

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById('nav-bar');
      if (window.scrollY > 200) { // Adjust '100' to your preferred scroll point
        navBar.classList.add('sticky');
      } else {
        navBar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event  listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency

  return (
    <nav
      id="nav-bar"
      className="px-[62px]  w-[100%] flex bg-[#0C0C0C] justify-between items-center "
    >
      {/* brand section  */}
      <Link to={"/"} id="brand" >
        <img
          className="object-cover max-w-[140px] max-h-14 rounded-lg scale-130 "
          src="src\assets\minimal2.png"
        ></img>
      </Link>

      {/* nav menu  */}

      <div
        id="nav-menu"
        className="  lg:flex lg:gap-5 hidden lg:text-[20px] md:text-[12px]  "
      >
        <Link
          to={"/latest"}
          className=" m-3 p-3 font-medium  text-white flex gap-2 items-center"
        >
          <span>Latest</span>
          <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
        </Link>

        <Link
          to={"/topList"}
          className=" m-3 p-3 font-medium  text-white flex gap-2 items-center"
        >
          <span>TopList</span>
          <FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>
        </Link>

        <Link
          to={"/random"}
          className=" m-3 p-3 font-medium  text-white flex gap-2 items-center"
        >
          <span>Random</span>
          <FontAwesomeIcon icon={faShuffle}></FontAwesomeIcon>
        </Link>

        <Link
          to={"/imageGen"}
          className=" m-3 p-3 font-medium text-white flex gap-2 items-center "
        >
          <span>AI</span>
          <FontAwesomeIcon icon={faMagicWandSparkles}></FontAwesomeIcon>
        </Link>

        <Link
          to={"/upload"}
          className=" m-3 p-3 font-medium  text-white flex gap-2 items-center"
        >
          <span>Upload</span>
          <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
        </Link>
      </div>

      {/* Login button  */}

      <button
        id="login-btn"
        className="text-white hidden  font-medium lg:flex gap-2 items-center bg-[#FF0000] px-6 py-2 rounded-lg "
      >
        <Link to={"/login"}>Login</Link>
        <FontAwesomeIcon
          icon={faRightToBracket}
          className="font-medium "
        ></FontAwesomeIcon>
      </button>

      {/* hamburger responsive icon  section  */}
      <button className="p-2 lg:hidden " onClick={handleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className="text-white text-[25px]"
        ></FontAwesomeIcon>
      </button>

      <div
        id="nav-dialog"
        className=" hidden fixed  z-10 lg:hidden  bg-[#181A1A] inset-0 p-3"
      >
        <div id="nav-bar" className="flex justify-between">
          <a href="#" id="brand">
            <img
              className="object-cover max-w-[120px] max-h-12 "
              src="src\assets\artgen_logo.png"
            ></img>
          </a>

          <button className="p-2 lg:hidden" onClick={handleMenu}>
            <FontAwesomeIcon
              icon={faClose}
              className="text-white text-[25px]"
            ></FontAwesomeIcon>
          </button>
        </div>

        <div id="responsive-menu" className="flex flex-col mt-6 mb-6">
          <a
            href="#"
            className=" m-3 p-3 font-medium  text-white flex gap-2 items-center"
          >
            <span>Latest</span>
            <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
          </a>

          <a
            href="#"
            className=" m-3 p-3 font-medium  text-white flex gap-2 items-center"
          >
            <span>TopList</span>
            <FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>
          </a>

          <a
            href="#"
            className=" m-3 p-3 font-medium  text-white flex gap-2 items-center"
          >
            <span>Random</span>
            <FontAwesomeIcon icon={faShuffle}></FontAwesomeIcon>
          </a>

          <a
            href="#"
            className=" m-3 p-3 font-medium text-white flex gap-2 items-center "
          >
            <span>AI</span>
            <FontAwesomeIcon icon={faMagicWandSparkles}></FontAwesomeIcon>
          </a>

          <a
            href="#"
            className=" m-3 p-3 font-medium  text-white flex gap-2 items-center"
          >
            <span>Upload</span>
            <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
          </a>
        </div>

        {/* <div className='h-[1px] bg-gray-300'></div> */}

        <button
          id="login-btn"
          className="w-full text-white text-[20px] font-medium flex gap-2 justify-center items-center  bg-[#FF0000]  py-3 rounded-lg "
        >
          <span>Login</span>
          <FontAwesomeIcon
            icon={faRightToBracket}
            className="font-medium "
          ></FontAwesomeIcon>
        </button>
      </div>
    </nav>
  );
}

export default Navbar