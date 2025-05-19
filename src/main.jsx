import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import AllReview from './Components/AllReview.jsx';
import MyReviews from './Components/MyReviews.jsx';
import GameWatchList from './Components/GameWatchList.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AddReview from './Components/AddReview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/allReviews",
    element: <AllReview />
  },
  {
    path: "/addReview",
    element: <AddReview />
  },
  {
    path: "/myReviews",
    element: <MyReviews />
  },
  {
    path: "/gameWatchList",
    element: <GameWatchList />
  },
  {
    path: "/login",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
