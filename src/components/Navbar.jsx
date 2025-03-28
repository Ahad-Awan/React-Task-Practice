import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MdAddShoppingCart } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-700 dark:text-blue-500"
      : "text-gray-900 dark:text-white";

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex items-center justify-between p-4 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-10"
            alt="Logo"
          />
          <span className="text-3xl font-semibold dark:text-white hidden lg:block">
            E-Commerce
          </span>
        </Link>

        {/* Desktop & Tablet Nav Links (Hidden only on small screens) */}
        <div className="hidden md:flex space-x-10 text-lg">
          <Link to="/" className={`py-3 ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/about" className={`py-3 ${isActive("/about")}`}>
            About
          </Link>
          <Link to="/contact" className={`py-3 ${isActive("/contact")}`}>
            Contact
          </Link>
        </div>

        {/* Icons & Admin Button */}
        <div className="flex items-center space-x-6">
          <Link to="/Wishlist">
            <BsFillBagHeartFill className="text-gray-700 dark:text-white text-3xl" />
          </Link>
          <Link to="/ViewCart">
            <MdAddShoppingCart className="text-gray-700 dark:text-white text-3xl" />
          </Link>
          <button
            onClick={() => navigate("/adminDashboard")}
            className="hidden md:block bg-blue-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800"
          >
            Admin Dashboard
          </button>
          {/* Mobile Menu Button (Visible only on small screens) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-white text-3xl"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Only on small screens) */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center p-6 space-y-6 text-lg">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={isActive("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={isActive("/about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={isActive("/contact")}
              >
                Contact
              </Link>
            </li>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/adminDashboard");
              }}
              className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              Admin Dashboard
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
