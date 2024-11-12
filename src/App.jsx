
import { Swiper, SwiperSlide } from "swiper/react";
import './App.css'
import MainSlider from './Components/MainSlider'

import Navbar from './Components/Navbar'

import Categories from "./Components/Categories";
import HomeGallery from "./Components/HomeGallery";



function App() {
  return (
    <div className="">
      <Navbar />
      <MainSlider />
      <Categories />
      <HomeGallery/>
      
    </div>
  );
}

export default App
