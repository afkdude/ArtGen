import axios from "axios";
import Navbar from "../Components/Navbar";
import { animeData } from "../Data/animeData";
import "./AnimeCartoons.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import SearchComponent from "../Components/SearchComponent";
import ImageDisplay from "./ImageDisplay"; // Import the component
import { Navigate, useNavigate } from "react-router-dom";

function AnimeCartoons() {
  const [images, setImages] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null); // State to store the selected image URL
  const navigate = useNavigate(); // Initialize navigate
  useEffect(() => {
    const apiKey = "24469679-50819eae71863c494ffc07088";
    const query = "anime";
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

  // Function to handle image click
  // Function to handle image click
  const handleImageClick = (url, name, resolution) => {
    navigate("/image-display", {
      state: { imageUrl: url, imageName: name, imageResolution: resolution },
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mainBox w-[100%] ">
        <div className="videoBg relative overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video
            src="src/assets/Videos/Gojo-Cursed-Energy.mp4"
            autoPlay
            loop
            muted
            className="h-[60vh] w-full object-cover aspect-auto rounded-[1px]"
          ></video>
          <SearchComponent
            displayClasses={
              "searchSection absolute z-30 top-[30%] left-[50%] translate-x-[-50%] bg-white w-[700px] p-2 rounded-lg px-2"
            }
          />
        </div>

        <div className="wallpaper-section flex flex-col gap-2 mx-10 mt-5 p-4 px-5 items-center justify-center">
          <div className="animeGalleryHeading">
            <h1 className="text-[40px] font-semibold font-denk text-center">
              Anime Gallery
            </h1>
          </div>

          <div className="imageSection mt-5 mx-10 columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4">
            {images.map((image, index) => (
              <div key={index} className="image-container relative mb-4 ">
                <img
                  src={image.url}
                  alt={`Image from Pixabay ${index + 1}`}
                  className="h-auto max-w-full rounded-lg object-cover cursor-pointer"
                />
                <div
                  className="overlay cursor-pointer absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-end rounded-lg  "
                  onClick={() => handleImageClick(image.url)}
                >
                  <span className="image-name text-white text-sm p-2 absolute bottom-2 left-2">
                    {image.name}
                  </span>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="like-icon absolute top-2 left-3 text-white text-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Display the selected image in ImageDisplay */}
          <ImageDisplay imageUrl={selectedImageUrl} />
        </div>
      </div>
    </div>
  );
}

export default AnimeCartoons;
