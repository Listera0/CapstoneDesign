import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { data, projectData, developerData } from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import StoryDetail from './routes/StoryDetail';
import ViewDeveloperDetail from './routes/ViewDeveloperDetail';
import FindDeveloperDetail from './routes/FindDeveloperDetail';
import SignUp from './routes/SignUp';
import Story from './routes/Story';
import FindDeveloper from './routes/FindDeveloper';
import ViewDeveloper from './routes/ViewDeveloper';
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
library.add(fab);

function App() {
  let [story, setStory] = useState(data);
  let [project, setProject] = useState(projectData);
  let [developer, setDeveloper] = useState(developerData);
  let { id } = useParams();
  let [goodCount, changeGoodCount] = useState(false);
  let navigate = useNavigate(); //페이지 이동

  const [resultDto, setResultDto] = useState(['']);
  const [view, setView] = useState(false);
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

  const insertDataToServer = (location, data) => {
    switch (location) {
      case 'Dev':
        data.id = allDevDto.length + 1;
        axios
          .post('/api/insert' + location + 'Data', data)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        break;

      case 'Story':
        data.id = allStoryDto.length + 1;
        axios
          .post('/api/insert' + location + 'Data', data)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        break;

      case 'Project':
        data.id = allProjectDto.length + 1;
        axios
          .post('/api/insert' + location + 'Data', data)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        break;
    }
  };

  const showDataList = (list) => {
    console.log(list);
  };

  return (
    <div className='App ' style={{ margin: '0' }}>
      {/* {showDataList(allDevDto)} */}
      {/* {showDataList(allStoryDto)} */}
      {/* {showDataList(allProjectDto)} */}
      {/* {showDataList(rankingDevDto)} */}
      {/* {showDataList(rankingStoryDto)} */}
      {showDataList(resultDto)}
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
                        ></DeveloperCard>
                      </>
                    );
                  })}
                </div>
              </div>

              <Footer navigate={navigate}></Footer>
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
      </Routes>
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
                `/ViewStoryDetail/${props.rankingProjectDto[props.i].id}`
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
  return (
    <div
      className='col-4 '
      style={{
        padding: '1%',
        width: '25%',
      }}
    >
      <div className='d-flex justify-content-around '>
        <Card style={{ width: '18rem' }}>
          <div
            className='col-div '
            style={{
              overflow: 'hidden',
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
                marginRight: '5%',
              }}
              src={`${process.env.PUBLIC_URL}/${
                props.rankingDevDto[props.i].imgURL
              }.jpg`}
            ></img>
            <Card.Text className='col-content' style={{ paddingTop: '3%' }}>
              <span style={{ fontSize: '18px' }}>
                {props.rankingDevDto[props.i].name}
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />{' '}
                <div style={{ paddingLeft: '10%' }}>
                  {props.rankingDevDto[props.i].likeCount}
                </div>
              </div>
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

            <button className='btn'>
              <span> 1대1 대화 </span>
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

function NavBar(props) {
  if (props.isLogin == false) {
    return (
      <nav
        className='navbar_main'
        style={{ paddingLeft: '0%', paddingRight: '5%' }}
      >
        <div className='navbar__logo navbar_main'>
          <Nav.Link
            onClick={() => {
              props.navigate('/');
            }}
          >
            Developer Plus
          </Nav.Link>
        </div>
        <Nav style={{ textDecoration: 'none', color: 'black' }}>
          <Nav.Link
            onClick={() => {
              props.navigate('/findDeveloper');
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            <span className='navbarmenu'> 프로젝트</span>
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              props.navigate('/viewDeveloper');
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            <span className='navbarmenu'> 개발자</span>
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              props.navigate('/story');
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            <span className='navbarmenu'> 스토리</span>
          </Nav.Link>
        </Nav>
        <Nav style={{ textDecoration: 'none', color: 'black' }}>
          <Nav.Link
            onClick={() => {
              props.navigate('/serach');
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            통합검색
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              props.navigate('/Login');
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            로그인 | 회원가입
          </Nav.Link>
        </Nav>
      </nav>
    );
  } else {
    return (
      <nav
        className='navbar_main'
        style={{ paddingLeft: '0%', paddingRight: '5%' }}
      >
        <div className='navbar__logo'>
          <Nav.Link
            onClick={() => {
              props.navigate('/');
            }}
          >
            Developer Plus
          </Nav.Link>
        </div>
        <Nav
          className='me-auto'
          style={{ margin: '10%', textDecoration: 'none', color: 'black' }}
        >
          <Nav.Link
            onClick={() => {
              props.navigate('/findDeveloper');
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            프로젝트
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              props.navigate('/viewDeveloper');
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            개발자
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              props.navigate('/story');
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            스토리
          </Nav.Link>
        </Nav>
        <Nav style={{ textDecoration: 'none', color: 'black' }}>
          <Nav.Link
            onClick={() => {
              props.navigate('/serach');
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            통합검색
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              props.navigate(`/profile/${props.resultDto[0].id}`);
            }}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            {props.resultDto[0].name}
          </Nav.Link>
          <Nav.Link
            onClick={props.handleClick}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '700',
            }}
          >
            로그아웃
          </Nav.Link>
        </Nav>
      </nav>
    );
  }
}

function Footer(props) {
  return (
    <footer style={{ backgroundColor: 'white' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ padding: '8px 12px' }}>
            <p style={{ textDecoration: 'none', color: 'black' }}>
              Developer Plus
            </p>
          </div>
          <div style={{ display: 'flex', margin: '0', paddingRight: '1%' }}>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                margin: '0',
                padding: '0',
              }}
            >
              <li style={{ padding: '8px 12px' }}>
                <a
                  onClick={() => {
                    props.navigate('/viewDeveloper');
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  개발자
                </a>
              </li>
              <li style={{ padding: '8px 12px' }}>
                <a
                  onClick={() => {
                    props.navigate('/viewDeveloper');
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  프로젝트
                </a>
              </li>
              <li style={{ padding: '8px 12px' }}>
                <a
                  onClick={() => {
                    props.navigate('/viewDeveloper');
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  스토리
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ul style={{ listStyle: 'none' }}>
            <li style={{ fontSize: '10px' }}>
              {' '}
              <p>(주)Developer Plus | 대표이사 박용호(qkaxhf8823@naver.com)</p>
            </li>
            <li style={{ fontSize: '10px' }}>
              {' '}
              <p>
                서울특별시 중랑구 용마산로90길 28 (주)Developer Plus |
                02-0000-0000
              </p>
            </li>

            <li style={{ fontSize: '10px' }}>
              <p>
                사업자등록번호 679-87-00428 | 통신판매업신고번호
                제2018-서울강남-02246호(사업자정보확인) |
                유료직업소개사업등록번호: (국내)제2020-3220237-14-5-00014호
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
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
