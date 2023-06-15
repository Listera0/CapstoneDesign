import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { faCommentDots as farCommentDots } from '@fortawesome/free-regular-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import Form from 'react-bootstrap/Form';
function FindDeveloper(props) {
  let navigate = useNavigate();
  const viewInput = (location, _id, _viewCount) => {
    axios
      .post('/api/viewInput' + location, {
        id: _id,
        viewCount: _viewCount,
      })
      .then()
      .catch((error) => console.log(error));
  };
  let [goodCount, changeGoodCount] = useState([0, 0, 0]);
  const [allProjectDto, setAllProjectDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllProjectData')
        .then((response) => {
          setAllProjectDto(response.data);
          setFilteredProjectDto(response.data);
        })
        .catch((error) => console.log(error));
    }, []);
  }
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
    const filteredProjects = allProjectDto.filter((project, index) => {
      return (
        (RegionSelectValue === '' || project.region === RegionSelectValue) &&
        (firstSelectValue === '' || project.job === firstSelectValue) &&
        (secondSelectValue === '' || project.jobDetail === secondSelectValue)
      );
    });
    setFilteredProjectDto(filteredProjects);
  }, [RegionSelectValue, firstSelectValue, secondSelectValue]);
  console.log();
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
        전체 프로젝트
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
          paddingLeft: '2%',
          paddingRight: '2%',
        }}
      >
        {filteredProjectDto.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            navigate={navigate}
            viewInput={viewInput}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard(props) {
  const { project, navigate, viewInput } = props;

  return (
    <div
      className='col-4'
      style={{
        padding: '1%',
        width: '33%',
      }}
    >
      <div className='d-flex justify-content-around'>
        <Card style={{ width: '18rem' }}>
          <div
            className='col-div'
            style={{ overflow: 'hidden' }}
            onClick={() => {
              viewInput('Project', project.id, project.viewCount);
              navigate(`/FindDeveloperDetail/${project.id}`);
            }}
          >
            <img
              className='col-img'
              src={process.env.PUBLIC_URL + project.imgURL}
              width='100vw'
              alt={project.title}
            ></img>
          </div>
          <Card.Body>
            <Card.Title className='col-content' style={{ fontSize: '13px' }}>
              {project.title}
            </Card.Title>
            <Card.Text className='col-content' style={{ fontSize: '10px' }}>
              {project.name}
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
                {project.viewCount}
              </div>
              {/* <div>
                <FontAwesomeIcon icon={farCommentDots} size='2x' />
              </div> */}
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon icon={farHeart} style={{ fontSize: '20px' }} />{' '}
                {project.likeCount}
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
export default FindDeveloper;
