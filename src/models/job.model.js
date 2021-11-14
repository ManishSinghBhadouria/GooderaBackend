const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    level: { type: String, required: true },
    company: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Job = mongoose.model("job", jobSchema);

module.exports = Job;
