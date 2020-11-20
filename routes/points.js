const express = require('express');
var router = express.Router()
var pointlaser = require('../models/point');
var ObjectId = require('mongoose').Types.ObjectId

router.get('/laser',(req,res)=>{
  pointlaser.find({},(err,docs)=>{
    if (!err) {
      res.json(docs[0]);
    }
    else {
      console.log("Error while retrieving all record: "+ JSON.stringify(err,undefined,2));
    }
  })
})

router.post('/laser',(req,res)=>{
  var newRecord = new pointlaser({
    cursor: req.body.cursor,
    point : req.body.point
  })

  newRecord.save((err,docs)=>{
    if(!err){
      res.json(docs)
    }
    else {
      console.log("Error while new record: "+ JSON.stringify(err,undefined,2));
    }
  })
})

router.put('/laser/:id',(req,res)=>{
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send('No record with given ID: '+ res.params.id)
  }

  var updateRecord = {
    cursor: req.body.cursor,
    point : req.body.point
  }
  pointlaser.findByIdAndUpdate(req.params.id, {$set:updateRecord},{new:true},(err,docs)=>{
    if(!err){
      res.send(docs)
    }
    else {
      console.log("Error while updated record: "+ JSON.stringify(err,undefined,2));
    }
  })
})

module.exports = router
