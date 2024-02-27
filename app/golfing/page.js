import { DatePicker } from "@/components/DatePicker";
import OnlineBooking from "@/components/OnlineBooking";
import { CustomSelect } from "@/components/CustomSelect";
import { Select } from "@radix-ui/react-select";
import Image from "next/image";
import React from "react";

const Golf = () => {
  return (
    <main>
      <div className=" container bg-[url('/robertsonGolf.jpeg')] bg-cover w-screen h-[75dvh] flex items-end">
        <div className=" mb-20 ml-3 md:ml-20">
          <h1 className=" text-3xl md:text-5xl font-light text-white mb-9">
            Silwerstrand Golf Course
          </h1>
          <p className=" text-xs md:text-base text-white">
            ROBERTSON | WESTERN CAPE | SOUTH AFRICA
          </p>
        </div>
      </div>
      <div className=" flex flex-col container pt-2 px-3 md:px-20 text-sm text-center items-center mb-10">
        <Image
          className=" p-10"
          width={300}
          height={300}
          src={"/logo.png"}
          alt="Silwerstrand Logo"
        />
        <p className=" text-base mb-5">
          Welcome to Silwerstrand Golf Course | Robertson | South Africa. Please
          make use of any of the below methods to contact us and/or to make
          bookings.
        </p>
        <OnlineBooking id="booking" />
        <div className=" container bg-primary/25 my-3 p-8">
          <h3 className=" text-2xl font-medium my-3">
            Course, Clubhouse & Members Information
          </h3>
          <p className=" text-base mb-3">
            Surrounded by the rolling Langeberg mountains in the Breede River
            Valley Winelands and bordered by vineyards and orchards, the 18-hole
            Robertson golf course on the Silwerstrand Golf and River Estate is a
            Golf Course worth visiting. It is the only 18-hole golf course in
            the beautiful ‘Valley of Wine and Roses’ and is 1km outside the
            beautiful town of Robertson.
          </p>

          <p className=" text-base mb-3">
            Below you will find information around our Golf Course and
            Clubhouse. There is also a link you can follow to view and book self
            catering accommodation.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Golf;
