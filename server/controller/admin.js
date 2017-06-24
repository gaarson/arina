const express = require('express'),
      router = express.Router(),
      fs = require('fs'),
      path = require('path'),
      multer = require('multer'),
      Admin = require('../model/admin.js');

router.get('/api/photos', (req, res) => {
  console.log('photos');
  Admin.getPhotos((photos) => {
    res.send(photos);
  })
})

router.post('/api/add_photo', (req, res) => {
  console.log('add photo drisnya');
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(file);
      cb(null, path.join(__dirname, '../../public/img/galery'));
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, file.originalname);
    }
  })

  if(!Object.keys(req.body).length) {
    const uploadMiddleware = multer({storage}).any();
    uploadMiddleware(req, res, err => {
      Admin.addPhoto('/img/galery/' + req.files[0].originalname, false, (id) => {
        console.log('added');
        console.log(id);
        res.send({
          id,
          path: '/img/galery/' + req.files[0].originalname
        });
      })
    });
  } else {
    Admin.addPhoto(false, req.body, (success) => {
      if(success == 'success') 
        Admin.getPhotos((photos) => {
          res.send(photos);
        })
    })
  }
})

router.delete('/api/delete_photo/:id', (req, res) => {
  Admin.deletePhoto(req.params.id, (success) => {
    Admin.getPhotos((photos) => {
      res.send(photos);
    })
  })
})


module.exports = router;
