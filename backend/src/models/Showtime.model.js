const mongoose = require("mongoose");

const ShowtimeSchema = new mongoose.Schema(
  {
    startTime: { type: String, required: true },
    startDate: { type: String, required: true },
    MovieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Showtime", ShowtimeSchema);
