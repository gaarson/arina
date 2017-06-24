import React from 'react';
import {Link} from 'react-router-dom';

export const PhotoBlock = ({photos}) => {
  return (
    <section id="three" className="work">
      <div className="work-content">
        <h2 className="work-title">Мои работы.</h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio earum a sunt recusandae tempore voluptate, iure sint, incidunt magnam sit, eligendi neque culpa quo, molestias aliquam dolore. Assumenda, blanditiis! Omnis!
        </p>
        <div id="thumbnails" className="work-gallery">
          {
            photos.map(item => {
              return (
                <article key={item.id} className="work-gallery--itm">
                  <a className="thumbnail" href="/galery">
                    <img src={item.url} alt="" />
                  </a>
                  <h2>Diam tempus accumsan</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </article>
              )
            })
          }
        </div>
        <Link to="/galery"><p className="btn-form">Все работы</p></Link>
      </div>
    </section>
  )
}

