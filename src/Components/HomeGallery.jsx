import React, { useEffect, useState } from "react";
import { animeData } from "../Data/animeData";
import "./HomeGallery.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function HomeGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiKey = "24469679-50819eae71863c494ffc07088";
    const query = "travel";
    const quantity = 150;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&per_page=${quantity}`;

    const fetchImages = async () => {
      try {
        const response = await axios.get(apiUrl);
        const imageUrls = response.data.hits.map((hit) => ({
          url: hit.largeImageURL,
          name: hit.tags.split(", ")[0], // Use the first tag as the name
        }));
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="allContainer flex flex-col justify-center items-center mt-8 p-4 px-5 mx-10">
      <div className="galleryHeading mb-5">
        <h1 className="text-[40px] font-semibold font-denk text-center">
          Home Gallery
        </h1>
      </div>

      <div className="galleryGrid mt-5 gap-4 columns-1 sm:columns-2 md:columns-3 lg:columns-5">
        {images.map((image, index) => (
          <div key={index} className="image-container relative mb-4 rounded-lg">
            <img
              src={image.url}
              alt=""
              className="galleryImages h-auto max-w-full rounded-lg object-cover"
            />
            <div className="overlay  absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <span className="image-name text-white text-sm p-2 absolute bottom-2 left-2">
                {image.name}
              </span>
              <FontAwesomeIcon
                icon={faHeart}
                className="like-icon absolute top-2 left-2 text-white text-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeGallery;
