import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import './TalkDetail.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Calendar from './Calendar';
import styled from 'styled-components';
function TalkDetail(props) {
  let { id } = useParams(); // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  // let developerDetail = props.allDevDto.find(function (x) {
  //   return x.id == id;
  // });
  //4
  const [allDevDto, setAllDevDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllDevData')
        .then((response) => setAllDevDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }
  const [talkList, setTalkList] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getChatInfo', {
          id: id,
          limit: '',
        })
        .then((response) => {
          setTalkList(response.data);
        });
    });
  }

  //(id, userId, content)
  const insertCommentChat = (_content) => {
    axios.post('/api/insertCommentChat', {
      id: id,
      userId: sessionStorage.getItem('id'),
      content: _content,
    });
  };

  const [userDetail, setUserDetail] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getDevData', {
          id: sessionStorage.getItem('id'), //sessionss.id
          orderBy: '',
          limit: '',
        })
        .then((response) => setUserDetail(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

  const [chatHistory, setChatHistory] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getCommentChatHistory', {
          id: id,
          section: '5',
        })
        .then((response) => setChatHistory(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

  const [projectDetails, setProjectDetails] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getProjectData', {
          id: id,
          orderBy: '',
          limit: '',
        })
        .then((response) => setProjectDetails(response.data))
        .catch((error) => console.log(error));
    }, []);
  }
  let projectDetail = projectDetails[0];
  //id, section
  // /api/getCommentChatHistory
  let developerDetail = userDetail[0];
  const [notification, setNotification] = useState(false);
  const [calendar, setCalendar] = useState(true);
  const [showTalk, setShowTalk] = useState(false);
  const [writeNotification, setWriteNotification] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div
        className=' text-center'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '1%',
          marginTop: '3%',
          marginBottom: '3%',
        }}
      >
        {calendar ? (
          <div
            className='g-col-6 g-col-md-4'
            style={{
              border: '1px solid rgb(222,222,222)',
              width: '90%',
              backgroundColor: 'white',
              borderRadius: '5px',
            }}
          >
            <Calendar></Calendar>
          </div>
        ) : (
          <div></div>
        )}
        {showTalk ? (
          <div
            className='g-col-6 g-col-md-4'
            style={{
              border: '1px solid rgb(222,222,222)',
              width: '90%',
              backgroundColor: 'white',
              borderRadius: '5px',
            }}
          >
            {talkList.map((a, i) => {
              let talkDetail =
                talkList[0].memberId != null
                  ? talkList[0].memberId.split(',').map((id) => parseInt(id))
                  : '';
              console.log(talkDetail[0]);
              console.log(developerDetail.id);
              const memberIdArray = talkList[0].memberId
                .split(',')
                .map((id) => parseInt(id));
              return (
                <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                  <h2
                    style={{
                      marginTop: '5%',
                      fontSize: '20px',
                      fontWeight: '700',
                    }}
                  >
                    멤버 정보
                  </h2>
                  {talkDetail.includes(developerDetail.id) ? (
                    <>
                      <h3
                        style={{
                          fontSize: '18px',
                          textAlign: 'start',
                          fontWeight: '700',
                        }}
                      >
                        리더 정보
                      </h3>
                      <div style={{ display: 'flex' }}>
                        <div className='profile__thumbnail'>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              allDevDto[talkDetail[0] - 1].imgURL
                            }
                            width='30%'
                            style={{ paddingTop: '3%', paddingBottom: '3%' }}
                          ></img>
                        </div>
                        <div className='txtWrap'>
                          <div className='title'>
                            {allDevDto[talkDetail[0] - 1].name}
                          </div>
                          <div className='chat-message'>
                            <p className='assistant'>
                              {allDevDto[talkDetail[0] - 1].jobDetail}{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <h3
                        style={{
                          fontSize: '18px',
                          textAlign: 'start',
                          fontWeight: '700',
                          marginTop: '5%',
                        }}
                      >
                        멤버 정보
                      </h3>
                      {memberIdArray.forEach((value, index) => {
                        // ... JSX 내에서 value 값을 사용할 수 있도록 변수를 할당
                        const memberName = allDevDto[value].name;
                        const memberImg = allDevDto[value].imgURL;
                        const memberJobDetail = allDevDto[value].jobDetail;
                        console.log(memberName);
                        return (
                          <div style={{ display: 'flex' }}>
                            <div className='profile__thumbnail'>
                              <img
                                src={process.env.PUBLIC_URL + memberImg}
                                width='30%'
                                style={{
                                  paddingTop: '3%',
                                  paddingBottom: '3%',
                                }}
                              ></img>
                            </div>
                            <div className='txtWrap'>
                              <div className='title'>{memberName}</div>
                              <div className='chat-message'>
                                <p className='assistant'>{memberJobDetail} </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div>ds</div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
        {notification ? (
          <div
            className='g-col-6 g-col-md-4'
            style={{
              border: '1px solid rgb(222,222,222)',
              width: '90%',
              backgroundColor: 'white',
              borderRadius: '5px',
            }}
          >
            <p style={{ fontSize: '24px' }}>공지목록</p>
            <div>
              <div
                style={{
                  marginBottom: '1%',
                  border: '1px solid rgb(222,222,222)',
                  alignItems: 'center',
                }}
              >
                <a href='#' style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      textAlign: 'left',
                      paddingLeft: '5%',
                      paddingRight: '5%',
                      display: 'flex',

                      color: 'black',
                    }}
                  >
                    <p
                      style={{
                        paddingLeft: '3%',
                        fontWeight: '600',
                      }}
                    >
                      김일환님이 신규 가입하셨습니다
                      <p style={{ paddingTop: '5%', fontWeight: '100' }}>
                        본 직무는 웹프론트엔드이며 수준은 초심자입니다. 😊{' '}
                      </p>
                    </p>
                  </div>
                </a>
              </div>
              <div
                style={{
                  marginBottom: '1%',
                  border: '1px solid rgb(222,222,222)',
                  alignItems: 'center',
                }}
              >
                <a href='#' style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      textAlign: 'left',
                      paddingLeft: '5%',
                      paddingRight: '5%',
                      display: 'flex',

                      color: 'black',
                    }}
                  >
                    <p
                      style={{
                        paddingLeft: '3%',
                        fontWeight: '600',
                      }}
                    >
                      5/1 (월)은 회의는 6/12(월)로 변경되어 진행예상됩니다 !
                      <p style={{ paddingTop: '5%', fontWeight: '100' }}>
                        회의때 필요한 자료나 정보 있으면 말해주세요 !!
                      </p>
                    </p>
                  </div>
                </a>
              </div>
              <div
                style={{
                  marginBottom: '1%',
                  border: '1px solid rgb(222,222,222)',
                  alignItems: 'center',
                }}
              >
                <a href='#' style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      textAlign: 'left',
                      paddingLeft: '5%',
                      paddingRight: '5%',
                      display: 'flex',

                      color: 'black',
                    }}
                  >
                    <p
                      style={{
                        paddingLeft: '3%',
                        fontWeight: '600',
                      }}
                    >
                      유승민님이 신규 가입하셨습니다
                      <p style={{ paddingTop: '5%', fontWeight: '100' }}>
                        본 직무는 DB/빅데이터/DS이며 수준은 초보입니다. 😊
                      </p>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {writeNotification ? (
          <div
            className='g-col-6 g-col-md-4'
            style={{
              border: '1px solid rgb(222,222,222)',
              width: '90%',
              backgroundColor: 'white',
              borderRadius: '5px',
            }}
          >
            <h2
              style={{ marginTop: '5%', fontSize: '20px', fontWeight: '700' }}
            >
              공지 작성
            </h2>
            <div
              className='comment_object'
              style={{ backgroundColor: '#f7f7f7' }}
            >
              <div className='comment_user'>
                <div></div>
              </div>
              <form>
                <div
                  className='comment_input'
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p style={{ fontSize: '15px' }}>날짜</p>
                  <textarea
                    rows='4'
                    id='comment_box'
                    placeholder='날짜를 입력해주세요.'
                  ></textarea>
                  <button
                    type='submit'
                    className='comment_btn'
                    onClick={() => {}}
                  >
                    등록
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div
          className='g-col-6 g-col-md-4'
          style={{
            border: '1px solid rgb(222,222,222)',
            width: '50%',
            backgroundColor: 'white',
            borderRadius: '5px',
          }}
        >
          <CarouselCard></CarouselCard>
          <div style={{ position: 'sticky', top: '100px' }}>
            <div
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '20px',
                alignItems: 'center',
                textAlign: 'center',

                display: 'flex',
              }}
            >
              <p
                style={{
                  textAlign: 'center',
                  width: '100%',

                  alignItems: 'center',
                  backgroundColor: 'rgb(148,179,248)',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 0px',
                  marginRight: '1%',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setNotification(true);
                  setShowTalk(false);
                  setCalendar(false);
                  setWriteNotification(false);
                }}
              >
                공지보기
              </p>
              <p
                style={{
                  textAlign: 'center',
                  width: '100%',

                  alignItems: 'center',
                  backgroundColor: 'rgb(148,179,248)',
                  color: '#fff',
                  border: 'none',
                  marginRight: '1%',
                  padding: '10px 0px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setCalendar(true);
                  setNotification(false);
                  setShowTalk(false);
                  setWriteNotification(false);
                }}
              >
                캘린더
              </p>
              <p
                style={{
                  textAlign: 'center',
                  width: '100%',

                  alignItems: 'center',
                  backgroundColor: 'rgb(148,179,248)',
                  color: '#fff',
                  border: 'none',
                  marginRight: '1%',
                  padding: '10px 0px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setShowTalk(true);
                  setWriteNotification(false);
                  setNotification(false);
                  setCalendar(false);
                }}
              >
                멤버정보
              </p>
              <p
                style={{
                  textAlign: 'center',
                  width: '100%',

                  alignItems: 'center',
                  backgroundColor: 'rgb(148,179,248)',
                  color: '#fff',
                  border: 'none',
                  marginRight: '1%',
                  padding: '10px 0px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setWriteNotification(true);
                  setCalendar(false);
                  setNotification(false);
                  setShowTalk(false);
                }}
              >
                공지작성
              </p>
            </div>

            <div className='chat-container'>
              <div className='chat-box'>
                <h2 style={{ fontWeight: '300' }}>{talkList[0].title}톡방</h2>

                {chatHistory.map((a, i) => {
                  return (
                    <>
                      {developerDetail.id == chatHistory[i].userId ? (
                        <div className='Mychat-message'>
                          <p className='assistant'>{chatHistory[i].comment}</p>
                        </div>
                      ) : (
                        <div style={{ display: 'flex' }}>
                          <div className='profile__thumbnail'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                allDevDto[chatHistory[i].userId - 1].imgURL
                              }
                              width='30%'
                              style={{ paddingTop: '3%', paddingBottom: '3%' }}
                            ></img>
                          </div>
                          <div className='txtWrap'>
                            <div className='title'>
                              {allDevDto[chatHistory[i].userId - 1].name}
                            </div>
                            <div className='chat-message'>
                              <p className='assistant'>하이!</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
              <div className='chat-input'>
                <input
                  id='chat__content'
                  type='text'
                  placeholder='Type your message here...'
                />
                <button
                  onClick={() => {
                    insertCommentChat(
                      document.getElementById('chat__content').value
                    );
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselCard() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <h4 style={{ float: 'left', paddingBottom: '5%' }}>❗공지사항</h4>
      <Carousel
        style={{ padding: '10px 20px' }}
        showThumbs={false}
        showStatus={false}
        slide={false}
        interval={2000}
        //onSlid={(key, direction)=>onSlid(key, direction)}
        indicators={false}
        variant='dark'
      >
        <Carousel.Item>
          <p style={{ alignItems: 'center' }}>하이</p>
        </Carousel.Item>
        <Carousel.Item>
          <p style={{ alignItems: 'center' }}>하이하이하이하이하이</p>
        </Carousel.Item>
        <Carousel.Item>
          <p style={{ alignItems: 'center' }}>하이하이하이하이ddd하이</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default TalkDetail;
