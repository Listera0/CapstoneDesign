import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
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
function Serach() {
  let navigate = useNavigate(); //페이지 이동
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  let { id } = useParams();
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

  const [searchDev, setSearchDev] = useState(['']);
  const [searchStory, setSearchStory] = useState(['']);
  const [searchProject, setSearchProject] = useState(['']);
  console.log(searchDev);
  console.log(searchStory);
  console.log(searchProject);
  const searching = (_key) => {
    axios
      .post('/api/searchDevData', {
        key: _key,
      })
      .then((response) => setSearchDev(response.data))
      .catch((error) => console.log(error));

    axios
      .post('/api/searchStoryData', {
        key: _key,
      })
      .then((response) => setSearchStory(response.data))
      .catch((error) => console.log(error));

    axios
      .post('/api/searchProjectData', {
        key: _key,
      })
      .then((response) => setSearchProject(response.data))
      .catch((error) => console.log(error));
  };
  const [nowState, setNowState] = useState(0);

  const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
  ];
  useEffect(() => {
    // 검색어가 변경될 때마다 데이터를 필터링
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  if (nowState == 0) {
    return (
      <div className='App'>
        <div className='col-lg-12 mb-4 mb-sm-5'>
          <span className='col-lg-6'>
            <input
              type='text'
              style={{
                width: '60%',
                height: '10vh',
                borderRadius: '5px',
                border: '1px solid rgb(222,222,222)',
                outline: 'none',
                marginLeft: '10%',
                padding: '25px 20px',
                fontSize: '20px',
              }}
              id='word'
              value={searchTerm}
              onChange={handleSearch}
              placeholder='검색어를 입력하세요'
            ></input>
          </span>
          <span className='col-lg-6'>
            <button
              style={{
                width: '10%',
                height: '10vh',
                borderRadius: '5px',
                border: '1px solid rgb(222,222,222)',
                outline: 'none',
                marginLeft: '1%',
                padding: '20px 20px',
                fontSize: '20px',
              }}
              onClick={() => {
                searching(document.getElementById('word').value);
                setNowState(1);
              }}
              id='title'
            >
              검색
            </button>
          </span>
          <span className='col-lg-6'>
            <p
              style={{
                marginLeft: '10%',
                width: '100%',
                fontSize: '32px',
                marginTop: '3%',
              }}
            >
              검색어를 입력하세요 ❗❗
            </p>
          </span>
          <br></br>
          <hr style={{ marginLeft: '5%', marginRight: '10%' }}></hr>
        </div>
      </div>
    );
  }
  if (nowState == 1) {
    return (
      <div className='App'>
        <div className='col-lg-12 mb-4 mb-sm-5'>
          <span className='col-lg-6'>
            <input
              type='text'
              style={{
                width: '60%',
                height: '10vh',
                borderRadius: '5px',
                border: '1px solid rgb(222,222,222)',
                outline: 'none',
                marginLeft: '10%',
                padding: '25px 20px',
                fontSize: '20px',
              }}
              id='word'
              value={searchTerm}
              onChange={handleSearch}
              placeholder='검색어를 입력하세요'
            ></input>
          </span>
          <span className='col-lg-6'>
            <button
              style={{
                width: '10%',
                height: '10vh',
                borderRadius: '5px',
                border: '1px solid rgb(222,222,222)',
                outline: 'none',
                marginLeft: '1%',
                padding: '20px 20px',
                fontSize: '20px',
              }}
              onClick={() => {
                searching(document.getElementById('word').value);
                setNowState(1);
              }}
              id='title'
            >
              검색
            </button>
          </span>
          <span className='col-lg-6'>
            <p
              style={{
                marginLeft: '10%',
                width: '100%',
                fontSize: '25px',
                marginTop: '3%',
              }}
            >
              "{document.getElementById('word')?.value || ''}"에 대한 검색 결과
            </p>
          </span>
          <br></br>
          <hr style={{ marginLeft: '5%', marginRight: '10%' }}></hr>
          <p
            style={{
              textAlign: 'start',

              paddingLeft: '5%',
              fontWeight: '600',
              fontSize: '18px',
            }}
          >
            개발자 검색건
          </p>
          <div className='container'>
            <div className='row'>
              {searchDev.length > 0 ? (
                searchDev.map((a, i) => (
                  <DeveloperCard
                    searchDev={searchDev}
                    i={i}
                    a={a}
                    navigate={navigate}
                    key={i}
                  />
                ))
              ) : (
                <p style={{ fontSize: '25px' }}>No results found.</p>
              )}
            </div>
          </div>

          <p
            style={{
              textAlign: 'start',

              paddingLeft: '5%',
              fontWeight: '600',
              fontSize: '18px',
            }}
          >
            프로젝트 검색건
          </p>
          <div className='container'>
            <div className='row' style={{ marginRight: '20%' }}>
              {searchProject.length > 0 ? (
                searchProject.map((a, i) => (
                  <ProjectCard
                    searchProject={searchProject}
                    i={i}
                    a={a}
                    navigate={navigate}
                    key={i}
                  />
                ))
              ) : (
                <p style={{ fontSize: '25px' }}>No results found.</p>
              )}
            </div>
          </div>
        </div>
        <p
          style={{
            textAlign: 'start',

            paddingLeft: '5%',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          스토리 검색건
        </p>
        <div className='container'>
          <div className='row' style={{ marginRight: '20%' }}>
            {searchStory.length > 0 ? (
              searchStory.map((a, i) => (
                <StoryCard
                  searchStory={searchStory}
                  i={i}
                  a={a}
                  navigate={navigate}
                  key={i}
                />
              ))
            ) : (
              <p style={{ fontSize: '25px' }}>No results found.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function DeveloperCard(props) {
  if (props.searchDev.length == null) {
    return <></>;
  }

  if (props.searchDev.length != null) {
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
                  `/ViewDeveloperDetail/${props.searchDev[props.i].id}`
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
                  props.searchDev[props.i].imgURL
                }`}
              ></img>
              <Card.Text className='col-content' style={{ paddingTop: '3%' }}>
                <span style={{ fontSize: '18px' }}>
                  {props.searchDev[props.i].name}
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
                    {props.searchDev[props.i].job}
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
                    {props.searchDev[props.i].jobDetail}
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
                    {props.searchDev[props.i].career}
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
                    {props.searchDev[props.i].projectCount}&nbsp;
                  </div>
                  개 있습니다.
                </div>
              </Card.Text>

              {/* <div>
            <FontAwesomeIcon icon={farBookmark} size='2x' />
          </div> */}
            </Card.Body>
          </Card>
        </Scroll>
      </MobileDeveloper>
    );
  }
}
function ProjectCard(props) {
  return (
    <>
      <div
        className='col-12'
        style={{
          display: 'flex',
          padding: '15px 15px',
          cursor: 'pointer',
        }}
        onClick={() => {
          props.navigate(
            `/FindDeveloperDetail/${props.searchProject[props.i].id}`
          );
        }}
      >
        <div className='thumbnail'>
          <img
            src={process.env.PUBLIC_URL + props.searchProject[props.i].imgURL}
          />
        </div>
        <div className='txtWrap'>
          <div className='title'>{props.searchProject[props.i].title}</div>
          <div className='content'>{props.searchProject[props.i].content}</div>
        </div>
      </div>
    </>
  );
}

function StoryCard(props) {
  return (
    <>
      <div
        className='col-12'
        style={{
          display: 'flex',
          padding: '15px 15px',
          cursor: 'pointer',
        }}
        onClick={() => {
          props.navigate(`/StoryDetail/${props.searchStory[props.i].id}`);
        }}
      >
        <div className='thumbnail'>
          <img
            src={process.env.PUBLIC_URL + props.searchStory[props.i].imgURL}
          />
        </div>
        <div className='txtWrap'>
          <div className='title'>{props.searchStory[props.i].title}</div>
          <div className='content'>{props.searchStory[props.i].content}</div>
        </div>
      </div>
    </>
  );
}
export default Serach;
