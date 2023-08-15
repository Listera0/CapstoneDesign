import { data, projectData, developerData } from '../data.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios, { all } from 'axios';
import CloseButton from 'react-bootstrap/CloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faN } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
function StoryDetail(props) {
  const navigate = useNavigate();
  let [modal, setModal] = useState(false);
  const [resultDto, setResultDto] = useState(['']);
  let [tab, setTab] = useState(0);
  let { id } = useParams(); // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  const [storyDetails, setStoryDetails] = useState(['']);
  const addMemberToChat = (_memberId, _projectId) => {
    axios
      .post('/api/addMemberToChat', {
        memberId: _memberId,
        projectId: _projectId,
      })
      .then();
  };
  const [allDevDto, setAllDevDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllDevData')
        .then((response) => {
          setAllDevDto(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }, []);
  }
  const [userDetail, setUserDetail] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getDevData', {
          id: id,
          orderBy: '',
          limit: '',
        })
        .then((response) => setUserDetail(response.data))
        .catch((error) => console.log(error));
    }, []);
  }
  console.log(userDetail);
  let developerDetail = userDetail[1];
  const [chatDetail, setChatDetail] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getChatHistory', {
          targetId: id,
        })
        .then((response) => {
          setChatDetail(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [chatDetail]);
  }

  const getChatHistory = (_targetId) => {
    axios
      .post('/api/getChatHistory', {
        targetId: _targetId,
      })
      .then((response) => {
        setChatDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteChat = (_id, _targetId, _chatCount) => {
    axios
      .post('/api/deleteChat', {
        id: _id,
        targetId: _targetId,
        chatCount: _chatCount,
      })
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  let storyDetail = storyDetails[0];
  useEffect(() => {
    axios
      .post('/api/getStoryData', {
        id: id,
        orderBy: '',
        limit: '',
      })
      .then((response) => setStoryDetails(response.data))
      .catch((error) => console.log(error));
  }, [storyDetails]);

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
  }, []);

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
                      src={process.env.PUBLIC_URL + storyDetail.imgURL}
                      width='100%'
                      style={{ textAlign: 'center' }}
                    ></img>
                  </div>

                  <div
                    style={{
                      fontSize: '15px',
                      marginTop: '2%',
                      width: '100%',
                    }}
                  >
                    <span style={{ fontWeight: '600', marginRight: '10%' }}>
                      {storyDetail.content && (
                        <Viewer initialValue={storyDetail?.content} />
                      )}
                    </span>{' '}
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

          <TabContent
            tab={tab}
            story={props.story}
            storyDetail={storyDetail}
            storyDetails={storyDetails}
            isLogin={isLogin}
            resultDto={resultDto}
            modal={modal}
            setModal={setModal}
            navigate={navigate}
            getChatHistory={getChatHistory}
            setChatDetail={setChatDetail}
            chatDetail={chatDetail}
            allDevDto={allDevDto}
            deleteChat={deleteChat}
            developerDetail={developerDetail}
          />
        </div>
      </div>
    </section>
  );
}

function TabContent(props) {
  const insertChat = (_userId, _targetId, _content, _chatCount) => {
    axios
      .post('/api/insertChat', {
        userId: _userId,
        targetId: _targetId,
        content: _content,
        chatCount: _chatCount,
      })
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
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
  console.log(props.developerDetail);
  console.log(props.resultDto[0].name);
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
            <button
              type='submit'
              className='comment_btn'
              onClick={() => {
                insertChat(
                  props.resultDto[0].id,
                  props.storyDetail.id,
                  document.getElementById('comment_box').value,
                  props.storyDetails[0].chatCount
                );
                props.getChatHistory(props.storyDetail.id);
                // console.log(props.setChatDetail);
              }}
            >
              등록
            </button>
          </div>
        </form>
        {props.chatDetail.map((comment, index) => (
          <NewComment
            index={index}
            resultDto={props.resultDto}
            comment={comment}
            chatDetail={props.chatDetail}
            id={props.id}
            allDevDto={props.allDevDto}
            deleteChat={props.deleteChat}
            storyDetail={props.storyDetail}
            storyDetails={props.storyDetails}
          />
        ))}
      </div>
    );
  function NewComment(props) {
    {
      // console.log(
      //   props.allDevDto[props.chatDetail[props.index].userId - 1]?.name
      // );
    }
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '15px', marginRight: '10px' }}>
            {props.allDevDto[props.chatDetail[props.index].userId - 1]?.name}
          </p>
          <div style={{ flex: 1 }}>
            <textarea
              value={props.chatDetail[props.index].content}
              onChange={(e) => {
                // 댓글 내용 변경 핸들러
                props.handleCommentChange(e.target.value);
              }}
              style={{ width: '100%', height: '80px', resize: 'none' }}
              disabled
            />
          </div>
          <ul style={{ listStyle: 'none', marginLeft: '10px' }}>
            <li>
              {props.allDevDto[props.chatDetail[props.index].userId - 1]
                ?.name === props.resultDto[0].name ? (
                <button
                  onClick={() => {
                    props.deleteChat(
                      props.chatDetail[props.index].id,
                      props.chatDetail[props.index].targetId,
                      props.storyDetails[0].chatCount
                    );
                  }}
                  className='delete-button'
                >
                  삭제
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.deleteChat(
                      props.chatDetail[props.index].id,
                      props.chatDetail[props.index].targetId,
                      props.storyDetails[0].chatCount
                    );
                  }}
                  disabled
                  style={{ visibility: 'hidden' }}
                >
                  삭제
                </button>
              )}
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

            {props.chatDetail.map((comment, index) => (
              <NewComment
                index={index}
                resultDto={props.resultDto}
                comment={comment}
                chatDetail={props.chatDetail}
                id={props.id}
                allDevDto={props.allDevDto}
                deleteChat={props.deleteChat}
                storyDetail={props.storyDetail}
                storyDetails={props.storyDetails}
              />
            ))}
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
