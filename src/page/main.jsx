import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainImage({ isVisible }) {
  return (
    <div className="main-img" style={{ display: isVisible ? 'flex' : 'none' }}>
      <img
        src="https://html.com/wp-content/uploads/html-tutorial-beginners-header.webp"
        alt="HTML Tutorial"
        id="mainimage"
      />
    </div>
  );
}

function Controls({ onShow, onHide }) {
  const navigate = useNavigate();

  const handleGoToError = () => {
    window.open('/error', '_blank');
  };

  const handleGoToAnotherSite = () => {
    navigate('/another');
  };

  return (
    <div className="controls">
      <button id="showimage" className="controlbutton" onClick={onShow}>
        Показать картинку
      </button>
      <button id="hideimage" className="controlbutton" onClick={onHide}>
        Скрыть картинку
      </button>
      <button className="controlbutton" onClick={handleGoToError}>
        Не нажимай
      </button>
      <button className="controlbutton" onClick={handleGoToAnotherSite}>
        Другая часть сайта
      </button>
    </div>
  );
}

function MainInfo() {
  return (
    <div className="main-info">
      <div className="info">
        <h2>What is HTML?</h2>
        <p>
          Okay, so this is the only bit of mandatory theory. In order to begin
          to write HTML, it helps if you know what you are writing. HTML is the
          language in which most websites are written. HTML is used to create
          pages and make them functional. The code used to make them visually
          appealing is known as CSS and we shall focus on this in a later
          tutorial. For now, we will focus on teaching you how to build rather
          than design.
        </p>
        <img
          src="https://html.com/wp-content/uploads/html-hpg-sublime.png"
          alt="code"
          className="code-img"
        />
      </div>
      <div className="info">
        <h2>The History of HTML</h2>
        <p>
          HTML was first created by Tim Berners-Lee, Robert Cailliau, and
          others starting in 1989. It stands for Hyper Text Markup Language.
          Hypertext means that the document contains links that allow the reader
          to jump to other places in the document or to another document
          altogether. The latest version is known as HTML5. A Markup Language
          is a way that computers speak to each other to control how text is
          processed and presented. To do this HTML uses two things: tags and
          attributes.
        </p>
        <img
          src="https://wp.technologyreview.com/wp-content/uploads/2017/04/timberners-lee-7.jpg?w=2963?crop=0px,0px,3000px,1687px"
          alt="Tim"
          className="tim-image"
        />
      </div>
    </div>
  );
}

function Main({ children }) {
  return (
    <div className="main-container"> {/* Обертка для всего контента Main */}
      {children}
    </div>
  );
}

export default Main; // Экспортируем Main как default
export { MainImage, Controls, MainInfo };