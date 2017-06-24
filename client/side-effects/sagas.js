import { fork } from 'redux-saga/effects';
import {watchFetchFeedback, 
        watchFetchFreshPhotos} from './home.js';
import {watchFetchSendImage,
        watchFetchPhotoData,
        watchFetchGetPhotos,
        watchFetchDeletePhoto} from './admin.js'; 
import {watchFetchPhotos} from './galery.js';

export default function* forks() {
  yield [
    fork(watchFetchFeedback),
    fork(watchFetchFreshPhotos),
    fork(watchFetchSendImage),
    fork(watchFetchPhotoData),
    fork(watchFetchDeletePhoto),
    fork(watchFetchGetPhotos),
    fork(watchFetchPhotos)
  ];
}
