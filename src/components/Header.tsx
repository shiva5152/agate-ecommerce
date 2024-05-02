"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";

const Header = () => {
  const [Scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.pageYOffset < 30 ? false : true);
      return () => (window.onscroll = null);
    };
  }, [Scrolled]);

  const [user, setUser] = useState(true);
  const handleLogout = () => {};

  return (
    <div
      className={`navbar ${
        Scrolled ? "bg-white/95  " : "bg-transparent"
      }  fixed text-white top-0 left-0 z-50`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-active text-white btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-gray-50 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Homepage</Link>
            </li>
            <li>
              <Link href={"/"}>Shop</Link>
            </li>
            <li>
              <Link href={"/order/view-orders"}>My Orders</Link>
            </li>
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          {user ? (
            <div className="flex items-center justify-center  min-h-full">
              <button onClick={handleLogout} className="btn text-white mx-2">
                logout
              </button>
              <Link href={"/cart"} className="btn btn-circle  mx-2">
                <FaCartArrowDown className="text-white text-xl" />
              </Link>
              <Link href={"/wishlist"} className="btn btn-circle  mx-2">
                <MdFavorite className="text-white text-xl" />
              </Link>
              <Link
                href={"/order/view-orders"}
                className="btn btn-circle  mx-2"
              >
                <CiDeliveryTruck className="text-white text-xl" />
              </Link>
            </div>
          ) : (
            <Link href={"/auth/login"} className="btn text-white mx-2">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;