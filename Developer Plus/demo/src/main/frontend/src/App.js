import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { data, projectData, developerData } from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import StoryDetail from './routes/StoryDetail';
import ViewDeveloperDetail from './routes/ViewDeveloperDetail';
import FindDeveloperDetail from './routes/FindDeveloperDetail';
import Story from './routes/Story';
import FindDeveloper from './routes/FindDeveloper';
import ViewDeveloper from './routes/ViewDeveloper';
import Profile from './routes/Profile';
import Serach from './routes/Serach';
import Talk from './routes/Talk';
import Carousel from 'react-bootstrap/Carousel';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import Login from './routes/Login';
import { useParams } from 'react-router-dom';
library.add(fab);

function App() {
  console.log(process.env.PUBLIC_URL);
  let [story, setStory] = useState(data);
  let [project, setProject] = useState(projectData);
  let [developer, setDeveloper] = useState(developerData);
  let { id } = useParams();
  let [goodCount, changeGoodCount] = useState(false);
  let navigate = useNavigate(); //페이지 이동

  const goToStoryDetail = () => {
    navigate(`/ViewStoryDetail/${story}`);
  };
  const goToviewDeveloperDetail = () => {
    navigate(`/ViewDeveloperDetail/${developer}`);
  };
  const goTofindDeveloperDetail = () => {
    navigate('/FindDeveloperDetail');
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
  console.log(allDevDto.urlGithub);
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

  const [resultDto, setResultDto] = useState(['']);

  const getDto = (location, _id, _orderBy, _limit) => {
    axios
      .post('/api/get' + location + 'Data', {
        id: _id,
        orderBy: _orderBy,
        limit: _limit,
      })
      .then((response) => setResultDto(response.data))
      .catch((error) => console.log(error));
    showDataList(resultDto);
  };

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
    <div className='App '>
      {/* {showDataList(allDevDto)} */}
      {/* {showDataList(allStoryDto)} */}
      {/* {showDataList(allProjectDto)} */}
      {/* {showDataList(rankingDevDto)} */}
      {/* {showDataList(rankingStoryDto)} */}
      {/* {showDataList(rankingProjectDto)} */}
      {/* <Routes>
        <Route path='/FindDeveloper' element={<Filiter />}></Route>
        <Route path='/ViewDeveloper' element={<Filiter />}></Route>
      </Routes> */}
      <NavBar navigate={navigate}></NavBar>
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
                        setStory={setStory}
                        story={story}
                        i={i}
                        goToStoryDetail={goToStoryDetail}
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
                        goTofindDeveloperDetail={goTofindDeveloperDetail}
                        rankingProjectDto={rankingProjectDto}
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
                  <div
                    class='grid text-center'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginRight: '1%',
                      marginBottom: '1%',
                    }}
                  >
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
                            developer={developer}
                            i={i}
                            a={a}
                            navigate={navigate}
                            goToviewDeveloperDetail={goToviewDeveloperDetail}
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
          element={
            <Story
              story={story}
              setStory={setStory}
              allStoryDto={allStoryDto}
              navigate={navigate}
            />
          }
        ></Route>
        <Route
          path='/FindDeveloper'
          element={<FindDeveloper project={project} />}
        ></Route>
        <Route
          path='/ViewDeveloper'
          element={
            <ViewDeveloper
              developer={developer}
              goToviewDeveloperDetail={goToviewDeveloperDetail}
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
        <Route path='/login' element={<Login />}></Route>
        <Route path='/talk' element={<Talk />}></Route>
      </Routes>
    </div>
  );
}

function StoryCard(props) {
  return (
    <div className='col-md-4 '>
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
          width='100%'
        ></img>
      </div>
      <div className='col-content'>
        <span
          onClick={() => {
            props.navigate(
              `/ViewStoryDetail/${props.rankingStoryDto[props.i].id}`
            );
          }}
        >
          {props.rankingStoryDto[props.i].title}
        </span>
        <p>{props.rankingStoryDto[props.i].name}</p>
      </div>
    </div>
  );
}
function DeveloperCard(props) {
  return (
    <div
      className='g-col-6 g-col-md-4 '
      style={{
        border: '1px solid rgb(222,222,222)',
        borderRadius: '5px',
        width: '24%',
      }}
    >
      <div
        className='col-div'
        onClick={() => {
          props.navigate(
            `/ViewDeveloperDetail/${props.rankingDevDto[props.i].id}`
          );
        }}
      >
        <img
          style={{ paddingTop: '3%' }}
          className='col-div_developer'
          src={`${process.env.PUBLIC_URL}/${
            props.rankingDevDto[props.i].imgURL
          }.jpg`}
        ></img>
      </div>
      <div className='col-content_developer' style={{ textAlign: 'center' }}>
        <p>{props.rankingDevDto[props.i].name}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p>[주 능력] {props.jobDetail[0]}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p style={{ textAlign: 'center' }}>[경력] {props.careerDetail[0]}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'start',
          }}
        >
          <p>[부 능력] {props.jobDetail[1]}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p style={{ textAlign: 'center' }}>[경력] {props.careerDetail[1]}</p>
        </div>
        <p>👍 {props.rankingDevDto[props.i].likeCount}</p>
      </div>
      <div className='col-content_developer'>
        <p>
          참여중인 프로젝트 {props.rankingDevDto[props.i].projectCount}개
          있습니다.
        </p>
        <button className='btn'>
          <span> 1대1 대화 </span>
        </button>
      </div>
    </div>
  );
}
function ProjectCard(props) {
  return (
    <div className='col-md-4 '>
      <div className='col-div ' style={{ overflow: 'hidden' }}>
        <img
          onClick={() => {
            props.navigate(
              `/FindDeveloperDetail/${props.rankingProjectDto[props.i].id}`
            );
          }}
          className='col-img'
          src={process.env.PUBLIC_URL + '/main' + (props.i + 3) + '.jpg'}
          width='100%'
        ></img>
      </div>
      <div className='col-content'>
        <span
          onClick={() => {
            props.goTofindDeveloperDetail();
          }}
        >
          {props.rankingProjectDto[props.i].title}
        </span>
        <p>{props.rankingProjectDto[props.i].name}</p>
      </div>
    </div>
  );
}

function NavBar(props) {
  return (
    <nav
      className='navbar_main'
      style={{ borderBottom: '1px solid rgb(222,222,222)' }}
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
      <div className='navbarmenu'>
        <ul>
          <li>
            <Nav.Link
              onClick={() => {
                props.navigate('/findDeveloper');
              }}
            >
              프로젝트
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              onClick={() => {
                props.navigate('/viewDeveloper');
              }}
            >
              개발자
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              onClick={() => {
                props.navigate('/story');
              }}
            >
              스토리
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              onClick={() => {
                props.navigate('/serach');
              }}
            >
              <span>통합검색</span>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              onClick={() => {
                props.navigate(`/profile/0`);
              }}
            >
              프로필
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              onClick={() => {
                props.navigate('/login');
              }}
            >
              로그인|회원가입
            </Nav.Link>
          </li>
        </ul>
      </div>
    </nav>
  );
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
