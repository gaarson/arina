import React from 'react';

export const Section = ({photos}) => 
  <div>
  {console.log(photos)}
  <section 
      className="intro" 
      style={{"background": `url(${photos.length && photos[0].url})`}}>

		<div className="welcome">
			<h2 className="welcome-title">Привет.</h2>
			<p className="welcome-content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio earum a sunt recusandae tempore voluptate, iure sint, incidunt magnam sit, eligendi neque culpa quo, molestias aliquam dolore. Assumenda, blanditiis! Omnis!
			</p>
			<a href="#one" className="btn-circle"><i className="arrow-down"></i></a>
		</div>
	</section>
	<section id="one" 
      className="career"
      style={{"background": `url(${photos.length && photos[1].url})`}}>
		<div className="info">
			<h2 className="info-title">Чем я занимаюсь</h2>
			<p className="info-content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi et quaerat aliquid veniam, suscipit nemo nihil similique incidunt ducimus minima facilis blanditiis laboriosam impedit laborum odio. Quos reprehenderit iusto et. ipsum dolor sit amet!
			</p>
		</div>
		<a href="#two" className="btn-bottom"><i className="arrow-down"></i></a>
	</section>
	<section id="two"
      className="aboutMe"
      style={{"background": `url(${photos.length && photos[2].url})`}}>
		<div className="info">
			<h2 className="info-title">Обо мне</h2>
			<p className="info-content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi et quaerat aliquid veniam, suscipit nemo nihil similique incidunt ducimus minima facilis blanditiis laboriosam impedit laborum odio. Quos reprehenderit iusto et. ipsum dolor sit amet!
			</p>
		</div>
		<a href="#three" className="btn-bottom"><i className="arrow-down"></i></a>
	</section> 
  </div>
