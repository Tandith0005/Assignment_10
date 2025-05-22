import React, { useEffect, useState } from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import ReviewDetails from "../Layout/ReviewDetails";
import { Link } from "react-router";

const AllReview = () => {
  const [allReview, setAllReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setAllReview(data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <div className="delius-font container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#FE4EDA] text-center mb-2">All Reviews</h1>
      <p className="text-center text-gray-600 mb-8">Discover what others are saying</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array.isArray(allReview) && allReview.length > 0 ? (
          allReview.map((review) => (
            <div key={review._id} className="card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <figure className="relative h-48 overflow-hidden">
                <img
                  src={review.photo || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                  alt={review.name || "Reviewer"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h2 className="text-xl font-bold text-white">{review.name}</h2>
                </div>
              </figure>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {review.genre || "Unknown Genre"}
                  </span>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">
                      {review.rating || "N/A"}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {review.review || "No review text provided."}
                </p>
                
                <Link to={`/reviewDetails/${review._id}`}>
                    <button className="btn border-none w-full py-2 px-4 bg-gradient-to-r from-[#FE4EDA] to-[#6A5ACD] text-white rounded-lg hover:opacity-90 transition-opacity">
                    Explore Details
                    </button>
                </Link>
                
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No reviews found</p>
          </div>
        )}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default AllReview;