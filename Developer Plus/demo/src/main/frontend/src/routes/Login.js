import { useState, useRef } from 'react';
import axios from 'axios';
import CloseButton from 'react-bootstrap/CloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faN } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Login(props) {
  const outside = useRef();

  let API_KEY = '92ac45fc775ab8bb9b58554b33464200';
  let REDIRECTION = 'http://localhost:3000/KakaoLogin';
  let KakaoLoginAPI = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECTION}&response_type=code`;

  const openKakaoLogin = () => {
    window.open(KakaoLoginAPI, "_self");
  };

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
    <div
      className='modal show'
      style={{ display: 'block', position: 'initial' }}
    >
      <input type="button" onClick={() => {openKakaoLogin()}} value="kakao"></input>
      <Modal.Dialog>
        <Modal.Header style={{ borderBottom: 'rgb(222,222,222)' }}>
          <h2 style={{ fontWeight: '700' }}>로그인</h2>
        </Modal.Header>
        <div>
          <p
            style={{
              fontWeight: '400',
              fontSize: '13px',
              color: 'gray',
              textAlign: 'start',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              padding: '0rem 1rem',
              lineHeight: '18px',
            }}
          >
            팀빌딩을 원한다면 언제든지!<br></br> 직군에 관계없이 누구든지!
          </p>
        </div>
        <Modal.Body>
          <form action='/' method='POST'>
            <input
              id='email'
              type='email'
              placeholder='Email'
              required
              style={{
                width: '100%',
                border: 'none',
                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                padding: '8px 0px',
                marginBottom: '5%',
              }}
            ></input>
            <input
              id='password'
              type='password'
              placeholder='Password'
              required
              style={{
                width: '100%',
                border: 'none',
                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                padding: '8px 0px',
                marginBottom: '5%',
              }}
            ></input>

            <button
              onClick={(e) => {
                e.preventDefault(); // 기본 동작인 폼 제출을 막음
                requestLogin(
                  document.getElementById('email').value,
                  document.getElementById('password').value
                );
              }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '7vh',
                marginBottom: '3%',
                borderRadius: '5px',
                backgroundColor: 'rgb(148,179,249)',
                border: '1px solid rgba(222,222,222,0.2)',
                borderRadius: '5px',
              }}
            >
              Developer Plus 계정으로 로그인
            </button>
            <button
              type='button'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '7vh',
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
            <p
              className='signuphover'
              style={{ cursor: 'pointer', textAlign: 'center' }}
              onClick={() => {
                setModal(true);
              }}
            >
              Developer Plus Sign Up
            </p>
          </form>
        </Modal.Body>
      </Modal.Dialog>

      {modal ? (
        <SignUpModal
          modal={modal}
          setModal={setModal}
          navigate={props.navigate}
        />
      ) : null}
    </div>
  );
}

function SignUpModal(props) {
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
      <div
        className='modal show'
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header style={{ borderBottom: 'rgb(222,222,222)' }}>
            <h2 style={{ fontWeight: '700' }}>회원가입</h2>
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
          </Modal.Header>
          <div>
            <p
              style={{
                fontWeight: '400',
                fontSize: '13px',
                color: 'gray',
                textAlign: 'start',
                fontFamily: 'Pretendard',
                fontStyle: 'normal',
                padding: '0rem 1rem',
                lineHeight: '18px',
              }}
            >
              팀빌딩을 원한다면 언제든지!<br></br> 직군에 관계없이 누구든지!
            </p>
          </div>
          <Modal.Body>
            <form>
              <button
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '7vh',
                  marginBottom: '3%',
                  borderRadius: '5px',
                  backgroundColor: 'rgb(148,179,249)',
                  border: '1px solid rgba(222,222,222,0.2)',
                  borderRadius: '5px',
                }}
                onClick={() => {
                  props.navigate(`/SignUp`);
                }}
              >
                Developer Plus로 가입
              </button>
              <button
                type='button'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '7vh',
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
                    네이버계정으로 가입
                  </div>
                </div>
              </button>
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
                      카카오계정으로 가입
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </Modal.Body>
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
          <a
            className='signuphover'
            style={{
              cursor: 'pointer',
              marginBottom: '3%',
              fontWeight: '400',
              fontSize: '13px',
              color: 'gray',

              fontFamily: 'Pretendard',
              fontStyle: 'normal',

              lineHeight: '18px',
            }}
            onClick={() => {
              props.setModal(false);
            }}
          >
            로그인하기
          </a>
        </Modal.Dialog>
      </div>
    </div>
  );
}
function BasicExample(props) {
  return <CloseButton />;
}
export default Login;
