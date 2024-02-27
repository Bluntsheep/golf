import Image from "next/image";
import React from "react";

const AccommodationBlocks = ({ lable, bgImage }) => {
  return (
    <div className=" relative container aspect-video mb-3 w-[90%] md:w-[24%] flex items-end">
      <Image fill src={bgImage} alt="golf Image" />
      <div className="bg-black/75 w-[100%] absolute">
        <p className=" text-white p-3 text-base lg:text-lg">{lable}</p>
      </div>
    </div>
  );
};

export default AccommodationBlocks;
