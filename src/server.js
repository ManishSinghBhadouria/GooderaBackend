const express = require("express");
var cors = require("cors");

//Database Connection
const connect = require("./configs/db");

const app = express();
app.use(express.json());
app.use(cors());

//controllers
const jobController = require("./controllers/job.controller");

//job Controller
app.use("/jobs", jobController);

app.listen(9000, async function () {
  await connect();
  console.log("Listening on port 9000");
});
