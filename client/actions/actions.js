import {FEEDBACK, 
        HOMEPHOTOS,
        ADD,
        SEND_PHOTO,
        GET_PHOTOS,
        DELETE_PHOTO} from '../consts/consts.js';

export const feedback = {
  fill: (e) => ({type: FEEDBACK.FILL, e}),
  feedbackPending: (form) => ({type: FEEDBACK.FEEDBACK_PENDING, form}),
  feedbackSuccess: (success) => ({type: FEEDBACK.FEEDBACK_SUCCESS, success}),
  feedbackError: (error) => ({type: FEEDBACK.FEEDBACK_ERROR, error})
};

export const homePhotos = {
  photosPending: () => ({type: HOMEPHOTOS.HOMEPHOTOS_PENDING}),
  photosSuccess: (photos) => ({type: HOMEPHOTOS.HOMEPHOTOS_SUCCESS, photos}),
  photosError: (error) => ({type: HOMEPHOTOS.HOMEPHOTOS_ERROR, error})
}

export const add = {
  addPhotoPending: (photoData) => ({type: ADD.ADD_PHOTO_PENDING, photoData}),
  addPhotoSuccess: (success) => ({type: ADD.ADD_PHOTO_SUCCESS, success}),
  addPhotoError: (error) => ({type: ADD.ADD_PHOTO_ERROR, error}),
  addTextData: (text) => ({type: ADD.ADD_TEXT_DATA, text})
}

export const sendPhoto = {
  sendPhotoPending: (photo) => ({type: SEND_PHOTO.SEND_PHOTO_PENDING, photo}),
  sendPhotoSuccess: (success) => ({type: SEND_PHOTO.SEND_PHOTO_SUCCESS, success}),
  sendPhotoError: (error) => ({type: SEND_PHOTO.SEND_PHOTO_ERROR, error})
}

export const deletePhoto = {
  deletePhotoPending: (id) => ({type: DELETE_PHOTO.DELETE_PHOTO_PENDING, id}),
  deletePhotoSuccess: (success) => ({type: DELETE_PHOTO.DELETE_PHOTO_SUCCESS, success}),
  deletePhotoError: (error) => ({type: DELETE_PHOTO.DELETE_PHOTO_ERROR, error})
}

export const getPhotos = {
  getPhotosAdmin: () => ({type: GET_PHOTOS.ADMIN}),
  getPhotosGalery: () => ({type: GET_PHOTOS.GALERY}),
  getPhotosSuccess: (photos) => ({type: GET_PHOTOS.GET_PHOTOS_SUCESS, photos}),
  getPhotosError: (error) => ({type: GET_PHOTOS.GET_PHOTOS_ERROR, error})
}

