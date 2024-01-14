import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className=" fixed w-full top-0 bg-white text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src="https://cdn4.vectorstock.com/i/1000x1000/25/28/creative-black-yacht-boat-logo-design-symbol-vector-25992528.jpg"
            width={60}
            height={50}
          />
          <span className="font-semibold text-red-500">Boat</span>INDIA
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button className="mr-5 hover:text-gray-900 hover:font-semibold ">
            Home
          </button>
          <button className="mr-5 hover:text-gray-900 hover:font-semibold ">
            Products
          </button>
          <button className="mr-5 hover:text-gray-900 hover:font-semibold ">
            Blogs
          </button>
        </nav>
        <button className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
          Sign In
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
