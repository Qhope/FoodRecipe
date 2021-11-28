const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const testModel = require("../models/testSchema");

router.get("/save", function (req, res) {
  var newTest = new testModel({
    id: 1,
    name: "hop",
  });

  newTest.save((err, data) => {
    if (err) {
      console.log(error);
    } else {
      res.send("Data inserted");
    }
  });
});
module.exports = router;
