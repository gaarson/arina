const db = require('../db.js');

exports.freshPhotos = (cb) => {
  db.get().query('select * from photos order by id desc limit 9').then(rows => {
    console.log(rows);
    cb(rows);
  });
}

