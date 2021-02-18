const express = require('express');
const router = express.Router()

const {requireSignin, isAuth, isAdmin} = require('../controllers/auth');

const {userById, read, readOne, update, list, remove} = require('../controllers/user');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
})
router.get('/user/list', list)
router.get('/user/:userId', read)
// router.get('/user/read/:id', readOne)
router.put('/user/:userId', update)
router.delete('/user/:id', remove)

router.param('userId', userById)

module.exports = router
