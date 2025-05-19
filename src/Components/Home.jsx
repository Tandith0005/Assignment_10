import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Slider from "../Layout/Slider";
import image1 from "../assets/Slider1.jpg";
import image2 from "../assets/Slider2.jpg";

const Home = () => {
  return (
    <div className="delius-font">
      <nav>
        <Navbar></Navbar>
      </nav>
      <section>
        <Slider></Slider>
      </section>
      <main>
        <h1 className="text-center text-4xl font-bold">
          Highest Rated Games here Home.jsx
        </h1>

        {/* Showcase of Images */}
        <h1 className="text-center text-4xl font-bold text-[#FE4EDA]">Our Showcase</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div>
            <img src={image1} alt="image1" />
          </div>
          <div>
            <img src={image2} alt="image2" />
          </div>
          <div>
            <img src={image1} alt="image1" />
          </div>
          <div>
            <img src={image2} alt="image2" />
          </div>
          <div>
            <img src={image1} alt="image1" />
          </div>
          <div>
            <img src={image2} alt="image2" />
          </div>
        </div>

        {/* Why Using Us? */}
        <div className="my-5">
          <h1 className="text-center text-4xl font-bold my-5 text-[#FE4EDA]">
            Why Choosing Us?
          </h1>
          <p className="text-center text-2xl mt-3">
            <span className="font-bold text-[#FE4EDA]">Informed Decisions</span>
            : We help players decide whether a game is worth their time and
            money
          </p>
          <p className="text-center text-2xl mt-3">
            <span className="font-bold text-[#FE4EDA]">
              Community Engagement
            </span>
            : We foster a sense of belonging and connection among players
          </p>
          <p className="text-center text-2xl mt-3">
            <span className="font-bold text-[#FE4EDA]">
              Game Recommendations
            </span>
            : We provide personalized suggestions based on player preferences
          </p>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
