import React from "react";
import map from "../../../../../assets/map.png";
import products from "../../../../../assets/products.png";
import volume from "../../../../../assets/volume.png";

const TopProducts = () => {
  return (
    <div>
      <div className=" flex flex-col xl:grid  xl:grid-cols-[45%_1fr] ">
        <div className="rounded-[20px] drop-shadow-2xl w-full">
          <img src={products} className="w-full" alt="" />
        </div>

        <div className="xl:flex grid lg:flex">
        <div className=" rounded-[20px] drop-shadow-2xl lg:w-1/2">
          <img src={map} className="w-full h-full" alt="" />
        </div>

        <div className=" rounded-[20px] drop-shadow-2xl lg:w-1/2">
          <img src={volume} className="w-full h-full" alt="" />
        </div>
      </div>
        </div>
    </div>
  );
};

export default TopProducts;
