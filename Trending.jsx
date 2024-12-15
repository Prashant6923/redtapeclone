import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Trending(){
  const [shoes, setShoes]=useState([]);
  useEffect(() => {
    const getShoes = async () => {
      try {
        const res = await axios.get("http://localhost:4004/shoes");
        const data = res.data.filter((data) => data.category === "Trending");
        setShoes(data);
      } catch (error) {
        console.log(error);
      }
    };
    getShoes();
  }, []);
  



  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Top Trending Shoes</h1>
        <p>
          Stay ahead of the fashion curve with the latest trending shoes,
          combining comfort, style, and innovation. From chunky sneakers
          dominating streetwear to minimalist loafers for a polished look,
          today's footwear trends cater to every style preference.
        </p>
      </div>

      <div>
      <Slider {...settings}>
          {shoes.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Trending;
