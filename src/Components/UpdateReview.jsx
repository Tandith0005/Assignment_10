import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { AuthContext } from "../AuthProvider";

const UpdateReview = () => {
    const {user, loading} = useContext(AuthContext)
  const review = useLoaderData();
  console.log(review);

  const handleUpdateReview = ()=>{

  }

  return (
    <div className="delius-font">
      <Navbar></Navbar>
      <main className="container mx-auto">
        <h1 className="text-center text-4xl font-bold text-[#FE4EDA] mt-10 mb-5">
          Add Review
        </h1>

        <form
          onSubmit={handleUpdateReview}
          className="grid md:grid-cols-2 gri gap-4"
        >
          {/* Game Title */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl font-bold text-[#FE4EDA]">
              Game Title
            </legend>
            <input
              type="text"
              name="name"
              className="input"
              placeholder={review.name}
            />
          </fieldset>

          {/* Review */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl font-bold text-[#FE4EDA]">
              Review
            </legend>
            <textarea
              type="text"
              name="review"
              placeholder={review.review}
              className="textarea textarea-secondary"
            ></textarea>
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
              placeholder={review.rating}
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
              placeholder={review.year}
            />
          </fieldset>

          {/* Genres */}
          <label className="select">
            <span className="label">Genre</span>
            <select name="genre" defaultValue={review.genre}>
              <option disabled value={"Select One"}>
                Select One
              </option>
              <option value={"Action"}>Action</option>
              <option value={"Adventure"}>Adventure</option>
              <option value={"RPG"}>RPG</option>
              <option value={"Simulation"}>Simulation</option>
              <option value={"Strategy"}>Strategy</option>
              <option value={"Sports"}>Sports</option>
              <option value={"Racing"}>Racing</option>
              <option value={"Simulation"}>Simulation</option>
            </select>
          </label>

          {/* Image */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl font-bold text-[#FE4EDA]">
              Image Url
            </legend>
            <input
              type="photo"
              name="photo"
              className="input"
              placeholder={review.photo}
            />
          </fieldset>

          {/* User Email read only */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl font-bold text-[#FE4EDA]">
              Email
            </legend>
            <input
              type="text"
              className="input"
              placeholder= {loading ? 'Loading' : user.email}
              readOnly
            />
          </fieldset>

          {/* User Name read only */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl font-bold text-[#FE4EDA]">
              User Name
            </legend>
            <input
              type="text"
              className="input"
              placeholder={user?.name ? user.name : 'NoNameFound'}
              readOnly
            />
          </fieldset>


          {/* Submit */}
          <button
            type="submit"
            className="btn bg-[#FE4EDA] hover:bg-[#fe4edacc] text-white"
          >
            Submit Review
          </button>
        </form>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default UpdateReview;
