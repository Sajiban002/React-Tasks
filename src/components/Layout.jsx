import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Layout({ children, onOpenLogin, onOpenRegister }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isErrorPage = location.pathname === '/error';
  const isAnotherPage = location.pathname === '/another';

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      {!isErrorPage && (
        <Header
          onOpenLogin={onOpenLogin}
          onOpenRegister={onOpenRegister}
        >
          {isAnotherPage ? (
            <button className="headerbutton" onClick={handleGoBack}>
              Назад
            </button>
          ) : (
            <>
              <button className="headerbutton" onClick={onOpenRegister}>
                Регистрация
              </button>
              <button className="headerbutton" onClick={onOpenLogin}>
                Вход
              </button>
            </>
          )}
        </Header>
      )}
      <main>{children}</main>
      {!isErrorPage && <Footer />}
    </div>
  );
}

export default Layout;