import { useState, useRef } from 'react';
import axios from 'axios';
import CloseButton from 'react-bootstrap/CloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faN } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

function Login(props) {
  const outside = useRef();
  const requestLogin = (_email, _password) => {
    axios
      .post('/api/requestLogin', {
        email: _email,
        password: _password,
      })
      .then((response) => {
        if (response.data['result'] == 'true') {
          sessionStorage.setItem('id', response.data['id']);
          props.navigate('/');
        } else {
          alert(response.data['message']);
        }
      })
      .catch((error) => console.log(error));
  };
  let [modal, setModal] = useState(false);
  return (
    <div style={{ backgroundColor: 'white' }}>
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
            style={{
              backgroundColor: 'rgb(148,178,229)',
              borderRadius: '5px',
              paddingTop: '2%',
              paddingBottom: '2%',
              fontSize: '18px',
            }}
            type='button'
            value='Developer Plus 계정으로 로그인'
          ></input>

          <div style={{}}>
            <button
              type='button'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '8vh',
                marginBottom: '3%',
                borderRadius: '5px',
                backgroundColor: '#04cf5c',
                border: '1px solid rgba(222,222,222,0.2)',
                borderRadius: '5px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <FontAwesomeIcon
                  icon={faN}
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    paddingLeft: '5%',
                  }}
                />

                <div
                  style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingLeft: '3%',
                    color: 'white',
                  }}
                >
                  네이버계정으로 로그인
                </div>
              </div>
            </button>
          </div>
          <div style={{}}>
            <button
              type='button'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '8vh',
                marginBottom: '3%',
                borderRadius: '5px',
                backgroundColor: '#fae100',
                border: '1px solid rgba(222,222,222,0.2)',
                borderRadius: '5px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <FontAwesomeIcon
                  icon={faComment}
                  style={{
                    fontSize: '20px',
                    paddingLeft: '3%',
                  }}
                />

                <div
                  style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingLeft: '3%',
                    fontWeight: '500',
                  }}
                >
                  카카오계정으로 로그인
                </div>
              </div>
            </button>
          </div>
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setModal(true);
            }}
          >
            Developer Plus Sign Up
          </a>
        </form>
      </div>
      {modal ? (
        <Modal modal={modal} setModal={setModal} navigate={props.navigate} />
      ) : null}
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
      .then((response) =>
        console.log(response.data['message'] + ' id : ' + response.data['id'])
      )
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        background: 'rgba(0, 0, 0, 0.5)',
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
            backgroundColor: 'white',
            width: '30%',
            height: '50vh',
            borderRadius: '5px',
          }}
        >
          <div
            style={{
              textAlign: 'end',
              paddingRight: '3%',
              paddingTop: '2%',
              fontSize: '20px',
            }}
            onClick={() => props.setModal(false)}
          >
            <CloseButton />
          </div>
          <h2 style={{ color: 'black', marginTop: '1%' }}>회원가입</h2>
          <div style={{}}>
            <button
              type='button'
              style={{
                width: '80%',
                height: '8vh',
                marginBottom: '3%',
                marginTop: '1%',
                backgroundColor: 'rgb(148,178,249)',
                border: '1px solid rgba(222,222,222,0.2)',
                borderRadius: '5px',
              }}
              onClick={() => {
                props.navigate(`/SignUp`);
              }}
            >
              Developer Plus로 가입
            </button>
            <div style={{}}>
              <button
                type='button'
                style={{
                  paddingLeft: '10%',
                  width: '80%',
                  height: '8vh',
                  marginBottom: '3%',
                  borderRadius: '5px',
                  backgroundColor: '#04cf5c',
                  border: '1px solid rgba(222,222,222,0.2)',
                  borderRadius: '5px',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <FontAwesomeIcon
                    icon={faN}
                    style={{
                      color: 'white',
                      fontSize: '20px',
                      paddingLeft: '5%',
                    }}
                  />{' '}
                  <div
                    style={{
                      alignItems: 'center',
                      paddingLeft: '10%',
                      color: 'white',
                    }}
                  >
                    네이버계정으로 가입
                  </div>
                </div>
              </button>
            </div>
            <div style={{}}>
              <button
                type='button'
                style={{
                  paddingLeft: '10%',
                  width: '80%',
                  height: '8vh',
                  marginBottom: '3%',
                  borderRadius: '5px',
                  backgroundColor: '#fae100',
                  border: '1px solid rgba(222,222,222,0.2)',
                  borderRadius: '5px',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{
                      fontSize: '20px',
                      paddingLeft: '5%',
                    }}
                  />

                  <div style={{ alignItems: 'center', paddingLeft: '10%' }}>
                    카카오계정으로 가입
                  </div>
                </div>
              </button>
            </div>
            <p
              style={{
                fontSize: '12px',
                paddingLeft: '3%',
                paddingRight: '3%',
              }}
            >
              소셜 로그인으로 가입 시{' '}
              <a style={{ color: 'red' }}>이용약관,&nbsp;</a>
              <a style={{ color: 'red' }}>개인정보처리방침,&nbsp;</a>
              <a style={{ color: 'red' }}> 전자금융거래약관</a>에 동의함으로
              처리됩니다.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
function BasicExample(props) {
  return <CloseButton />;
}
export default Login;
