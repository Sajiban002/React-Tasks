import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main, { MainImage, Controls, MainInfo } from './page/main';
import Login from './page/login';
import Register from './page/register';
import Error from './page/error';
import AnotherSite from './page/AnotherSite';

function App() {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleShowImage = () => {
    setIsImageVisible(true);
  };

  const handleHideImage = () => {
    setIsImageVisible(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <Router>
      <Layout
        onOpenLogin={openLoginModal}
        onOpenRegister={openRegisterModal}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <MainImage isVisible={isImageVisible} />
                <Controls onShow={handleShowImage} onHide={handleHideImage} />
                <MainInfo />
              </Main>
            }
          />
          <Route path="/error" element={<Error />} />
          <Route path="/another" element={<AnotherSite />} />
        </Routes>
      </Layout>

      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeLoginModal}>
              ×
            </button>
            <Login />
          </div>
        </div>
      )}

      {isRegisterModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeRegisterModal}>
              ×
            </button>
            <Register />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;