const express = require("express");
const router = express.Router();
const Job = require("../models/job.model");

//CRUD Operations For User
//post
router.post("/", async (req, res) => {
  const job = await Job.create(req.body);

  return res.status(201).json({ job });
});

//get
router.get("/", async (req, res) => {
  const job = await Job.find().lean().exec();

  return res.status(200).json({ job });
});

//get one
router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id).lean().exec();

  return res.status(200).json({ job });
});

//patch
router.patch("/:id", async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(201).json({ job });
});

//delete single user
router.delete("/:id", async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  return res.status(200).json({ job });
});

module.exports = router;
