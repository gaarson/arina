const db = require('./../db.js');

exports.addPhoto = (path, data, cb) => {
  if(!data)
    db.get().query(`insert into photos (url) values ('${path}')`).then((rows => {
      console.log(rows);
      return cb(rows.insertId);
    }))
  else 
    db.get().query(`update photos set name='${data.name}', discription='${data.discription}' where id=${data.id}`).then((rows) => {
      console.log(rows);
      cb('success');
    })
}

exports.getPhotos = (cb) => {
  db.get().query('select * from photos').then(rows => {
    return cb(rows);
  })
}

exports.deletePhoto = (id, cb) => {
  db.get().query(`DELETE FROM photos WHERE photos.id = ${id}`).then(rows => {
    console.log(rows);
    return cb('success');
  }) 
}

