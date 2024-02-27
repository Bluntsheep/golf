"use client";

import GolfbookingsTable from "@/components/GolfbookingsTable";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const date = new Date();
  const today = date.toLocaleDateString().split("/").join("");

  const handleGetBookings = async () => {
    await axios
      .get("/api")
      .then(function (res) {
        console.log(res.data);
        setBookings(res.data);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  useEffect(() => {
    handleGetBookings();
  }, []);

  const history = bookings.filter((e) => e.date < today);

  return (
    <div className=" p-20">
      {/* <Button onClick={handleGetBookings}>Get</Button> */}
      <h1>Bookings Dashboard</h1>

      <GolfbookingsTable currentData={bookings} />
    </div>
  );
};

export default Dashboard;
