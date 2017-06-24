const express = require('express'),
      router = express.Router();
      Home = require('../model/home.js');

router.get('/home/photos', (req, res) => {
  console.log('gethome');
  Home.freshPhotos((data) => {
    res.send(data);
  })
})

module.exports = router;
