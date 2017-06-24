import React from 'react';

export const PhotoForm = ({fillForm, uploadImage, addPhoto, path}) => {
  return (
    <section className="download">
      <div className="download-form">
        <div className="download-photo" style={{"background": `url("${path}") no-repeat`}}></div>
        <input
          type="file"
          name="file"
          id="file"
          onChange={uploadImage}
          className="input-file"
          data-multiple-caption="{count} files selected"
          multiple
          />
        <label htmlFor="file"><span>Загрузить фото</span></label>

        <input type="text" id="name" onChange={fillForm} placeholder="Заголовок"/>
        <textarea name="" id="discription" onChange={fillForm} rows="3" placeholder="Описание"></textarea>
        <select name="" id="" onChange={fillForm}>
          <option value="">Категория 1</option>
          <option value="">Категория 2</option>
          <option value="">Категория 3</option>
          <option value="">Категория 4</option>
        </select>
        <div className="download-btn">
          <a className="btn-form" onClick={addPhoto}>Загрузить</a>
        </div>
      </div>
    </section>
  )
}
