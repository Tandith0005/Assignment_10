import React from "react";
import { Link, useLoaderData } from "react-router";
import { Icon } from "@iconify-icon/react";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const data = useLoaderData();

  const handleWatchList = () => {
    fetch(`http://localhost:5000/watchListCollection`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('added to DB',data);
        Swal.fire({
          title: "Added to your watchListCollection!!!",
          icon: "success",
          draggable: true
        });
      });
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
        {data.name}
      </h1>

      <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
        <figure className="relative h-64">
          <img
            src={
              data.photo || "https://via.placeholder.com/800x400?text=No+Image"
            }
            alt={data.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex justify-between items-end">
              <span className="text-white text-sm font-medium bg-purple-600 px-3 py-1 rounded-full">
                {data.genre}
              </span>
              <span className="text-white text-lg font-semibold">
                {data.year}
              </span>
            </div>
          </div>
        </figure>

        <div className="card-body p-6">
          <div className="flex items-center mb-4">
            <div className="rating rating-md">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name="rating"
                  className={`mask mask-star-2 ${
                    star <= data.rating ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                  checked={star === parseInt(data.rating)}
                  readOnly
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">{data.rating}/5</span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Review:
            </h3>
            <p className="text-gray-700 italic">"{data.review}"</p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500">Review ID: {data._id}</p>
            <p className="text-sm text-gray-500">Submitted by: {data.email}</p>
          </div>

          <div className="card-actions justify-end mt-6">
            <Icon
            onClick={handleWatchList}
              icon="mdi:bookmark-outline"
              className="text-black pointer-events-auto"
              width={30}
              style={{cursor:'pointer'}}
            />
            {/* <Icon icon="mdi:bookmark" className="text-black" width={30}/> */}
            <Link to={-1}>
              <button className="btn btn-outline bg-gradient-to-r from-[#FE4EDA] to-[#6A5ACD]">
                Back to List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
