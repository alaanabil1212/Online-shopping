import React from "react";
import Image1 from "../assets/hero1.png";
import Image2 from "../assets/hero2.png";
import Image3 from "../assets/hero3.png";

// import Slider from "react-slick";
import SliderImport from "react-slick";

const Slider = SliderImport.default ?? SliderImport;

const ImageList = [
  {
    id: 1,
    image: Image3,
    title: "Up to 40% off",
    description: "Shop now and save big on our latest collection",
  },
  {
    id: 2,
    image: Image1,
    title: "Family Shopping Day",
    description: "Everything you need for your family, all in one place",
  },
  {
    id: 3,
    image: Image2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!",
  },
];
const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    // -z-9999 relative
    <div
      className=" relative overflow-hidden min-h-[550px]
sm:min-h-[650px] bg-gray-100 z-10
flex justify-center items-center dark:bg-gray-800 dark:text-white duration-200"
    >
      {/* pattern */}
      <div
        className="h-[550px] w-[550px] bg-primary/40
           absolute -top-1/2 right-60 rotate-45 rounded-2xl -z-9
           dark:bg-primary "
      ></div>
      {/* pattern */}
      {/* hero section  */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div
                  className="flex flex-col justify-center
            gap-5 pt-12 sm:pt-0 text-center sm:text-left
            order-2 sm:order-1 relative z-10"
                >
                  <h2
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-3xl sm:text-4xl lg:text-5xl"
                  >
                    {data.title}
                  </h2>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <button
                      className="bg-gradient-to-r
                from-primary to-secondary 
                  hover:scale-105
                  duration-200 text-white py-2 px-4
                  rounded-full mt-4  
    hover:cursor-pointer"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.image}
                      alt=""
                      className="w-[300px] h-[250px]
                sm:w-[400px] sm:h-[350px]  object-contain mx-auto lg:scale"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* hero section  */}
    </div>
  );
};

export default Hero;
