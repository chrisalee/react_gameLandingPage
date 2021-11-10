import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";
import { Champion, Welcome, ChampionDetails } from "../components/home-section";
import { championsData } from "../assets/dummy.js";

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Champion isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
      {championsData.map((item, index) => (
        <ChampionDetails key={index} item={item} id={index} />
      ))}
    </>
  );
};

export default Home;
