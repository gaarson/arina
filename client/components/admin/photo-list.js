import React from 'react'; 

export const PhotoList = ({photos, deletePhoto}) => {
  return (
    <aside className="catalog catalog-js">
      <div className="close close-js">
        <i className="fa fa-times close-icon" aria-hidden="true"></i>
      </div>
      <div className="catalog-content">
        <ul>
          {
            photos.map(item => {
              return (
                <li key={item.id}>
                  <a>{item.name}</a>
                  <a 
                    className="delete-photo"   
                    onClick={() => deletePhoto(item.id)}>&times;</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </aside>
  )
}

