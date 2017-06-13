const express = require('express'),
      router = express.Router(),
      fs = require('fs'),
      path = require('path'),
      multer = require('multer');
      //admin = require('../model/admin.js');

router.post('/api/add_photo', (req, res) => {
  console.log('add photo drisnya');
})

module.exports = router;
