import React, { useState } from "react";
import "./Categories.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { catData } from "../Data/CatData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";   
import { Link } from "react-router-dom";





function CustomArrow({ onClick, isLeftArrow }) {
  const direction = isLeftArrow ? "left" : "right"; // Determine arrow direction

  return (
    <button
      className={`carousel-arrow absolute top-1/2 -translate-y-1/2 text-black hover:text-red-500 z-10 ${
        direction === "left" ? "left-0" : "right-0"
      }`} // Style and position arrows
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={direction === "left" ? faChevronLeft : faChevronRight}
        size="lg"
      />
    </button>
  );
}

function Categories() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1605 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1604, min: 1208 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 1207, min: 962 },
      items: 4,
    },
    smallmobile: {
      breakpoint: { max: 961, min: 724 },
      items: 3,
    },
    extraSmallmobile: {
      breakpoint: { max: 723, min: 0 },
      items: 2,
    },
  };
  

  return (
    <div className="allContainer flex flex-col justify-center items-center mt-8 p-4 px-[55px]    ">
      <div className="categoryHeader px-3">
        <h1 className="text-[40px] font-semibold font-denk">Categories</h1>
      </div>

      <Carousel
        responsive={responsive}
        className="w-[100%] carousel p-5   " // Add a class name for styling
        customLeftArrow={<CustomArrow isLeftArrow={true} />}
        customRightArrow={<CustomArrow isLeftArrow={false} />}
        
      >
        {catData.map((v, i) => {
          return (
            <div className=" category w-[220px] h-[300px] rounded-[15px] relative ">
              {/* black filter */}
              <div className="absolute top-0 left-0 right-0 rounded-[20px] bg-black h-full w-[100%] bg-opacity-35 p-2 z-15"></div>

              <img
                src={v.url}
                alt=""
                className="w-full  rounded-[20px] h-[300px] object-cover"
              />
              <Link
                to={`/${v.name}`}
                className="absolute top-[40%] left-0 right-0 text-center  text-white  p-2 z-10  font-denk"
              >
                {v.name}
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Categories;
