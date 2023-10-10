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
  ///api/getChatAlert

  const [allAlert, setAllAlertDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getChatAlert', {
          targetChat: id,
        })
        .then((response) => setAllAlertDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

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
  // targetChat | writer | date | comment
  const insertChatAlert = (_date, _comment) => {
    axios
      .post('/api/insertChatAlert', {
        targetChat: id,
        writer: sessionStorage.getItem('id'),
        date: _date,
        comment: _comment,
      })
      .then(console.log(document.getElementById('comment_date').value))

      .catch((error) => console.log(error));
  };
  //(id, userId, content)
  const insertCommentChat = (_content) => {
    axios
      .post('/api/insertCommentChat', {
        id: id,
        userId: sessionStorage.getItem('id'),
        content: _content,
      })
      .then(console.log('active'));
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
  const [sectionCount, setSectionCount] = useState(5);

  const [chatHistory, setChatHistory] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getCommentChatHistory', {
          id: id,
          section: sectionCount,
        })
        .then((response) => {
          setChatHistory(response.data);
        })
        .catch((error) => console.log(error));
    });
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
            <Calendar
              setAllAlertDto={setAllAlertDto}
              allAlert={allAlert}
            ></Calendar>
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
                    </>
                  ) : (
                    <div>ds</div>
                  )}
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

                  {memberIdArray.map((value, index) => {
                    // ... JSX 내에서 value 값을 사용할 수 있도록 변수를 할당
                    const memberName = allDevDto[value - 1].name;
                    const memberImg = allDevDto[value - 1].imgURL;
                    const memberJobDetail = allDevDto[value - 1].jobDetail;
                    console.log(memberName);

                    return (
                      <>
                        {memberName != allDevDto[talkDetail[0] - 1].name ? (
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
                              <div className='title'>
                                {allDevDto[value - 1].name}
                              </div>
                              <div className='chat-message'>
                                <p className='assistant'>{memberJobDetail} </p>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </>
                    );
                  })}
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
            {allAlert.map((a, i) => {
              console.log(allAlert[i]);
              if (allAlert[i] != null) {
                return (
                  <>
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
                            {allAlert[i].date}
                            <p style={{ paddingTop: '5%', fontWeight: '100' }}>
                              {allAlert[i].comment}
                            </p>
                          </p>
                        </div>
                      </a>
                    </div>
                  </>
                );
              }
            })}
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

              <div
                className='comment_input'
                style={{
                  display: 'flex',

                  alignItems: 'center',
                }}
              >
                <p style={{ fontSize: '15px', marginRight: '10%' }}>날짜</p>
                <textarea
                  rows='4'
                  id='comment_date'
                  maxLength={12}
                  placeholder='ex) 2023-08-24 목 형식대로 적어주세요'
                ></textarea>
              </div>
              <div style={{ display: 'flex', marginTop: '5%' }}>
                <div style={{ marginRight: '10%' }}>
                  <span>중요도</span>
                </div>

                <div style={{ marginLeft: '5%' }}>
                  <input type='checkbox'></input>
                  <span>중요</span>
                </div>
                <div style={{ marginLeft: '5%' }}>
                  <input type='checkbox'></input>
                  <span>평범</span>
                </div>
                <div style={{ marginLeft: '5%' }}>
                  <input type='checkbox'></input>
                  <span>낮음</span>
                </div>
              </div>
              <div
                className='comment_input'
                style={{
                  display: 'flex',
                  marginTop: '5%',
                  alignItems: 'center',
                }}
              >
                <div style={{ marginRight: '10%' }}>
                  <span>내용 </span>
                </div>

                <textarea
                  rows='4'
                  id='comment_content'
                  placeholder='내용을 입력해주세요.'
                ></textarea>
              </div>
              <button
                className='comment_btn'
                onClick={() => {
                  insertChatAlert(
                    document.getElementById('comment_date').value,
                    document.getElementById('comment_content').value
                  );
                }}
              >
                등록
              </button>
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
                <h2 style={{ fontWeight: '300', fontSize: '20px' }}>
                  {talkList[0].title}톡방
                </h2>
                {/* <button
                  onClick={() => {
                    setSectionCount(sectionCount + 5);
                    console.log(sectionCount);
                  }}
                >
                  더보기
                </button> */}
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
                              style={{
                                paddingTop: '3%',
                                paddingBottom: '3%',
                              }}
                            ></img>
                          </div>
                          <div className='txtWrap'>
                            <div className='title'>
                              {allDevDto[chatHistory[i].userId - 1].name}
                            </div>
                            <div className='chat-message'>
                              <p className='assistant'>
                                {chatHistory[i].comment}
                              </p>
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
          <p style={{ alignItems: 'center' }}></p>
        </Carousel.Item>
        <Carousel.Item>
          <p style={{ alignItems: 'center' }}></p>
        </Carousel.Item>
        <Carousel.Item>
          <p style={{ alignItems: 'center' }}></p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default TalkDetail;
