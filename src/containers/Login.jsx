import React from 'react'
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className="login">
  <section className="login__container">
    <h2 tabindex="0">Inicia sesión</h2>
    <form className="login__container--form">
      <input aria-label="Correo" className="input" type="text" placeholder="Correo" />
      <input aria-label="Contraseña" className="input" type="password" placeholder="Contraseña"/>
      <button className="button">Iniciar sesión</button>
      <div className="login__container--remember-me">
        <label>
          <input type="checkbox" name="" id="cbox1" value="checkbos" />Recuérdame
        </label>
        <a href="/">Olvidé mi contraseña</a>
      </div>
    </form>
    <section className="login__container--social-media">
      <div><img src={googleIcon} alt="Google"/>Inicia sesión con Google</div>
      <div><img src={twitterIcon} alt="Twitter"/>Inicia sesión con Twitter</div>
    </section>
    <p className="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
  </section>
</section>
);

export default Login;