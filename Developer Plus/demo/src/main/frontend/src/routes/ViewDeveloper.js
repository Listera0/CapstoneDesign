import { developerData } from '../data.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
let MobileDeveloper = styled.div`
  width: 25%;
  @media screen and (max-width: 768px) {
    disply: inline;
    width: 120%;
    overflow-x: scroll;
    white-space: nowrap;
  }
`;
function ViewDeveloper(props) {
  const [allDevDto, setAllDevDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllDevData')
        .then((response) => setAllDevDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }
  useEffect(() => {
    if (props.goodcount != 0 && props.goodcount < 3) {
      props.changeGoodCount(props.goodCount + 1);
    }
  }, [props.goodCount]);
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
  const [filteredProjectDto, setFilteredProjectDto] = useState([]);
  const [RegionSelectValue, setRegionSelectValue] = useState('');
  const handleRegionSelectChange = (event) => {
    const value = event.target.value;
    setRegionSelectValue(value);
  };

  const [firstSelectValue, setFirstSelectValue] = useState('');
  const handleFirstSelectChange = (event) => {
    const value = event.target.value;
    setFirstSelectValue(value);
  };
  const [secondSelectValue, setSecondSelectValue] = useState('');
  const handleSecondSelectChange = (event) => {
    const value = event.target.value;
    setSecondSelectValue(value);
  };

  useEffect(() => {
    const filteredProjects = allDevDto.filter((project, index) => {
      return (
        (RegionSelectValue === '' || project.region === RegionSelectValue) &&
        (firstSelectValue === '' || project.job === firstSelectValue) &&
        (secondSelectValue === '' || project.jobDetail === secondSelectValue)
      );
    });
    setFilteredProjectDto(filteredProjects);
  }, [RegionSelectValue, firstSelectValue, secondSelectValue]);
  console.log(allDevDto);
  return (
    <div className='container'>
      <h2
        style={{
          textAlign: 'start',
          paddingTop: '5%',
          paddingLeft: '5%',
          fontWeight: '600',
        }}
      >
        전체 개발자
      </h2>
      <div style={{ display: 'flex' }}>
        <div
          className='col-lg-3 mb-4 mb-sm-5'
          style={{
            textAlign: 'start',
            paddingTop: '1%',
            paddingLeft: '5%',
            fontSize: '10px',
          }}
        >
          <RegionSelect
            RegionSelectValue={RegionSelectValue}
            setRegionSelectValue={setRegionSelectValue}
            handleRegionSelectChange={handleRegionSelectChange}
          ></RegionSelect>
        </div>
        <div
          className='col-lg-3'
          style={{
            textAlign: 'start',
            paddingTop: '1%',
            paddingLeft: '5%',
            fontSize: '10px',
          }}
        >
          <SelectBasicExample
            useState={useState}
            firstSelectValue={firstSelectValue}
            setFirstSelectValue={setFirstSelectValue}
            handleFirstSelectChange={handleFirstSelectChange}
            secondSelectValue={secondSelectValue}
            setSecondSelectValue={setSecondSelectValue}
            handleSecondSelectChange={handleSecondSelectChange}
          />
        </div>
        <div
          className='col-lg-3'
          style={{
            textAlign: 'start',
            paddingTop: '1%',
            paddingLeft: '5%',
            fontSize: '10px',
          }}
        >
          <SelectTwo
            useState={useState}
            secondSelectValue={secondSelectValue}
            setSecondSelectValue={setSecondSelectValue}
            handleSecondSelectChange={handleSecondSelectChange}
            firstSelectValue={firstSelectValue}
            setFirstSelectValue={setFirstSelectValue}
            handleFirstSelectChange={handleFirstSelectChange}
          />
        </div>
      </div>
      <div
        className='row'
        style={{
          paddingTop: '2%',
          paddingBottom: '2%',
          alignItems: 'center',
          paddingLeft: '2%',
          paddingRight: '2%',
        }}
      >
        {allDevDto.map((a, i) => {
          let jobDetail =
            allDevDto[i].job != null ? allDevDto[i].job.split(',') : '';
          let careerDetail =
            allDevDto[i].career != null ? allDevDto[i].career.split(',') : '';
          return (
            <DeveloperCard
              developer={allDevDto[i].id}
              i={i}
              allDevDto={allDevDto}
              goodCount={props.goodCount}
              changeGoodCount={props.changeGoodCount}
              navigate={props.navigate}
              key={i}
              jobDetail={jobDetail}
              careerDetail={careerDetail}
            ></DeveloperCard>
          );
        })}
      </div>
    </div>
  );
}

function DeveloperCard(props) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(
    props.allDevDto[props.i].likeCount
  );
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
                `/ViewDeveloperDetail/${props.allDevDto[props.i].id}`
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
                props.allDevDto[props.i].imgURL
              }`}
            ></img>
            <Card.Text className='col-content' style={{ paddingTop: '3%' }}>
              <span style={{ fontSize: '18px' }}>
                {props.allDevDto[props.i].name}
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
                  {props.allDevDto[props.i].job}
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
                  {props.allDevDto[props.i].jobDetail}
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
                  {props.allDevDto[props.i].career}
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
                  {props.allDevDto[props.i].projectCount}&nbsp;
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
                  icon={farHeart}
                  style={{
                    fontSize: '20px',
                  }}
                  onClick={() => {
                    setLiked(!liked);
                    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
                    props.likeInput(
                      'developer',
                      props.resultDto[0].id,
                      props.allDevDto[props.i].id
                    );
                  }}
                />{' '}
                {likeCount}
              </div>
              {/* <div>
                <FontAwesomeIcon icon={farBookmark} size='2x' />
              </div> */}
            </div>
          </Card.Body>
        </Card>
      </div>
    </MobileDeveloper>
  );
}

function DeLike(props) {
  return (
    <div className='col-content_developer'>
      <div className='col-12 '>
        <span
          onClick={() => {
            props.changeGoodCount(props.goodCount - 1);
          }}
        >
          <FontAwesomeIcon icon={farHeart} style={{ fontSize: '20px' }} />
        </span>
        {props.goodCount}
      </div>
    </div>
  );
}
function Like(props) {
  return (
    <div className='col-content_developer'>
      <div className='col-12 '>
        <span
          onClick={(e) => {
            props.changeGoodCount(props.goodCount + 1);
          }}
        >
          <FontAwesomeIcon icon={farHeart} size='2x' />
        </span>
        {props.goodCount}
      </div>
    </div>
  );
}

function RegionSelect(props) {
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        value={props.RegionSelectValue}
        onChange={props.handleRegionSelectChange}
      >
        <option value='지역을 선택하세요'>지역을 선택하세요</option>
        <option value='서울'>서울</option>
        <option value='인천'>인천</option>
        <option value='경기'>경기</option>
        <option value='세종'>세종</option>
        <option value='충남'>충남</option>
        <option value='충북'>충북</option>
        <option value='광주'>광주</option>
        <option value='전남'>전남</option>
        <option value='전북'>전북</option>
        <option value='대구'>대구</option>
        <option value='경북'>경북</option>
        <option value='부산'>부산</option>
        <option value='울산'>울산</option>
        <option value='경남'>경남</option>
        <option value='강원'>강원</option>
        <option value='제주'>제주</option>
        <option value='전국'>전국</option>
      </Form.Select>
    </>
  );
}

function SelectBasicExample(props) {
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        value={props.firstSelectValue}
        onChange={props.handleFirstSelectChange}
      >
        <option value='직무를 선택하세요'>직무를 선택하세요</option>
        <option value='기획'>기획</option>
        <option value='디자인'>디자인</option>
        <option value='프론트엔드개발'>프론트엔드개발</option>
        <option value='벡엔드개발'>벡엔드개발</option>
        <option value='사업'>사업</option>
        <option value='기타'>기타</option>
      </Form.Select>
    </>
  );
}
function SelectTwo(props) {
  return (
    <Form.Select
      aria-label='Default select example'
      value={props.secondSelectValue}
      onChange={props.handleSecondSelectChange}
    >
      {props.firstSelectValue === '기획' && (
        <>
          <option value='전체'>전체</option>
          <option value='UX/UI기획'>UX/UI기획</option>
          <option value='게임기획'>게임기획</option>
          <option value='프로젝트 매니저'>프로젝트 매니저</option>
          <option value='하드웨어(제품) 기획'>하드웨어(제품) 기획</option>
          <option value='(기획)기타'>(기획)기타</option>
        </>
      )}
      {props.firstSelectValue === '디자인' && (
        <>
          <option value='전체'>전체</option>
          <option value='그래픽디자인'>그래픽디자인</option>
          <option value='UX/UI디자인'>UX/UI디자인</option>
          <option value='3D디자인'>3D디자인</option>
          <option value='하드웨어(제품)디자인'>하드웨어(제품)디자인</option>
          <option value='디자인(기타)'>디자인(기타)</option>
        </>
      )}
      {props.firstSelectValue === '프론트엔드개발' && (
        <>
          <option value='전체'>전체</option>
          <option value='IOS'>IOS</option>
          <option value='안드로이드'>안드로이드</option>
          <option value='웹프론트엔드'>웹프론트엔드</option>
          <option value='웹퍼블리셔'>웹퍼블리셔</option>
          <option value='크로스플랫폼'>크로스플랫폼</option>
          <option value='임베디드SW'>임베디드SW</option>
        </>
      )}
      {props.firstSelectValue === '벡엔드개발' && (
        <>
          <option value='전체'>전체</option>
          <option value='웹서버'>웹서버</option>
          <option value='블록체인'>블록체인</option>
          <option value='AI'>AI</option>
          <option value='DB/빅데이터/DS'>DB/빅데이터/DS</option>
          <option value='게임서버'>게임서버</option>
        </>
      )}
      {props.firstSelectValue === '사업' && (
        <>
          <option value='전체'>전체</option>
          <option value='사업기획'>사업기획</option>
          <option value='마케팅'>마케팅</option>
          <option value='재무/회계'>재무/회계</option>
          <option value='영업'>영업</option>
          <option value='전략/컨설팅'>전략/컨설팅</option>
          <option value='투자/고문'>투자/고문</option>
          <option value='사업(기타)'>사업(기타)</option>
        </>
      )}
      {props.firstSelectValue === '기타' && (
        <>
          <option value='전체'>전체</option>
          <option value='DBA'>DBA</option>
          <option value='데이터 엔지니어'>데이터 엔지니어</option>
          <option value='데이터'>데이터 사이언티스트</option>
          <option value='데이터 사이언티스트'>보안 엔지니어</option>
          <option value='소프트웨어 개발자'>소프트웨어 개발자</option>
          <option value='게임 개발자'>게임 개발자</option>
          <option value='하드웨어 개발자'>하드웨어 개발자</option>
          <option value='머신러닝 개발자'>머신러닝 개발자</option>
          <option value='클라우드엔지니어'>클라우드엔지니어</option>
          <option value='QA'>QA</option>
        </>
      )}
    </Form.Select>
  );
}
export default ViewDeveloper;
