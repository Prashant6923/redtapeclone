import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Shoes() {
  const [shoes, setshoes] = useState([]);
  useEffect(() => {
    const getshoes = async () => {
      try {
        const res = await axios.get("http://localhost:4004/shoes");
        console.log(res.data);
        setshoes(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getshoes();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
          Step Into Style and Comfort with RedTape shoes{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Discover the perfect blend of  <span className="text-pink-500"> premium craftsmanship, on-trend designs, </span>   and <span className="text-pink-500"> unmatched comfort </span> with RedTape shoes. Whether you're heading to a formal meeting, enjoying a casual outing, or breaking a sweat at the gym, RedTape offers a wide range of footwear tailored to elevate your every step.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {shoes.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Shoes;
