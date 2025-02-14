import React from 'react';

function Register() {
  return (
    <section className="section-reg">
      <div className="register">
        <h3>Регистрация</h3>
        <label>Фамилия</label>
        <input type="text" placeholder="Введите фамилию" />
        <label>Имя</label>
        <input type="text" placeholder="Введите имя" />
        <label>Почта</label>
        <input type="email" placeholder="Введите почту" />
        <label>Пароль</label>
        <input type="password" placeholder="Введите пароль" />
        <label>Повторите пароль</label>
        <input type="password" placeholder="Введите пароль" />
        <button>Регистрация</button>
      </div>
    </section>
  );
}

export default Register;