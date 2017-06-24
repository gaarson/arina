import { GET_PHOTOS } from '../consts/consts.js';
import { getPhotos } from '../actions/actions.js';
import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import request from 'superagent';

const reqPhotos = () => {
  return new Promise((resolve, reject) => {
    request.get('/api/photos')
      .end((err, res) => {
        if(err) reject(err);

        resolve(res.body);
      })
  });
}

function* fetchPhotos() {
  try {
    let photos = yield call(reqPhotos);
    yield put(getPhotos.getPhotosSuccess(photos));
  } catch(error) {
    yield put(getPhotos.getPhotosError(error));
  }
}

export function* watchFetchPhotos() {
  yield* takeLatest(GET_PHOTOS.ADMIN, fetchPhotos);
}

