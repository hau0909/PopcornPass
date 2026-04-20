const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    director: { type: String, required: true },
    duration: { type: String, required: true },
    actor: { type: [String], required: true },
    trailerUrl: { type: String, required: true },
    type: {
      type: String,
      enum: ["Action", "Adventure", "Comedy", "Drama", "Horror"],
      default: "Action",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Movie", MovieSchema);
