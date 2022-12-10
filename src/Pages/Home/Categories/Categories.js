import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Virtual } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./Categories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://zoho-inventory-server.up.railway.app/categorie")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    easing: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    easing: "linear",
    rtl: true, //this slider will autoplay from left side.

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-5">
      <h2 className="mb-5">Upcoming Items Category</h2>
      <div className=" mb-5 categorie" style={{ marginBottom: "50%" }}>
        <Slider {...settings}>
          {data.slice(0, 10).map((d) => (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="slider">
                <img
                  style={{ width: "250px", height: "250px" }}
                  src={d.img}
                  alt=""
                />
              </div>
              <div>
                <h5 className="d-none d-lg-block d-md-block">Name: {d.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-5 categorie">
        <Slider {...settings1}>
          {data.slice(11, 21).map((d) => (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="slider">
                <img
                  style={{ width: "250px", height: "250px" }}
                  src={d.img}
                  alt=""
                />
              </div>
              <div>
                <h5 className="d-none d-lg-block d-md-block">Name: {d.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
