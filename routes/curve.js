const express = require("express");
var router = express.Router();
var curveLaser = require("../models/curve");
var ObjectId = require("mongoose").Types.ObjectId;

router.get("/curve", (req, res) => {
  curveLaser.find({}, (err, docs) => {
    if (!err) {
      res.json(docs[0]);
    } else {
      console.log(
        "Error while retrieving all record: " +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/curve", (req, res) => {
  var newRecord = new curveLaser({
    curve: req.body.curve,
  });

  newRecord.save((err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      console.log(
        "Error while new record: " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put("/curve/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("No record with given ID: " + res.params.id);
  }

  var updateRecord = {
    curve: req.body.curve,
  };
  curveLaser.findByIdAndUpdate(
    req.params.id,
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
