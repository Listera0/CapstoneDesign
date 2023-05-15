import { useState } from 'react';
import axios from 'axios';

function Login() {
  const requestLogin = (_email, _password) => {
    axios
      .post('/api/requestLogin', {
        email: _email,
        password: _password,
      })
      .then((response) => alert(response.data['message']))
      .catch((error) => console.log(error));
  };

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
          <input id='email' type='email' placeholder='Email' required></input>
          <input
            id='password'
            type='password'
            placeholder='Password'
            required
          ></input>

          <input
            onClick={() =>
              requestLogin(
                document.getElementById('email').value,
                document.getElementById('password').value
              )
            }
            type='button'
            value='Sign In'
          ></input>
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
      {modal ? <Modal modal={modal} /> : null}
    </div>
  );
}

function Modal(props) {

  const requestSignUp = (_name, _email, _password) => {
    axios
      .post('/api/requestSignUp', {
        name: _name,
        email: _email,
        password: _password,
      })
      .then((response) => console.log(response.data['message'] + ' id : ' + response.data['id']))
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        background: 'rgba(0, 0, 0, 0.7)',
        position: 'fixed',
        zIndex: '999',
      }}
    >
      <div>
        <form
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            display: 'flex',
            flexDirection: 'column',
            transform: 'translate(-50%, -50%)',
            zIndex: '1000',
          }}
        >
          <h2 style={{ color: 'white' }}>회원가입</h2>
          <input id='name2' type='name' placeholder='Name' required></input>
          <input id='email2' type='email' placeholder='Email' required></input>
          <input
            id='password2'
            type='password'
            placeholder='PassWord'
            required
          ></input>
          
          <input
            onClick={() =>
              requestSignUp(
                document.getElementById('name2').value,
                document.getElementById('email2').value,
                document.getElementById('password2').value
              )
            }
            type='button'
            value='Sign Up'
          ></input>

          <button type='button'>카카오계정으로 로그인</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
