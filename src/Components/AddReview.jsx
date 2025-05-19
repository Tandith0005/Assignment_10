import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
const AddReview = () => {
  return (
    <div className="delius-font">
      <Navbar></Navbar>
      <main className="container mx-auto">
        <h1 className="text-center text-4xl font-bold text-[#FE4EDA] mt-10 mb-5">
          Add Review
        </h1>

        <form className="grid md:grid-cols-2 gri gap-4">
          {/* Game Title */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl font-bold text-[#FE4EDA]">
              Game Title
            </legend>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Game Name"
            />
          </fieldset>

          {/* Review */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl font-bold text-[#FE4EDA]">
              Review
            </legend>
            <textarea name="review" className="input" placeholder="Review" />
          </fieldset>

          {/* Rating */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl font-bold text-[#FE4EDA]">
              Rating
            </legend>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              className="input"
              placeholder="Rate out of 5"
            />
          </fieldset>

          {/* Publishing year */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl font-bold text-[#FE4EDA]">
              Publishing year
            </legend>
            <input
              type="number"
              name="year"
              className="input"
              min="2000"
              max="2025"
              placeholder="Publishing year"
            />
          </fieldset>

          {/* Genres */}
          <label className="select">
          <span className="label">Type</span>
            <select>
              <option>Action</option>
              <option>Adventure</option>
              <option>RPG</option>
              <option>Simulation</option>
              <option>Strategy</option>
              <option>Sports</option>
              <option>Racing</option>
              <option>Simulation</option>
            </select>
          </label>

          {/* Submit */}
        </form>
          <button 
              type="submit" 
              className="btn bg-[#FE4EDA] hover:bg-[#fe4edacc] text-white">
              Submit Review
            </button>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default AddReview;
