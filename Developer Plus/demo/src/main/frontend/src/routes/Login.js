import { useState } from 'react';
function Login() {
  let [modal, setModal] = useState(false);
  return (
    <div>
      <br></br>

      <header className='welcome-header'>
        <h1 className='welcome-header__title'>Welcome to Developer Plus</h1>
        <p className='welcome-header__text'>
          If you have a Developer Plus Account, login with your Email.
        </p>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <form action='/home.html' method='POST' className='login-form'>
          <input type='email' placeholder='Email' required></input>
          <input type='password' placeholder='Password' required></input>

          <input type='submit' value='Sign In'></input>
          <button type='button'>카카오계정으로 로그인</button>
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setModal(!modal);
            }}
          >
            Developer Plus Sign Up
          </a>
        </form>
      </div>
      {modal ? <Modal /> : null}
    </div>
  );
}
function Modal() {
  return (
    <div>
      <form action='#' method='post' style={{}}>
        <span>회원가입</span>
        <input type='text' placeholder='Enter your name' required></input>
        <input type='text' placeholder='Enter your ID' required></input>
        <input
          type='email'
          placeholder='Enter your email address'
          required
        ></input>
        <input
          type='password'
          placeholder='Enter your password'
          required
        ></input>
        <button type='button' onclick="location.href='/login.html'">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default Login;
