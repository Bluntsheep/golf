"use client";
import React, { useState } from "react";
import { DatePicker } from "./DatePicker";
import { CustomSelect } from "./CustomSelect";
import bookingTimes, { numberOfPlayers } from "@/app/data/bookingTimes";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "./ui/use-toast";
import { Input } from "./ui/input";
import CustomInputButton from "./CustomInputButton";

const OnlineBooking = () => {
  const [bookingDetails, setBookingdetails] = useState({
    name: "",
    cel: "",
    email: "",
    date: "",
    bookingTime: "",
    numPlayers: "",
    holes: "",
  });

  const updateBookingdetails = (e, idName) => {
    setBookingdetails((prev) => ({ ...prev, [idName]: e }));
  };

  const testButtonName = (e) => {
    setBookingdetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const SelectedDate = bookingDetails.date ? bookingDetails.date : null;

  const showToast = () => {
    toast({
      title: "Success.",
      description: "Booking created.",
    });
  };

  const handleTest = () => {
    console.log("Test");
    axios
      .post("/api", bookingDetails)
      .then(function (res) {
        console.log(res.status);
        // showToast();
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <div id="booking" className=" container bg-primary/25 my-3 p-8">
      <p className=" text-xl text-[#06283D] font-bold mb-5">BOOK ONLINE</p>

      <div className="  md:flex">
        <div className=" container md:w-[500px] text-left">
          <h3 className=" text-base font-semibold">Proshop Contact Details</h3>
          <p className="">Contact Number : 023 626 1090</p>
          <p>Proshop Email : proshop@silwerstrand.co.za</p>
          <div className=" container mt-3">
            <h3 className=" text-base font-semibold">
              Management Contact Details
            </h3>
            <p>
              General Manager -{" "}
              <span>
                <a
                  className=" text-secondary font-bold"
                  href="mailto: abc@example.com">
                  Ludwig Vercuiel
                </a>
              </span>
            </p>
            <p>
              Golf Director -{" "}
              <span>
                <a
                  className=" text-secondary font-bold"
                  href="mailto: abc@example.com">
                  Johan Keyser
                </a>
              </span>
            </p>
            <p>
              Pro Shop & Bookings - <br />
              <span>
                <a
                  className=" text-secondary font-bold"
                  href="mailto: abc@example.com">
                  Conrad Muller
                </a>{" "}
                /{" "}
                <a
                  className=" text-secondary font-bold"
                  href="mailto: abc@example.com">
                  Zurika Brand
                </a>
              </span>
            </p>
            <p>
              Maintenance -{" "}
              <span>
                <a
                  className=" text-secondary font-bold"
                  href="mailto: abc@example.com">
                  Arthur Westraad
                </a>
              </span>
            </p>
            <p>
              Food & Beverage -{" "}
              <span>
                <a
                  className=" text-secondary font-bold"
                  href="mailto: abc@example.com">
                  Nico Drake
                </a>
              </span>
            </p>
          </div>
        </div>

        <div>
          <div className=" flex gap-5 flex-wrap flex-col justify-center mt-10 md:flex-row m-auto">
            <DatePicker idName="date" updateDate={updateBookingdetails} />
            <CustomSelect
              onchange={updateBookingdetails}
              idName="bookingTime"
              name="TEE OFF TIME"
              title="TIME"
              values={bookingTimes}
            />
            <CustomSelect
              onchange={updateBookingdetails}
              idName="numPlayers"
              name="PLAYER"
              title="PLAYERS"
              values={numberOfPlayers}
            />
            <CustomSelect
              onchange={updateBookingdetails}
              idName="holes"
              name="HOLES"
              title="HOLES"
              values={[9, 18]}
            />

            <CustomInputButton
              name="name"
              placeholder="Name"
              onClick={testButtonName}
            />

            <CustomInputButton
              name="cel"
              placeholder="Contact Number"
              onClick={testButtonName}
            />

            <CustomInputButton
              name="email"
              placeholder="Email"
              onClick={testButtonName}
            />
          </div>
          <p className=" m-6">
            <span className={bookingDetails.date ? " visible" : " hidden"}>
              Your Booking is set for {SelectedDate}
            </span>
            <span
              className={bookingDetails.bookingTime ? " visible" : " hidden"}>
              {" "}
              at {bookingDetails.bookingTime}
            </span>
            <span
              className={bookingDetails.numPlayers ? " visible" : " hidden"}>
              {" "}
              with {bookingDetails.numPlayers} players
            </span>
            <span className={bookingDetails.holes ? " visible" : " hidden"}>
              {" "}
              for {bookingDetails.holes} holes
            </span>
          </p>
          <Button
            onClick={handleTest}
            className=" bg-primary text-secondary border-none rounded-[50px] hover:bg-[#d2d7dacd] ">
            BOOK NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnlineBooking;
