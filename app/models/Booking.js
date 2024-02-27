const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  cel: Number,
  email: String,
  date: String,
  bookingTime: String,
  numPlayers: Number,
  holes: Number,
});

module.exports =
  mongoose.models.Booking ?? mongoose.model("Booking", BookingSchema);
