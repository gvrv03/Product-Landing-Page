import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex p-5 md:p-0 md:flex-row flex-col  container m-auto justify-between mt-32">
      <div className=" w-full md:w-[50%]  h-[50vh] items-center flex relative  ">
        <div className="p-2 rounded-md font-semibold  absolute top-5 left-5 flex items-center  gap-2 bg-gray-50 ">
          <i className="uil uil-star text-yellow-300"></i>
          <span>5.0</span> <span className="font-light">| 1 review</span>
        </div>
        <Image
          src="https://www.boat-lifestyle.com/cdn/shop/products/Nirvana551ANCPackaging1.3_700x.png?v=1681413243"
          width={500}
          height={500}
        />
      </div>
      <div className=" w-full md:w-[50%]">
        <div>
          <h1 className="font-bold text-5xl">Boat Rockerz 551ANC</h1>
          <p className="font-light mt-5">
            Noise Cancelling Wireless Headphone, Upto 100 Hours Playback, 40mm
            Driver, ENx™ Technology, Custom-tuned EQ Mode
          </p>
        </div>

        <div className="mt-5">
          <p className="font-semibold text-xl">₹3,299</p>
          <strike className="font-light">₹37,990</strike>{" "}
          <span className="text-gray-400 ml-5">59% off</span>
        </div>

        <div>
          <p className="mt-5 font-semibold">
            Choose your color :{" "}
            <span className="font-light">stellar black</span>{" "}
          </p>
          <div className="flex gap-2 mt-2">
            <div className="w-10 h-10   bg-gray-900 border-2 border-gray-600 rounded-full"></div>
            <div className="w-10 h-10 bg-red-900 rounded-full"></div>
          </div>

          <div className="mt-5">
            <span className="font-semibold text-red-700 ">
              Free Delivery{" "}
              <span className="text-black ">| By Sataurday, 20 Jan</span>{" "}
            </span>
          </div>
        </div>

        <div>
          <button className="  hover:bg-emerald-700 mt-10 bg-red-500 text-white  p-5 px-20 rounded-full ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
