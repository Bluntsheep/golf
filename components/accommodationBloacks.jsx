import Image from "next/image";
import React from "react";

const AccommodationBloacks = ({ image, alt, heading, paragraph, details }) => {
  return (
    <div className=" container flex flex-col lg:flex-row gap-10 bg-primary/25 p-5">
      <div className=" relative h-[180px]  max-w-[300px] aspect-video bg-red-500 overflow-hidden">
        <Image
          // sizes="100vw"
          className=" object-cover"
          src={image}
          alt={alt}
          sizes="100vw"
          fill
        />
      </div>
      <div className=" lg:w-[45%]">
        <h5 className=" text-sm font-bold mb-2">{heading}</h5>
        <p className=" text-sm">{paragraph}</p>
      </div>
      <div className=" min-w-[250px]">
        <p className=" text-sm font-bold mb-2">Details:</p>
        <ul className=" text-sm">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccommodationBloacks;
