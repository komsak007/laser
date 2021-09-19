const express = require("express");
var router = express.Router();
var pointlaser = require("../models/point");
var ObjectId = require("mongoose").Types.ObjectId;

router.get("/laser", (req, res) => {
  pointlaser.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      console.log(
        "Error while retrieving all record: " +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get("/laser/:id", async (req, res) => {
  await pointlaser.findOne({ measurement: req.params.id }, (err, docs) => {
    if (!err) {
      // console.log(docs);
      res.json(docs);
    } else {
      res.json({ error: "Product number is not valid" });
    }
  });
});

router.delete("/laser/:id", async (req, res) => {
  await pointlaser.findByIdAndDelete(req.params.id, (err, docs) => {
    if (!err) {
      // console.log(docs);
      res.json(docs);
    } else {
      res.json({ error: "Product number is not valid" });
    }
  });
});

router.post("/laser", (req, res) => {
  var newRecord = new pointlaser({
    measurement: req.body.measurement,
    point: req.body.point,
  });

  newRecord.save((err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(400).json(err);
    }
  });
});

router.put("/laser/:id", (req, res) => {
  // if (!ObjectId.isValid(req.params.id)) {
  //   return res.status(400).send("No record with given ID: " + res.params.id);
  // }

  var updateRecord = {
    point: req.body.point,
  };
  pointlaser.findOneAndUpdate(
    { measurement: req.params.id },
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log(
          "Error while updated record: " + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

module.exports = router;
