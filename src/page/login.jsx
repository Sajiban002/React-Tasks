import React from 'react';

function Login() {
  return (
    <section className="section-reg">
      <div className="register">
        <h3>Добро пожаловать!</h3>
        <label>Почта</label>
        <input type="email" placeholder="Введите почту" />
        <label>Пароль</label>
        <input type="password" placeholder="Введите пароль" />
        <button>Войти</button>
      </div>
    </section>
  );
}

export default Login;