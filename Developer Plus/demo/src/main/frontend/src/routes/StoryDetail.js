import { data, projectData, developerData } from '../data.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CloseButton from 'react-bootstrap/CloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faN } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function StoryDetail(props) {
  const navigate = useNavigate();
  let [modal, setModal] = useState(false);
  const [resultDto, setResultDto] = useState(['']);
  let [tab, setTab] = useState(0);
  let { id } = useParams(); // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  const [storyDetails, setStoryDetails] = useState(['']);

  useEffect(() => {
    axios
      .post('/api/getStoryData', {
        id: id,
        orderBy: '',
        limit: '',
      })
      .then((response) => setStoryDetails(response.data))
      .catch((error) => console.log(error));
  }, []);

  let storyDetail = storyDetails[0];
  const getDto = (location, _id, _orderBy, _limit) => {
    axios
      .post('/api/get' + location + 'Data', {
        id: _id,
        orderBy: _orderBy,
        limit: _limit,
      })
      .then((response) => setResultDto(response.data))

      .catch((error) => console.log(error));
  };
  const [isLogin, setIsLogin] = useState(false); //로그인 관리

  useEffect(() => {
    if (sessionStorage.getItem('id') === null) {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      getDto('Dev', sessionStorage.getItem('id'), '', '');
    }
  },[]);
  return (
    <section className='bg-light'>
      <div className='container' style={{ marginTop: '-3%' }}>
        <div className='row'>
          <div className='col-lg-12'>
            <h2
              style={{
                textAlign: 'center',
                paddingTop: '5%',
                paddingLeft: '5%',
                fontWeight: '600',
              }}
            >
              {storyDetail.title}
            </h2>
            <div class='grid text-center'>
              <div class='g-col-6'>{storyDetail.name}</div>
              <div class='g-col-6'>{storyDetail.date}</div>
            </div>

            <div className='card card-style1 border-0'>
              <div className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'>
                <div className='row align-items-center'>
                  <div className='col-lg-12 mb-4 mb-lg-0'>
                    <img
                      src={process.env.PUBLIC_URL + '/' + 'c1.jpg'}
                      width='100%'
                      style={{ textAlign: 'center' }}
                    ></img>
                  </div>
                  {/* <div className="col-lg-6 px-xl-10">
                    <div>
                      <h3 style={{ textAlign: "start" }}>{story.name}</h3>
                    </div>

                    <div className="subdiv">
                      <div
                        className="col-6 "
                        style={{ fontSize: "15px" }}
                      ></div>
                      <div className="col-6" style={{ fontSize: "15px" }}></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12' style={{ padding: 0 }}>
            <div className='col-lg-12'>
              <div style={{ padding: '3%' }}>
                <span style={{ textAlign: 'start' }}>
                  <p
                    style={{
                      textAlign: 'start',
                      fontSize: '15px',
                      marginTop: '2%',
                    }}
                  >
                    <span style={{ fontWeight: '600', marginRight: '10%' }}>
                      {storyDetail.content}
                    </span>
                  </p>
                </span>
              </div>
              <p
                style={{
                  paddingLeft: '3%',
                  fontSize: '20px',
                  textAlign: 'start',
                }}
              >
                댓글
              </p>
              <br></br>
            </div>
          </div>

          <TabContent
            tab={tab}
            story={props.story}
            storyDetail={storyDetail}
            isLogin={isLogin}
            resultDto={resultDto}
            modal={modal}
            setModal={setModal}
            navigate={navigate}
          />
        </div>
      </div>
    </section>
  );
}

function TabContent(props) {
  const [comment, setComment] = useState('');
  const [feedComment, setFeedComment] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNewComment = (e) => {
    e.preventDefault();
    if (comment.trim() === '') {
      alert('댓글을 입력해주세요.');
      return;
    }
    const updatedComments = [...feedComment];
    updatedComments.push(comment);
    setFeedComment(updatedComments);
    setComment('');
  };

  if (props.isLogin == true)
    return (
      <div className='comment_object' style={{ backgroundColor: '#f7f7f7' }}>
        <div className='comment_user'>
          <div></div>
        </div>
        <form onSubmit={handleNewComment}>
          <div
            className='comment_input'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p style={{ fontSize: '15px' }}>{props.resultDto[0].name}</p>
            <textarea
              rows='4'
              id='comment_box'
              placeholder='댓글을 입력해주세요.'
              onChange={handleCommentChange}
              value={comment}
            ></textarea>
            <button type='submit' className='comment_btn'>
              등록
            </button>
          </div>
        </form>
        {feedComment.map((comment, index) => (
          <NewComment
            key={index}
            resultDto={props.resultDto}
            comment={comment}
          />
        ))}
      </div>
    );
  function NewComment(props) {
    console.log(props.comment);
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '15px' }}>{props.resultDto[0].name}</p>
          <p>{props.comment}</p>

          <ul style={{ listStyle: 'none' }}>
            <li>
              <a href=''>삭제</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  function FormFloatingTextareaExample() {
    return (
      <>
        <FloatingLabel controlId='floatingTextarea2' label='Comments'>
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: '20vh', resize: 'none' }}
          />
        </FloatingLabel>
      </>
    );
  }
  if (props.isLogin == false)
    return (
      <div className='col-lg-12' style={{ padding: 0 }}>
        <div className='col-lg-12'>
          <div style={{ padding: '3%' }}>
            <span style={{ textAlign: 'start' }}>
              <p
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  {props.storyDetail.content}
                </span>
              </p>
            </span>
          </div>
          <p
            style={{ paddingLeft: '3%', fontSize: '20px', textAlign: 'start' }}
          >
            댓글
          </p>
          <br></br>
          <div
            className='comment_object'
            style={{ backgroundColor: '#f7f7f7' }}
          >
            <div className='comment_user'>
              <div></div>
            </div>
            <div
              className='comment_input'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0px 15px',
              }}
            >
              <p
                style={{
                  fontSize: '15px',
                }}
              >
                <img
                  src='https://letspl.me/assets/images/prof-no-img.png'
                  style={{ width: '46px', height: '46px' }}
                ></img>
              </p>
              <textarea
                rows='4'
                mexlength='200'
                className='comment_box'
                placeholder='로그인 후 작성가능합니다'
                onClick={() => {
                  props.setModal(true);
                }}
              ></textarea>

              <button className='comment_btn'>등록</button>
            </div>
          </div>
        </div>
        {props.modal ? (
          <SignInModal
            modal={props.modal}
            setModal={props.setModal}
            navigate={props.navigate}
          />
        ) : null}
      </div>
    );
}

function SignInModal(props) {
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
            <div
              style={{
                paddingRight: '3%',
                paddingTop: '2%',
                fontSize: '20px',
                margin: '0 0 0 auto',
              }}
              onClick={() => props.setModal(false)}
            >
              <CloseButton />
            </div>
          </Modal.Header>
          <div>
            <h2
              style={{
                fontWeight: '700',
                fontSize: '18px',
                textAlign: 'center',
              }}
            >
              로그인이 필요한 기능입니다.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontWeight: '400',
                fontSize: '13px',
                color: 'gray',
                textAlign: 'center',
                fontFamily: 'Pretendard',
                fontStyle: 'normal',
                padding: '0rem 1rem',
                lineHeight: '18px',
              }}
            >
              로그인을 하시겠습니까?
            </p>
          </div>
          <Modal.Body>
            <form style={{ display: 'flex' }}>
              <button
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%',
                  color: 'rgb(148,179,249)',
                  marginBottom: '3%',
                  borderRadius: '5px',
                  backgroundColor: 'white',
                  border: '1px solid rgb(148,179,249)',
                  borderRadius: '5px',
                  marginRight: '3%',
                }}
                onClick={() => props.setModal(false)}
              >
                아니오
              </button>
              <button
                type='button'
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%',
                  height: '7vh',
                  marginBottom: '3%',
                  borderRadius: '5px',
                  backgroundColor: 'rgb(148,179,249)',
                  border: '1px solid rgba(222,222,222,0.2)',
                  borderRadius: '5px',
                }}
                onClick={() => {
                  props.navigate('/Login');
                }}
              >
                <div
                  style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingLeft: '3%',
                    color: 'white',
                  }}
                >
                  예
                </div>
              </button>
            </form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </div>
  );
}
function BasicExample(props) {
  return <CloseButton />;
}
export default StoryDetail;
