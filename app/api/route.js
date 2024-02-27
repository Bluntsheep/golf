import React from "react";
import mongoose from "mongoose";
import Booking from "../models/Booking";
import { NextRequest, NextResponse } from "next/server";
const password = process.env.MONGO_PASSWORD;

const mongoDBURI = `mongodb+srv://bluntsheep:${password}@cluster0.wpaywep.mongodb.net/robertsongolf`;

export async function POST(req, res) {
  let client;

  try {
    client = await mongoose.connect(mongoDBURI);
    console.log("Connection Established");
    // return new Response("OK");
  } catch (error) {
    console.log("Couldnt Connect", error);
  }

  const data = await req.json();

  if (!data) {
    NextRequest.json({ message: "invalid Input" }, { status: 422 });
    return;
  }

  const newData = {
    ...data,
  };
  console.log("Saving Data");
  try {
    await Booking.create(newData);
    console.log("Saving Data....");
    return NextResponse.json({ message: "Booking Created" }, { status: 201 });
  } catch (error) {
    console.log("Booking failed...", error);
    return NextResponse.json({ message: "Booking Error" }, { status: 500 });
  }
}

export async function GET(req, res) {
  let client;

  try {
    client = await mongoose.connect(mongoDBURI);
    console.log("Connection Established");
    // return new Response("OK");
  } catch (error) {
    console.log("Couldnt Connect", error);
  }

  const details = await Booking.find();

  return NextResponse.json(details, { status: 200 });
}
