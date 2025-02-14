import React from 'react';

function Header({ children }) {
  return (
    <div className="header">
      <div className="newheader">
        <a
          href="https://html.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
            alt="HTML Logo"
            className="logo"
          />
        </a>
        <h1>HTML</h1>
        <div className="contact">
          <p>Телефон: +7 777 777 77 77</p>
          <small>Пн-Пт: 09:00 - 21:00</small>
        </div>
      </div>
      <div className="button">
        {children} 
      </div>
    </div>
  );
}

export default Header;