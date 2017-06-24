import {FEEDBACK,
        HOMEPHOTOS,
        ADD,
        GET_PHOTOS,
        DELETE_PHOTO,
        SEND_PHOTO} from '../consts/consts.js';

export const home = (
  state = {
    photos: [],
    feedback: {
      email: '',
      name: '',
      text: ''
    }
  }, action) => {
  switch(action.type) {
    case FEEDBACK: 
      console.log(action);
    case HOMEPHOTOS.HOMEPHOTOS_SUCCESS: 
      console.log(action);
      return Object.assign({}, state, {photos: action.photos})
    default: return state;
  }
}

export const galery = (state = [], action) => {
  switch(action.type) {
    case GET_PHOTOS.GET_PHOTOS_SUCESS: 
      return action.photos;
    default: return state;
  }
}

export const admin = (
  state = {
    photos: [],
    photoForm: {},
    error: ''
  }, action) => {
  switch(action.type) {
    case GET_PHOTOS.GET_PHOTOS_SUCESS: 
      return Object.assign({}, state, {photos: action.photos})

    case SEND_PHOTO.SEND_PHOTO_SUCCESS: 
      console.log(action);
      return Object.assign({}, state, 
        state.photoForm.id = action.success.id,
        state.photoForm.path = action.success.path
      );
      
    case SEND_PHOTO.SEND_PHOTO_ERROR:
      console.log(action);
      return state;

    case ADD.ADD_PHOTO_ERROR: 
      console.log(action);
      return state;

    case ADD.ADD_PHOTO_SUCCESS: 
      console.log('work', action);
      return Object.assign({}, state, {photos: action.success})

    case ADD.ADD_TEXT_DATA: 
      let data = state.photoForm;
      data[action.text.id] = action.text.value;
      console.log(data);
      return Object.assign({}, state, state.photoForm = data)

    case DELETE_PHOTO.DELETE_PHOTO_SUCCESS:
      return Object.assign({}, state, {photos: action.success})

    default: return state;
  }
}
