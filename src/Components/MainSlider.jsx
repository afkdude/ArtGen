import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Mainslider.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaSearch, FaSearchengin } from "react-icons/fa";
import axios from "axios";
import SearchComponent from "./SearchComponent";

function MainSlider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiKey = "24469679-50819eae71863c494ffc07088";
    const query = "anime";
    const quantity = 50;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&per_page=${quantity}`;

    const fetchImages = async () => {
      try {
        const response = await axios.get(apiUrl);
        const imageUrls = response.data.hits.map((hit) => hit.largeImageURL);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);
  return (
    <div className="h-[60vh] w-[100vw] bg-[#0C0C0C] p-[50px] pb-[0px] px-[70px] flex flex-col justify-center items-center">
      {/* <div className="search-section w-[650px] bg-white p-1 px-2 rounded-[10px]">
        <form action="" className="flex  justify-between gap-2">
          <input
            type="text"
            placeholder="Search for assets"
            className="basis-[85%] ps-2 outline-none font-semibold"
          />
          <button className="rounded border cursor-pointer p-2   basis-[10%] bg-[red] rounded-[10px]">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </form>
      </div> */}
      <SearchComponent
        displayClasses={
          "search-section w-[650px] bg-white p-1 px-2 rounded-[10px]"
        }
      />

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={3}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          nextEl: ".swiper-button-prev", // Link to custom next button
          prevEl: ".swiper-button-next", // Link to custom prev button
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Anime image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}

      <div className="flex gap-5">
        <div className="swiper-button-next  border rounded-[30px] px-2 py-1  arrows ">
          <FontAwesomeIcon
            icon={faLeftLong}
            className=" text-white hover:text-red-500"
          />
        </div>
        <div className="swiper-button-prev border rounded-[30px] px-2 py-1 arrows">
          <FontAwesomeIcon
            icon={faRightLong}
            className="text-white hover:text-red-500"
          />
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
