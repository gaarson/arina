import React from 'react';

export const PhotoList = ({photos}) => {
  return (
    <section id="thumbnails">
      {
        photos.map((item, i) => {
          return (
            <article key={item.id}>
              <a className="thumbnail" href={item.url} data-position="left center"><img src={item.url} alt="" /></a>
              <h2>{item.name}</h2>
              <p>{item.discription}</p>
            </article>
          )
        })
      }
		</section>
  )
}

