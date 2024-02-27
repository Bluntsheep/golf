import AccommodationBloacks from "@/components/accommodationBloacks";
import Image from "next/image";
import React from "react";
import accommodationData from "../data/accommodationBlocksDetails";

const Accommodation = () => {
  return (
    <main className=" pb-5">
      <div className=" container bg-[url('/accommodationBackground.jpeg')] bg-cover w-screen h-[75dvh] flex items-end">
        <div className=" mb-20 ml-3 md:ml-20">
          <h1 className=" text-3xl md:text-5xl font-light text-white mb-9">
            Silwerstrand Self Catering Accommodation
          </h1>
          <p className=" text-xs md:text-base text-white">
            ROBERTSON | WESTERN CAPE | SOUTH AFRICA
          </p>
        </div>
      </div>
      <div className=" flex flex-col container pt-2 px-3 md:px-32 text-sm text-center items-center mb-10">
        <Image
          className=" p-10"
          width={300}
          height={300}
          src={"/logo.png"}
          alt="Silwerstrand Logo"
        />
        <p className=" text-base">
          Please see a list of self catering accommodation in homes on the
          Silwerstrand Golf and River Estate. Please contact the owner / agent
          directly to enquiry or to book accommodation.
        </p>
      </div>
      <div className=" container flex flex-col gap-5 px-5 lg:px-32">
        {accommodationData.map((data, index) => (
          <AccommodationBloacks
            key={index}
            image={data.image}
            alt={data.alt}
            heading={data.heading}
            paragraph={data.paragraph}
            details={data.details}
          />
        ))}
      </div>
    </main>
  );
};

export default Accommodation;
