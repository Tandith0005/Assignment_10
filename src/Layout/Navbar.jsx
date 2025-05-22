import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {

  const {user, handleLogout, loading} = useContext(AuthContext);


    const links = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/allReviews">All Reviews</NavLink>
    <NavLink to="/addReview">Add Review</NavLink>
    {user && <NavLink to={`/myReviews/by-email/${user.email}`}>My Reviews</NavLink>}
    <NavLink to="/gameWatchList">Game WatchList</NavLink>
    </>
  return (
    <div className="navbar bg-[#8b1ad727] shadow-sm delius-font text-[#FE4EDA]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl ">WarDaddyGames</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 font-bold">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          loading ? <span className="loading loading-spinner text-secondary"></span> : (
            <>
              {user?.email ? <span>{user?.email}</span> : " "}
              {user?.email ? <button className="btn" onClick={handleLogout}>Logout</button> : <Link to="/login" className="btn">Login</Link>}
            </>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
