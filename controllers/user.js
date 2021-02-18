const User = require('../models/user');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
          return res.status(400).json({
            error: "User not found"
          })
        }
        req.profile = user
        next()
    })
}

exports.read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

exports.update = (req, res) => {
  User.findOneAndUpdate(
    {_id: req.params.userId},
    {$set: req.body},
    {new: true},
    (err, user) => {
      if(err) {
        return res.status(400).json({
          error: "You are not authorized to perform this action"
        })
      }
      user.hashed_password = undefined
      user.salt = undefined
      res.json(user)
    }
  )
}

exports.list = (req, res) => {
  User.find().exec((err, data) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json(data)
  })
}

exports.remove = (req, res) => {
  try {
    const deleted = User.findOneAndRemove({
      _id: req.params.id,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.status(400).send("User delete failed");
  }
}
