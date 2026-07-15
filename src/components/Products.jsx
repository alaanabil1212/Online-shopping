import React from "react";
import Img1 from "../assets/Products/1.jpg";
import Img2 from "../assets/Products/2.jpg";
import Img3 from "../assets/Products/3.jpg";
import Img4 from "../assets/Products/4.jpg";
import Img5 from "../assets/Products/5.jpg";
import Img6 from "../assets/Products/6.jpg";
import Img7 from "../assets/Products/7.jpg";
import Img8 from "../assets/Products/8.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "black-hoody",
    rating: 4.8,
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    title: "t-shirt",
    rating: 4.5,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "green-hoody",
    rating: 4.6,
    aosDelay: "300",
  },
  {
    id: 4,
    img: Img4,
    title: "baby pajamas",
    rating: 4.5,
    aosDelay: "400",
  },
  {
    id: 5,
    img: Img5,
    title: "baby pajamas",
    rating: 4.2,
    aosDelay: "500",
  },
  {
    id: 6,
    img: Img6,
    title: "dress",
    rating: 4.3,
    aosDelay: "600",
  },
  {
    id: 7,
    img: Img7,
    title: "t-shirt",
    rating: 4.2,
    aosDelay: "700",
  },
  {
    id: 8,
    img: Img8,
    title: "sweatpants",
    rating: 4.4,
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div
          className="text-center mb-10 max-w-[600px]
          mx-auto"
        >
          <p data-aos="fade-up" className="text-md text-primary">
            Top Selling Products This Week
          </p>
          <h1 data-aos="fade-up" className="text-3xl text-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            temporibus eius architecto cum voluptatibus.
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className="space-y-3"
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-contain rounded-md
                  hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                />
                <div>
                  <h1 className="font-semibold">{data.title}</h1>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1.5">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
