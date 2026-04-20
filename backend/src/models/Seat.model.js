const mongoose = require("mongoose");

const SeatSchema = new mongoose.Schema(
  {
    number: { type: Number, required: true },
    row: { type: String, required: true },
    showtimeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Showtime",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Seat", SeatSchema);
