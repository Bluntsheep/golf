"use client";
import CustomInputButton from "@/components/CustomInputButton";
import CustomInputButtonWhite from "@/components/CustomInputButtonWhite";
import { CustomSelect } from "@/components/CustomSelect";
import CustomSelectWhite from "@/components/CustomSelectWhite";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  const handleUpdate = () => {
    console.log("123");
  };

  const listDetails = ["Silwerstrand Estate", "Robertson Golf Club"];

  const contactDetails = [
    {
      heading: "Silwerstrand Estate",
      details: [
        "Tel: 023 008 8002",
        "estatemanager@silwerstrand.co.za",
        "hoa@silwerstrand.co.za",
      ],
    },
    {
      heading: "Robertson Golf Club",
      details: [
        "Tel: 023 626 1090",
        "Fax: 086 210 4765",
        "manager@silwerstrand.co.za",
      ],
    },
    {
      heading: "Golf Estate Entrance",
      details: ["Tel: 023 008 8003"],
    },
    {
      heading: "The Village Estate Entrance",
      details: ["Tel: 023 008 8004"],
    },
    {
      heading: "Riverside Entrance",
      details: ["Tel: 023 008 8005"],
    },
    {
      heading: "Day Visitors Area",
      details: ["Amanda | 073 731 9369"],
    },
  ];

  return (
    <main>
      <div className=" pt-32 pb-20 px-32 ">
        <h3 className=" text-secondary/80 text-2xl font-semibold mb-5">
          Silwerstrand Golf & River Estateh
        </h3>
        <h3 className=" text-secondary/80 text-xl font-semibold">
          Get in touch
        </h3>
        <div className=" flex my-5">
          <div className=" flex flex-col gap-3 mr-20">
            {contactDetails.map((details, index) => (
              <div key={index} className=" mb-2">
                <h3 className=" text-secondary/70 text-base font-medium mb-1">
                  {details.heading}
                </h3>
                <ul className=" text-secondary/50 text-sm">
                  {details.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="   border-l-primary/35 pl-16 border-l-2 flex flex-col gap-5">
            <div>
              <h1 className=" text-xs mb-1"> Division </h1>
              <CustomSelectWhite
                name="Division"
                title="Division"
                idName="division"
                values={listDetails}
                onchange={null}
              />
            </div>
            <div>
              <h1 className=" text-xs mb-1"> First Name </h1>
              <CustomInputButtonWhite
                placeholder="Fisrt name"
                name="firstName"
                onClick={null}
              />
            </div>
            <div>
              <h1 className=" text-xs mb-1"> Surname </h1>
              <CustomInputButtonWhite placeholder="Surname" name="surname" />
            </div>
            <div>
              <h1 className=" text-xs mb-1"> Membership Number </h1>
              <CustomInputButtonWhite
                placeholder="Membership Number"
                name="membershipNumber"
                onClick={null}
              />
            </div>
            <div>
              <h1 className=" text-xs mb-1"> Contact Email </h1>
              <CustomInputButtonWhite
                placeholder="Membership Contact Email"
                name="contactEmail"
                onClick={null}
              />
            </div>
            <Button className=" my-5">Submit</Button>
          </div>
        </div>
        <p className=" text-md text-secondary/70 mb-3">
          Silwerstrand Golf and River Estate
          <br />
          Robertson | 6705
        </p>
      </div>
    </main>
  );
};

export default Page;
