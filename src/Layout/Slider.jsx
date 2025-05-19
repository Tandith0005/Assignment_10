import React from "react";
import slider1 from "../assets/Slider1.jpg";
import slider2 from "../assets/Slider2.jpg";
import slider3 from "../assets/Slider3.jpg";
import { TypeAnimation } from "react-type-animation";

const Slider = () => {
  return (
    <div className="carousel w-full h-[200px] md:h-[400px] delius-font">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full h-[500px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-whit bg-opacity-40">
          <h2 className="text-2xl font-semibold mb-4 text-[#FAE6FA] md:text-4xl md:font-bold">
            Welcome to WarDaddyGames
          </h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Review your favorite games",
              1000,
              "Rate your favorite games",
              1000,
              "Share your favorite games",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-whit bg-opacity-40">
          <h2 className="text-2xl font-semibold mb-4 md:text-4xl md:font-bold text-[#8F00FF]">
            Welcome to Mystic Realms of WarDaddyGames
          </h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Step into the enchanting world of 'Mystic Realms', a visually captivating RPG that immerses players in a rich story full of magic and mystery. Collaborate with friends in real-time battles, harness powerful spells, and uncover the secrets of the ancient civilizations. Are you ready to embrace your true potential as a legendary mage?",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
            className="text-[#FE4EDA]"
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-whit bg-opacity-40">
          <h2 className="text-2xl font-semibold mb-4 md:text-4xl md:font-bold text-[#8F00FF]">
            Welcome to WarDaddyGames
          </h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Join the adventure in 'Epic Quest', where every choice shapes your destiny! Dive into a stunning open world filled with breathtaking landscapes, intriguing characters, and challenging quests. Discover hidden treasures and forge alliances to defeat the darkness threatening the land. Will you rise as the hero or fall into obscurity?",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
