import React from "react";

import Image from "next/image";
import Link from "next/link";

const AppBar = () => {
  const menuItems = [
    { name: "HOME", location: "" },
    { name: "GOLFING", location: "golfing" },
    { name: "ACCOMMODATION", location: "accommodation" },
    // { name: "GALLERY", location: "gallery" },
    { name: "CONTACT", location: "contact" },
    { name: "LOGIN", location: "login" },
    { name: "DASH", location: "dashboard" },
  ];

  return (
    <div className=" container w-screen bg-black/40 h-16 px-5  md:px-20 flex items-center fixed ">
      <div>
        <Image
          height={70}
          width={70}
          src={"/Logo.svg"}
          alt="SilverStrand logo"
        />
      </div>
      <div className=" flex grow " />
      <div className=" hidden md:flex">
        {menuItems.map((menuItems) => (
          <div className=" ml-5" key={menuItems.name}>
            <Link
              href={`/${menuItems.location}`}
              className=" text-white hover:text-[#036774] text-sm cursor-pointer">
              {menuItems.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
