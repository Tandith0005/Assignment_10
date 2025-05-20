import React, { useContext } from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
const AddReview = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const handleAddReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;
    const photo = form.photo.value;

    // Validation
    if (!name || !review || !rating || !year || genre === "Select One") {
      alert("Please fill all fields!");
      return;
    }
    if (rating < 1 || rating > 5) {
      alert("Rating must be between 1 and 5");
      return;
    }
    
    
    // send AddReview to DataBase
    const reviewInfo = {name,review,rating,year,genre, email, photo}

    fetch(`http://localhost:5000/reviews`,{
      method:'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(reviewInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("added in Db in reviews",data)
      if (data.insertedId) {
        Swal.fire({
          title: "Review Added Successfully!",
          icon: "success",
          draggable: true
        });
      }
    })
  };

  return (
    <div className="delius-font">
      <Navbar></Navbar>
      <main className="container mx-auto">
        <h1 className="text-center text-4xl font-bold text-[#FE4EDA] mt-10 mb-5">
          Add Review
        </h1>

        <form
          onSubmit={handleAddReview}
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
              placeholder="Game Name"
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
              placeholder="Add Review"
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
            <span className="label">Genre</span>
            <select name="genre" defaultValue={"Select One"}>
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
              placeholder="Image Url"
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
              placeholder={email}
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

export default AddReview;
