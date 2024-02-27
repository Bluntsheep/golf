import mongoose from "mongoose";

const Booking = new mongoose.Schema({
  name: String,
  cel: Number,
  email: String,
  date: String,
  bookingTime: String,
  numPlayers: Number,
  holes: Number,
});

module.exports = mongoose.models.Booking || mongoose.model("Booking", Booking);
