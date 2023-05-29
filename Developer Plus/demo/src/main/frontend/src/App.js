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
import Serach from './routes/Serach';
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
library.add(fab);
let MobileDeveloper = styled.div`
  width: 25%;
  @media screen and (max-width: 768px) {
    disply: inline;
    width: 120%;
    overflow-x: scroll;
    white-space: nowrap;
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
        if(_location == "developer") {
          setDevLikeCountData(response.data);
        }
        else if(_location == "story") {
          setStoryLikeCountData(response.data);
        }
        else if(_location == "project") {
          setProjectLikeCountData(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (sessionStorage.getItem('id') === null) {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      getDto('Dev', sessionStorage.getItem('id'), '', '');
      getLikeCount("developer", sessionStorage.getItem('id'));
      // 아래 두개는 데이터베이스 완성시 추가
      // getLikeCount("story", sessionStorage.getItem('id'));
      // getLikeCount("project", sessionStorage.getItem('id'));
    }
  });

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
          orderBy: 'id desc',
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
        .post('/api/getProjectData', { id: '', orderBy: 'id ', limit: '3' })
        .then((response) => setRankingProjectDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }

  const [likeBool, setLikeBool] = useState(false);
  const likeInput = (_location, _userId, _targetId) => {
    axios
      .post('/api/likeInput', {
        location: _location,
        userId: _userId,
        targetId: _targetId,
      })
      .then((response) => setLikeBool(response.data))
      .catch((error) => console.log(error));
  };
  const showDataList = (list) => {
    console.log(list);
  };
  let [modal, setModal] = useState(true);
  // const [liked, setLiked] = useState(rankingDevDto[i].userLike);
  // const [likeCount, setLikeCount] = useState(
  //   props.rankingDevDto[props.i].likeCount
  // );
  return (
    <div className='App ' style={{ margin: '0' }}>
      {/* {showDataList(allDevDto)} */}
      {/* {showDataList(allStoryDto)} */}
      {/* {showDataList(allProjectDto)} */}
      {/* {showDataList(rankingDevDto)} */}
      {/* {showDataList(rankingStoryDto)} */}
      {/* {showDataList(resultDto)} */}
      {/* <Routes>
        <Route path='/FindDeveloper' element={<Filiter />}></Route>
        <Route path='/ViewDeveloper' element={<Filiter />}></Route>
      </Routes> */}
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
                        navigate={navigate}
                        rankingStoryDto={rankingStoryDto}
                        allStoryDto={allStoryDto}
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
                    let jobDetail =
                      rankingDevDto[i].job != null
                        ? rankingDevDto[i].job.split(',')
                        : '';
                    let careerDetail =
                      rankingDevDto[i].career != null
                        ? rankingDevDto[i].career.split(',')
                        : '';
                    return (
                      <>
                        <DeveloperCard
                          i={i}
                          a={a}
                          navigate={navigate}
                          rankingDevDto={rankingDevDto}
                          allDevDto={allDevDto}
                          jobDetail={jobDetail}
                          careerDetail={careerDetail}
                          likeInput={likeInput}
                          resultDto={resultDto}
                          setLikeBool={setLikeBool}
                          likeBool={likeBool}
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
          element={<Story allStoryDto={allStoryDto} navigate={navigate} />}
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
          element={<StoryDetail story={story} />}
        ></Route>
        <Route
          path='/profile/:id'
          element={
            <Profile developer={developer} setDeveloper={setDeveloper} />
          }
        ></Route>
        <Route path='/serach' element={<Serach />}></Route>
        <Route path='/login' element={<Login navigate={navigate} />}></Route>
        <Route path='/talk' element={<Talk />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/write' element={<Write />}></Route>
        <Route path='/KakaoLogin' element={<KakaoLogin />}></Route>
      </Routes>
      <Footer navigate={navigate}></Footer>
    </div>
  );
}

function StoryCard(props) {
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
              props.navigate(
                `/ViewStoryDetail/${props.rankingStoryDto[props.i].id}`
              );
            }}
          >
            <img
              className='col-img'
              src={process.env.PUBLIC_URL + '/main' + (props.i + 1) + '.jpg'}
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
                justifyContent: 'space-between',
              }}
            >
              <div>
                <FontAwesomeIcon icon={farEye} size='2x' />
              </div>
              <div>
                <FontAwesomeIcon icon={farCommentDots} size='2x' />
              </div>
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon icon={farHeart} style={{ fontSize: '20px' }} />{' '}
                {props.rankingStoryDto[props.i].id}
              </div>
              <div>
                <FontAwesomeIcon icon={farBookmark} size='2x' />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
function ProjectCard(props) {
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
              props.navigate(
                `/FindDeveloperDetail/${props.rankingProjectDto[props.i].id}`
              );
            }}
          >
            <img
              className='col-img'
              src={process.env.PUBLIC_URL + '/main' + (props.i + 1) + '.jpg'}
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
                justifyContent: 'space-between',
              }}
            >
              <div>
                <FontAwesomeIcon icon={farEye} size='2x' />
              </div>
              <div>
                <FontAwesomeIcon icon={farCommentDots} size='2x' />
              </div>
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon icon={farHeart} style={{ fontSize: '20px' }} />{' '}
                {props.rankingProjectDto[props.i].id}
              </div>
              <div>
                <FontAwesomeIcon icon={farBookmark} size='2x' />
              </div>
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
      for(let k = 0; k < props.devLikeCountData.length; k++) {
        if(props.devLikeCountData[k].targetId == props.rankingDevDto[props.i].id) {
          setLikeCountDetail(props.devLikeCountData[k].like);
          flag = true;
          break;
        }
      }
      if(flag == false) {
        setLikeCountDetail(false);
      }
    });
  };

  const showLikeCount = () => {
    likeCountDetail == true ? props.rankingDevDto[props.i].likeCount-- : props.rankingDevDto[props.i].likeCount++;
    likeCountDetail == true ? setLikeCountDetail(false) : setLikeCountDetail(true);
  };

  return (
    <MobileDeveloper>
      <div className='d-flex justify-content-around ' style={{}}>
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
              src={`${process.env.PUBLIC_URL}/${
                props.rankingDevDto[props.i].imgURL
              }.jpg`}
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
                <div style={{ paddingLeft: '5%' }}>{props.jobDetail[0]}</div>
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
                [전문분야]
                <div style={{ paddingLeft: '5%' }}>{props.jobDetail[1]}</div>
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
                <div style={{ paddingLeft: '5%' }}>{props.careerDetail[0]}</div>
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
                >
                  대화하기
                </span>
              </div>
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    fontSize: '20px',
                    color: '#f1928e',
                  }}
                  onClick={() => {
                    props.likeInput('developer',  props.resultDto[0].id, props.rankingDevDto[props.i].id);
                    if(props.isLogin) {showLikeCount()}
                  }}
                />{' '}
                {props.rankingDevDto[props.i].likeCount}
              </div>
              <div>
                <FontAwesomeIcon icon={farBookmark} size='2x' />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </MobileDeveloper>
  );
}

function NavBar(props) {
  if (props.isLogin == false) {
    return (
      <nav
        className='navbar navbar-expand-lg bg-light '
        style={{
          padding: '1% 5%',
          border: 'rgba(0,0,0,1)',
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
        className='navbar navbar-expand-lg bg-light '
        style={{
          padding: '1% 5%',
          border: 'rgba(0,0,0,1)',
        }}
      >
        <div className='container-fluid'>
          <a
            className='navbar-brand'
            onClick={() => {
              props.navigate('/');
            }}
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
