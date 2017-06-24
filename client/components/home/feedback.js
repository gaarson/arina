import React from 'react';

export const Feedback = () => {
  return (
    <section id="four" className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Напиши мне.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <form action="" className="form">
          <div className="input-col">
            <input
              type="text"
              placeholder="Имя"
              />
          </div>
          <div className="input-col">
            <input
              type="email"
              placeholder="Email"
              />
          </div>
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Сообщение"></textarea>
          <a href="#" className="btn-form">Отправить</a>
        </form>
      </div>
    </section>
  )
}
