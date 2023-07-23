import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { faN } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { data, projectData, developerData } from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import StoryDetail from './routes/StoryDetail';
import ViewDeveloperDetail from './routes/ViewDeveloperDetail';
import FindDeveloperDetail from './routes/FindDeveloperDetail';
import SignUp from './routes/SignUp';
import Story from './routes/Story';
import Write from './routes/Write';
import FindDeveloper from './routes/FindDeveloper';
import ViewDeveloper from './routes/ViewDeveloper';
import Footer from './components/Footer';
import Profile from './routes/Profile';
import Serach from './routes/Search';
import TalkDetail from './routes/TalkDetail';
import Talk from './routes/Talk';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons';
import { faCommentDots as farCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import Login from './routes/Login';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLogin from './routes/KakaoLogin';
import ProfileDetail from './routes/ProfileDetail';

library.add(fab);
let MobileDeveloper = styled.div`
  width: 25%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
let Scroll = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    overflow-x: auto;
  }
`;
function App() {
  let [story, setStory] = useState(data);
  let [project, setProject] = useState(projectData);
  let [developer, setDeveloper] = useState(developerData);
  let { id } = useParams();
  let [goodCount, changeGoodCount] = useState(false);
  let navigate = useNavigate(); //페이지 이동

  const [resultDto, setResultDto] = useState(['']);
  const [view, setView] = useState(false);

  const [isLogin, setIsLogin] = useState(false); //로그인 관리
  const [devLikeCountData, setDevLikeCountData] = useState(['']);
  const [storyLikeCountData, setStoryLikeCountData] = useState(['']);
  const [projectLikeCountData, setProjectLikeCountData] = useState(['']);
  const viewInput = (location, _id, _viewCount) => {
    axios
      .post('/api/viewInput' + location, {
        id: _id,
        viewCount: _viewCount,
      })
      .then()
      .catch((error) => console.log(error));
  };
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

  const getLikeCount = (_location, _id) => {
    axios
      .post('/api/userLikeCount', {
        location: _location,
        userId: _id,
      })
      .then((response) => {
        if (_location == 'developer') {
          setDevLikeCountData(response.data);
        } else if (_location == 'story') {
          setStoryLikeCountData(response.data);
        } else if (_location == 'project') {
          setProjectLikeCountData(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  const [session, setsession] = useState(sessionStorage.getItem('id'));
  const handleClick = () => {
    sessionStorage.removeItem('id');
    setsession(null);
    window.location.reload();
  };

  const [allDevDto, setAllDevDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllDevData')
        .then((response) => setAllDevDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

  const [allStoryDto, setAllStoryDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllStoryData')
        .then((response) => setAllStoryDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

  const [allProjectDto, setAllProjectDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllProjectData')
        .then((response) => setAllProjectDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

  const [rankingDevDto, setRankingDevDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getDevData', {
          id: '',
          orderBy: 'likeCount desc',
          limit: '4',
        })
        .then((response) => setRankingDevDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

  const [rankingStoryDto, setRankingStoryDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getStoryData', {
          id: '',
          orderBy: 'likeCount desc',
          limit: '3',
        })
        .then((response) => setRankingStoryDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

  const [rankingProjectDto, setRankingProjectDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getProjectData', {
          id: '',
          orderBy: 'likeCount desc',
          limit: '3',
        })
        .then((response) => setRankingProjectDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

  const likeInput = (_location, _userId, _targetId) => {
    axios
      .post('/api/likeInput', {
        location: _location,
        userId: _userId,
        targetId: _targetId,
      })
      .then()
      .catch((error) => console.log(error));
  };
  const showDataList = (list) => {
    console.log(list);
  };
  let [modal, setModal] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('id') === null) {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      getDto('Dev', sessionStorage.getItem('id'), '', '');
      getLikeCount('developer', sessionStorage.getItem('id'));
      // 아래 두개는 데이터베이스 완성시 추가
      getLikeCount('story', sessionStorage.getItem('id'));
      getLikeCount('project', sessionStorage.getItem('id'));
    }
  }, []);

  return (
    <div className='App ' style={{ margin: '0' }}>
      <NavBar
        navigate={navigate}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        resultDto={resultDto}
        setResultDto={setResultDto}
        view={view}
        setView={setView}
        session={session}
        setsession={setsession}
        handleClick={handleClick}
      ></NavBar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <CarouselCard></CarouselCard>

              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    {' '}
                    <h6 className='hotboard'>핫한 스토리</h6>
                  </div>
                  <div className='col-6'>
                    <a
                      onClick={() => {
                        navigate('/Story');
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      전체보기
                    </a>
                  </div>
                  {rankingStoryDto.map((a, i) => {
                    return (
                      <StoryCard
                        i={i}
                        story={story}
                        navigate={navigate}
                        rankingStoryDto={rankingStoryDto}
                        allStoryDto={allStoryDto}
                        viewInput={viewInput}
                        storyLikeCountData={storyLikeCountData}
                        likeInput={likeInput}
                        resultDto={resultDto}
                        isLogin={isLogin}
                      ></StoryCard>
                    );
                  })}
                </div>
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <h6 className='hotboard'>핫한 프로젝트</h6>
                  </div>
                  <div className='col-6'>
                    <a
                      onClick={() => {
                        navigate('/FindDeveloper');
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      전체보기
                    </a>
                  </div>

                  {rankingProjectDto.map((a, i) => {
                    return (
                      <ProjectCard
                        project={project}
                        i={i}
                        navigate={navigate}
                        rankingProjectDto={rankingProjectDto}
                        allProjectDto={allProjectDto}
                        viewInput={viewInput}
                        projectLikeCountData={projectLikeCountData}
                        likeInput={likeInput}
                        resultDto={resultDto}
                        isLogin={isLogin}
                      ></ProjectCard>
                    );
                  })}
                </div>
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <h6 className='hotboard'>핫한 개발자</h6>
                  </div>
                  <div className='col-6'>
                    <a
                      onClick={() => {
                        navigate('/ViewDeveloper');
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      전체보기
                    </a>
                  </div>

                  {rankingDevDto.map((a, i) => {
                    return (
                      <>
                        <DeveloperCard
                          i={i}
                          a={a}
                          navigate={navigate}
                          rankingDevDto={rankingDevDto}
                          allDevDto={allDevDto}
                          likeInput={likeInput}
                          resultDto={resultDto}
                          devLikeCountData={devLikeCountData}
                          isLogin={isLogin}
                        ></DeveloperCard>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          }
        ></Route>

        <Route
          path='/ViewDeveloperDetail/:id'
          element={
            <ViewDeveloperDetail
              allDevDto={allDevDto}
              goodCount={goodCount}
              changeGoodCount={changeGoodCount}
              rankingDevDto={rankingDevDto}
            />
          }
        ></Route>
        <Route
          path='/FindDeveloperdetail/:id'
          element={<FindDeveloperDetail allProjectDto={allProjectDto} />}
        ></Route>
        <Route
          path='/Story'
          element={
            <Story
              allStoryDto={allStoryDto}
              navigate={navigate}
              // setChatDetail={setChatDetail}
              // chatDetail={chatDetail}
            />
          }
        ></Route>
        <Route
          path='/FindDeveloper'
          element={
            <FindDeveloper
              project={project}
              allProjectDto={allProjectDto}
              navigate={navigate}
            />
          }
        ></Route>
        <Route
          path='/ViewDeveloper'
          element={
            <ViewDeveloper
              developer={developer}
              goodCount={goodCount}
              changeGoodCount={changeGoodCount}
              setDeveloper={setDeveloper}
              navigate={navigate}
              allDevDto={allDevDto}
            />
          }
        ></Route>

        <Route
          path='/ViewStoryDetail/:id'
          element={
            <StoryDetail
              story={story}
              allDevDto={allDevDto}
              // setChatDetail={setChatDetail}
              // chatDetail={chatDetail}
              // getChatHistory={getChatHistory}
            />
          }
        ></Route>
        <Route
          path='/profile/:id'
          element={
            <Profile developer={developer} setDeveloper={setDeveloper} />
          }
        ></Route>
        <Route
          path='/serach'
          element={<Serach allDevDto={allDevDto} />}
        ></Route>
        <Route path='/login' element={<Login navigate={navigate} />}></Route>
        <Route
          path='/talk/:id'
          element={<Talk developer={developer} setDeveloper={setDeveloper} />}
        ></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/write' element={<Write />}></Route>
        <Route path='/KakaoLogin' element={<KakaoLogin />}></Route>
        <Route path='/profileDetail' element={<ProfileDetail />}></Route>
        <Route
          path='/talkDetail/:id'
          element={
            <TalkDetail developer={developer} setDeveloper={setDeveloper} />
          }
        ></Route>
      </Routes>
      <Footer navigate={navigate}></Footer>
    </div>
  );
}

function StoryCard(props) {
  const [likeCountDetail, setLikeCountDetail] = useState('');
  {
    useEffect(() => {
      let flag = false;
      for (let k = 0; k < props.storyLikeCountData.length; k++) {
        if (
          props.storyLikeCountData[k].targetId ==
          props.rankingStoryDto[props.i].id
        ) {
          setLikeCountDetail(props.storyLikeCountData[k].like);
          flag = true;
          break;
        }
      }
      if (flag == false) {
        setLikeCountDetail(false);
      }
    }, [props.storyLikeCountData, props.rankingStoryDto, props.i]);
  }

  const showLikeCount = () => {
    likeCountDetail == true
      ? props.rankingStoryDto[props.i].likeCount--
      : props.rankingStoryDto[props.i].likeCount++;
    likeCountDetail == true
      ? setLikeCountDetail(false)
      : setLikeCountDetail(true);
  };
  return (
    <div
      className='col-4 '
      style={{
        padding: '1%',
        width: '33%',
      }}
    >
      <div className='d-flex justify-content-around '>
        <Card style={{ width: '18rem' }}>
          <div
            className='col-div '
            style={{ overflow: 'hidden' }}
            onClick={() => {
              props.viewInput(
                'Story',
                props.rankingStoryDto[props.i].id,
                props.rankingStoryDto[props.i].viewCount
              );
              props.navigate(
                `/ViewStoryDetail/${props.rankingStoryDto[props.i].id}`
              );
            }}
          >
            <img
              className='col-img'
              src={
                process.env.PUBLIC_URL + props.rankingStoryDto[props.i].imgURL
              }
              width='100vw'
            ></img>
          </div>
          <Card.Body>
            <Card.Title className='col-content' style={{ fontSize: '13px' }}>
              {props.rankingStoryDto[props.i].title}
            </Card.Title>
            <Card.Text className='col-content' style={{ fontSize: '10px' }}>
              {props.rankingStoryDto[props.i].name}
            </Card.Text>
            <hr></hr>
            <div
              style={{
                display: 'flex',
                fontSize: '10px',
                justifyContent: 'end',
              }}
            >
              <div style={{ fontSize: '15px', marginRight: '7%' }}>
                <FontAwesomeIcon icon={farEye} style={{ fontSize: '20px' }} />{' '}
                {props.rankingStoryDto[props.i].viewCount}
              </div>
              {/* <div>
                <FontAwesomeIcon icon={farCommentDots} size='2x' />
              </div> */}
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon
                  icon={farHeart}
                  style={{ fontSize: '20px', cursor: 'pointer' }}
                  onClick={() => {
                    if (props.isLogin) {
                      props.likeInput(
                        'story',
                        props.resultDto[0].id,
                        props.rankingStoryDto[props.i].id
                      );
                      showLikeCount();
                    }
                  }}
                />{' '}
                {props.rankingStoryDto[props.i].likeCount}
              </div>
              {/* <div>
                <FontAwesomeIcon icon={farBookmark} size='2x' />
              </div> */}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
function ProjectCard(props) {
  const [likeCountDetail, setLikeCountDetail] = useState('');
  {
    useEffect(() => {
      let flag = false;
      for (let k = 0; k < props.projectLikeCountData.length; k++) {
        if (
          props.projectLikeCountData[k].targetId ==
          props.rankingProjectDto[props.i].id
        ) {
          setLikeCountDetail(props.projectLikeCountData[k].like);
          flag = true;
          break;
        }
      }
      if (flag == false) {
        setLikeCountDetail(false);
      }
    });
  }

  const showLikeCount = () => {
    likeCountDetail == true
      ? props.rankingProjectDto[props.i].likeCount--
      : props.rankingProjectDto[props.i].likeCount++;
    likeCountDetail == true
      ? setLikeCountDetail(false)
      : setLikeCountDetail(true);
  };

  return (
    <div
      className='col-4 '
      style={{
        padding: '1%',
        width: '33%',
      }}
    >
      <div className='d-flex justify-content-around '>
        <Card style={{ width: '18rem' }}>
          <div
            className='col-div '
            style={{ overflow: 'hidden' }}
            onClick={() => {
              props.viewInput(
                'Project',
                props.rankingProjectDto[props.i].id,
                props.rankingProjectDto[props.i].viewCount
              );
              props.navigate(
                `/FindDeveloperDetail/${props.rankingProjectDto[props.i].id}`
              );
            }}
          >
            <img
              className='col-img'
              src={
                process.env.PUBLIC_URL + props.rankingProjectDto[props.i].imgURL
              }
              width='100vw'
            ></img>
          </div>
          <Card.Body>
            <Card.Title className='col-content' style={{ fontSize: '13px' }}>
              {props.rankingProjectDto[props.i].title}
            </Card.Title>
            <Card.Text className='col-content' style={{ fontSize: '10px' }}>
              {props.rankingProjectDto[props.i].name}
            </Card.Text>
            <hr></hr>
            <div
              style={{
                display: 'flex',
                fontSize: '10px',
                justifyContent: 'end',
              }}
            >
              <div style={{ fontSize: '15px', marginRight: '7%' }}>
                <FontAwesomeIcon icon={farEye} style={{ fontSize: '20px' }} />{' '}
                {props.rankingProjectDto[props.i].viewCount}
              </div>
              {/* <div>
                <FontAwesomeIcon icon={farCommentDots} size='2x' />
              </div> */}
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon
                  icon={farHeart}
                  style={{ fontSize: '20px', cursor: 'pointer' }}
                  onClick={() => {
                    if (props.isLogin) {
                      props.likeInput(
                        'project',
                        props.resultDto[0].id,
                        props.rankingProjectDto[props.i].id
                      );
                      showLikeCount();
                    }
                  }}
                />{' '}
                {props.rankingProjectDto[props.i].likeCount}
              </div>
              {/* <div>
                <FontAwesomeIcon icon={farBookmark} size='2x' />
              </div> */}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
function DeveloperCard(props) {
  const [likeCountDetail, setLikeCountDetail] = useState('');
  {
    useEffect(() => {
      let flag = false;
      for (let k = 0; k < props.devLikeCountData.length; k++) {
        if (
          props.devLikeCountData[k].targetId == props.rankingDevDto[props.i].id
        ) {
          setLikeCountDetail(props.devLikeCountData[k].like);
          flag = true;
          break;
        }
      }
      if (flag == false) {
        setLikeCountDetail(false);
      }
    });
  }

  const showLikeCount = () => {
    likeCountDetail == true
      ? props.rankingDevDto[props.i].likeCount--
      : props.rankingDevDto[props.i].likeCount++;
    likeCountDetail == true
      ? setLikeCountDetail(false)
      : setLikeCountDetail(true);
  };

  return (
    <MobileDeveloper>
      <Scroll>
        <Card style={{}}>
          <div
            className='col-div'
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => {
              props.navigate(
                `/ViewDeveloperDetail/${props.rankingDevDto[props.i].id}`
              );
            }}
          >
            <img
              style={{
                paddingTop: '3%',
                cursor: 'pointer',
                paddingLeft: '10%',
                marginRight: '15%',
              }}
              src={`${process.env.PUBLIC_URL}${
                props.rankingDevDto[props.i].imgURL
              }`}
            ></img>
            <Card.Text className='col-content' style={{ paddingTop: '3%' }}>
              <span style={{ fontSize: '18px' }}>
                {props.rankingDevDto[props.i].name}
              </span>
            </Card.Text>
          </div>

          <Card.Body>
            <Card.Text className='col-content'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '3%',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                [직무]
                <div style={{ paddingLeft: '5%' }}>
                  {props.rankingDevDto[props.i].job}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '3%',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                [분야]
                <div style={{ paddingLeft: '5%' }}>
                  {props.rankingDevDto[props.i].jobDetail}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '3%',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                [경력]
                <div style={{ paddingLeft: '5%' }}>
                  {props.rankingDevDto[props.i].career}
                </div>
              </div>
            </Card.Text>
            <Card.Text className='col-content'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '3%',
                  fontSize: '12px',
                  fontWeight: '400',
                }}
              >
                참여중인 프로젝트 &nbsp;
                <div style={{ fontWeight: '700', color: 'rgb(148,179,248)' }}>
                  {props.rankingDevDto[props.i].projectCount}&nbsp;
                </div>
                개 있습니다.
              </div>
            </Card.Text>
            <hr></hr>
            <div
              style={{
                display: 'flex',
                fontSize: '10px',
                justifyContent: 'space-around',
              }}
            >
              <div style={{ fontSize: '15px' }}>
                <span
                  style={{
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                  onClick={() => {
                    window.open('https://open.kakao.com/o/gjmA85pf', '_blank');
                  }}
                >
                  대화하기
                </span>
              </div>
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon
                  icon={farHeart}
                  style={{
                    fontSize: '20px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    if (props.isLogin) {
                      props.likeInput(
                        'developer',
                        props.resultDto[0].id,
                        props.rankingDevDto[props.i].id
                      );
                      showLikeCount();
                    }
                  }}
                />{' '}
                {props.rankingDevDto[props.i].likeCount}
              </div>
              {/* <div>
                <FontAwesomeIcon icon={farBookmark} size='2x' />
              </div> */}
            </div>
          </Card.Body>
        </Card>
      </Scroll>
    </MobileDeveloper>
  );
}

function NavBar(props) {
  if (props.isLogin == false) {
    return (
      <nav
        className='navbar navbar-expand-lg  '
        style={{
          padding: '1% 5%',
          border: 'rgba(0,0,0,1)',
          backgroundColor: 'white',
        }}
      >
        <div className='container-fluid'>
          <a
            className='navbar-brand'
            onClick={() => {
              props.navigate('/');
            }}
            style={{ fontWeight: '700', cursor: 'pointer' }}
          >
            Developer Plus
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav m-auto'>
              <li
                className='nav-item me-5'
                onClick={() => {
                  props.navigate('/findDeveloper');
                }}
                style={{
                  color: 'black',
                  fontWeight: '700',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                프로젝트{' '}
              </li>

              <li
                className='nav-item me-5'
                onClick={() => {
                  props.navigate('/viewDeveloper');
                }}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                개발자{' '}
              </li>
              <li
                className='nav-item me-5'
                onClick={() => {
                  props.navigate('/story');
                }}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                스토리{' '}
              </li>
              <li
                className='nav-item me-5 sub'
                onClick={() => {
                  props.navigate('/serach');
                }}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                통합검색{' '}
              </li>
            </ul>

            <ul className='navbar-nav '>
              <li
                className='nav-item me-5'
                onClick={() => {
                  props.navigate('/Login');
                }}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: '700',
                  padding: '8px 15px',
                  backgroundColor: 'black',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                로그인 | 회원가입{' '}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        className='navbar navbar-expand-lg  '
        style={{
          padding: '1% 5%',
          border: 'rgba(0,0,0,1)',
          backgroundColor: 'white',
        }}
      >
        <div className='container-fluid'>
          <a
            className='navbar-brand'
            onClick={() => {
              props.navigate('/');
            }}
            style={{ fontWeight: '700', cursor: 'pointer' }}
          >
            Developer Plus
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav m-auto'>
              <li
                className='nav-item me-5'
                onClick={() => {
                  props.navigate('/findDeveloper');
                }}
                style={{
                  color: 'black',
                  fontWeight: '700',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                프로젝트{' '}
              </li>

              <li
                className='nav-item me-5'
                onClick={() => {
                  props.navigate('/viewDeveloper');
                }}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                개발자{' '}
              </li>
              <li
                className='nav-item me-5'
                onClick={() => {
                  props.navigate('/story');
                }}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                스토리{' '}
              </li>
              <li
                className='nav-item me-5 sub'
                onClick={() => {
                  props.navigate('/serach');
                }}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                통합검색{' '}
              </li>
            </ul>

            <ul className='navbar-nav m-auto'>
              <li
                className='nav-item me-5 sub'
                onClick={() => {
                  props.navigate(`/write`);
                }}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                글작성하기
              </li>
              <li
                className='nav-item me-5 sub'
                onClick={() => {
                  props.navigate(`/profile/${props.resultDto[0].id}`);
                }}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                {props.resultDto[0].name}
              </li>
              <li
                className='nav-item me-5 sub'
                onClick={props.handleClick}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                로그아웃
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function CarouselCard() {
  return (
    <Carousel style={{ paddingBottom: '10px' }}>
      <Carousel.Item>
        <div className='carousel_height'>
          <img src={process.env.PUBLIC_URL + 'c3.jpg'} width='100%' />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + 'c1.jpg'} width='100%' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + 'c2.png'} width='100%' />
      </Carousel.Item>
    </Carousel>
  );
}

export default App;
