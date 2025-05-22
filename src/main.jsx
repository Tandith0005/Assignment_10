import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import AllReview from "./Components/AllReview.jsx";
import MyReviews from "./Components/MyReviews.jsx";
import GameWatchList from "./Components/GameWatchList.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import AddReview from "./Components/AddReview.jsx";
import AuthProvider from "./AuthProvider.jsx"; // Import the Provider, not the Context
import PrivateRoute from "./Private_Routes/Privateroute.jsx";
import ReviewDetails from "./Layout/ReviewDetails.jsx";
import LearnRatings from "./Layout/LearnRatings.jsx";
import UpdateReview from "./Components/UpdateReview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/allReviews",
    element: (
      <PrivateRoute>
        <AllReview />
      </PrivateRoute>
    ),
  },
  {
    path: "/addReview",
    element: (
      <PrivateRoute>
        <AddReview />
      </PrivateRoute>
    ),
  },
  {
    path: "/reviewDetails/:id",
    element: <ReviewDetails></ReviewDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
  },
  {
    path: "/myReviews/by-email/:email",
    element: (
      <PrivateRoute>
        <MyReviews />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:5000/reviews/by-email/${params.email}`),
  },
  {
    path: "/gameWatchList",
    element: <GameWatchList />,
  },
  {
    path: "/updateReview/:id",
    element: <UpdateReview />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/updateReview/${params.id}`),
  },

  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/learn",
    element: <LearnRatings />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
