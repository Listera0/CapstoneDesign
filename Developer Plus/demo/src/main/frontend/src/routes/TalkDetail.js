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
            <div
              style={{
                display: 'flex',
                padding: '15px 15px',
                cursor: 'pointer',
              }}
              onClick={() => {}}
            >
              <div className='showTalk__thumbnail'>
                <img
                  src={process.env.PUBLIC_URL + developerDetail.imgURL}
                  width='100%'
                  style={{ paddingTop: '3%', paddingBottom: '3%' }}
                ></img>
              </div>
              <div className='txtWrap'>
                <div className='title'>{developerDetail.name}</div>
                <div className='content'>{developerDetail.job}</div>
                <div className='content'>{developerDetail.jobDetail}</div>
              </div>
            </div>
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
            <form>
              <div style={{ margin: '10% 5%', padding: '100px 10px' }}>
                <div style={{ display: 'flex', marginBottom: '3%' }}>
                  <span>날짜</span>
                  <input type='text' style={{ width: '70%' }}></input>
                </div>
                <div style={{ display: 'flex', marginBottom: '3%' }}>
                  <span>중요도</span>
                  <input type='text' style={{ width: '70%' }}></input>
                </div>
                <div style={{ display: 'flex', marginBottom: '3%' }}>
                  <span>내용</span>
                  <textarea></textarea>
                </div>
                <div>
                  <button>등록하기</button>
                </div>
              </div>
            </form>
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
                <h2 style={{ fontWeight: '300' }}>{developerDetail.name}</h2>
                <div
                  style={{
                    display: 'flex',
                    padding: '15px 15px',
                    cursor: 'pointer',
                  }}
                >
                  <div className='profile__thumbnail'>
                    <img
                      src={process.env.PUBLIC_URL + developerDetail.imgURL}
                      width='30%'
                      style={{ paddingTop: '3%', paddingBottom: '3%' }}
                    ></img>
                  </div>
                  <div className='txtWrap'>
                    <div className='title'>{developerDetail.name}</div>
                    <div className='chat-message'>
                      <p className='assistant'>하이!</p>
                    </div>
                  </div>
                </div>
                <div className='Mychat-message'>
                  <p className='assistant'>안녕하세요하이!하이!안녕하세요</p>
                </div>
              </div>
              <div className='chat-input'>
                <input type='text' placeholder='Type your message here...' />
                <button>Send</button>
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
