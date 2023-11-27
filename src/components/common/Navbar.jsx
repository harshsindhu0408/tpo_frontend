import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../actions/authActions";

const Navbar = () => {
  const Links = [
    { id: 1, name: "Profile", link: "/profile" },
    { id: 2, name: "Create NOC", link: "/create-noc" },
    { id: 3, name: "Download NOC", link: "/download-noc" },
    { id: 4, name: "About Us", link: "/about" },
  ];

  const navigate = useNavigate();
  const logoutHandler = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="w-full z-10 relative bg-black h-20 flex items-center justify-center shadow-2xl">
      <div className="w-11/12 flex flex-row items-center justify-between">
        {/* Left side */}
        <Link to={"/"}>
          <div className="text-xl font-bold font-Roborto text-white">
            NOCGenius
          </div>
        </Link>

        {/* Mid div with links */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-14">
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="text-white font-bold font-Roborto hover:text-blue-500 duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Login and logout button */}
        <div>
          {isAuthenticated() ? (
            <button
              className="bg-blue-500 hover:bg-blue-600 hover:scale-95 block font-bold text-white shadow-sm rounded-sm px-4 py-2 duration-300 w-24"
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 hover:scale-95 block font-bold text-white shadow-sm rounded-sm px-4 py-2 duration-300 w-24"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
