const express = require('express');
const router = express.Router();
const User = require('../../models/User');


//@route POST api/users/register
//@desc Register a user
//@access Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: 'Email already exists'
        })
      } else {
        return res.status(200).json ({
          msg: 'Success'
        })
      }
    })
    .catch(err => console.log(err));
  })

module.exports = router;
