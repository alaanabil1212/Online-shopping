import React from "react";
import Im1 from "../assets/TopProducts/i1.png";
import Im2 from "../assets/TopProducts/i2.png";
import Im3 from "../assets/TopProducts/i3.png";
// import Im4 from "../assets/TopProducts/i4.png";
import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    id: 1,
    img: Im1,
    title: "Blue Jacket",
  },
  {
    id: 2,
    img: Im2,
    title: "Sweat Shirt",
  },
  {
    id: 3,
    img: Im3,
    title: "Shirt",
  },
];

const TopProducts = () => {
  return (
    <div className="container">
      <div>
        {/* header-section  */}
        <div
          className="text-center mb-30 max-w-[600px]
          mx-auto"
        >
          <p data-aos="fade-up" className="text-md text-primary">
            Top Rated Products This Week
          </p>
          <h1 data-aos="fade-up" className="text-3xl text-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            temporibus eius architecto cum voluptatibus.
          </p>
        </div>
        {/* body-section  */}
        <div
          className="grid grid-cols-1 sm:grid-cols-1
          md:grid-cols-2 xl:grid-cols-3 gap-20 
          md:gap-10 place-items-center"
        >
          {ProductData.map((data) => (
            <div
              className="  rounded-2xl bg-white dark:bg-gray-800 
            hover:bg-black/80
            dark:hover:bg-primary hover:text-white
              relative shadow-xl duration-200 group 
              max-w-[300px] gap-20"
            >
              {/* image section */}
              <div className="h-[200px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[200px] block mx-auto
                  transform-translate-y-20 group-hover:scale-105 duration-300
                  dropshadow-xl"
                />
              </div>
              {/* details section  */}
              <div className="p-5 text-center">

                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
