import { FEEDBACK, HOMEPHOTOS } from '../consts/consts.js';
import { feedback, homePhotos } from '../actions/actions.js';
import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import request from 'superagent';

const sendFeedbackForm = (form) => {
  return new Promise((resolve, reject) => {
    request.post('/api/feedback')
      .send(form)
      .end((err, res) => {
        if(err) reject(err);

        resolve(res.body);
      })
  })
}

const getFreshPhotos = () => {
  return new Promise((resolve, reject) => {
    request.get('/home/photos')
      .end((err, res) => {
        if(err) reject(err);

        resolve(res.body);
      })
  })
}

function* fetchFeedback({ form }) {
  try {
    let success = yield call(sendFeedbackForm, form);
    yield put(feedback.feedbackSuccess(success));
  } catch(error) {
    yield put(feedback.feedbackError(error));
  }
}

function* fetchFreshPhotos() {
  try {
    let photos = yield call(getFreshPhotos);
    yield put(homePhotos.photosSuccess(photos));
  } catch(error) {
    yield put(homePhotos.photosError(error));
  }
}

export function* watchFetchFeedback() {
  yield* takeLatest(FEEDBACK.FEEDBACK_PENDING, fetchFeedback); 
}
export function* watchFetchFreshPhotos() {
  yield* takeLatest(HOMEPHOTOS.HOMEPHOTOS_PENDING, fetchFreshPhotos);
}

