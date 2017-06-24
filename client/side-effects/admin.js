import { ADD, SEND_PHOTO, DELETE_PHOTO, GET_PHOTOS } from '../consts/consts.js';
import { add, sendPhoto, deletePhoto, getPhotos } from '../actions/actions.js';
import {takeLatest} from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import request from 'superagent';

const sendImage = (image) => {
  console.log(image);
  const formData = new FormData();
  formData.append('file', image);
  return new Promise((resolve, reject) => {
    request.post('/api/add_photo')
      .send(formData)
      .end((err, res) => {
        if(err) reject(err);

        resolve(res.body);
      })
  })
}

const sendPhotoData = (data) => {
  return new Promise((resolve, reject) => {
    request.post('/api/add_photo')
      .send(data)
      .end((err, res) => {
        if(err) reject(err);

        resolve(res.body)
      })
  })
}

const deletePhotoData = (id) => {
  return new Promise((resolve, reject) => {
    request.delete('/api/delete_photo/' + id)
      .end((err, res) => {
        if(err) reject(err);

        resolve(res.body);
      })
  })
}

const getAdminPhotos = () => {
  return new Promise((resolve, reject) => {
    request.get('/api/photos')
      .end((err, res) => {
        if(err) reject(err);

        resolve(res.body);
      })
  })
}

function* fetchSendImage({photo}) {
  try {
    let success = yield call(sendImage, photo);
    yield put(sendPhoto.sendPhotoSuccess(success));
  } catch(error) {
    yield put(sendPhoto.sendPhotoError(error));
  }
}

function* fetchPhotoData({photoData}) {
  try {
    let success = yield call(sendPhotoData, photoData);
    yield put(add.addPhotoSuccess(success));
  } catch(error) {
    yield put(add.addPhotoError(error));
  }
}

function* fetchDeletePhoto({id}) {
  try {
    let success = yield call(deletePhotoData, id);
    yield put(deletePhoto.deletePhotoSuccess(success));
  } catch(error) {
    yield put(deletePhoto.deletePhotoError(error));
  }
}

function* fetchGetPhotos() {
  try {
    let photos = yield call(getAdminPhotos);
    yield put(getPhotos.getPhotosSuccess(photos));
  } catch(error) {
    yield put(getPhotos.getPhotosError(error));
  }
}

export function* watchFetchSendImage() {
  yield* takeLatest(SEND_PHOTO.SEND_PHOTO_PENDING, fetchSendImage);
}

export function* watchFetchPhotoData() {
  yield* takeLatest(ADD.ADD_PHOTO_PENDING, fetchPhotoData);
}

export function* watchFetchDeletePhoto() {
  yield* takeLatest(DELETE_PHOTO.DELETE_PHOTO_PENDING, fetchDeletePhoto);
}

export function* watchFetchGetPhotos() {
  yield* takeLatest(GET_PHOTOS.ADMIN, fetchGetPhotos);
}

