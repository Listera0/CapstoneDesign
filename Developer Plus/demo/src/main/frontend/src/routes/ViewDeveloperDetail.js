import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import { icons2, jobs } from '../icons2.js';
import axios from 'axios';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

function ViewDeveloperDetail(props) {
  // useEffect(()=>{}) 1. 재렌더링마다 코드를 실행하고 싶으면
  // useEffect(()=>{},[]) 2. mount시 1회 코드 실행하고 싶으면
  // useEffect(()=>{
  //   return ()=>{
  //     3. unmount시 1회 코드실행하고 싶으면
  //   }
  // })

  // useEffect(() => {}); //쓰는 이유 안에 있는 코드는 html 렌더링 후에 동작 - 서버에서 데이터가져오는 작업 , 타이머 , 어려운 연산
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

  let [tab, setTab] = useState(0);
  let skillDetail =
    developerDetail.skill != null ? developerDetail.skill.split(',') : '';
  let jobDetail =
    developerDetail.job != null ? developerDetail.job.split(',') : '';

  let careerDetail =
    developerDetail.career != null ? developerDetail.career.split(',') : '';

  return (
    <section className='bg-light'>
      <div className='container' style={{ marginTop: '-3%' }}>
        <div className='row'>
          <div className='col-lg-12 mb-4 mb-sm-5'>
            <div className='card card-style1 border-0'>
              <div className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'>
                <div className='row align-items-center'>
                  <div className='col-lg-6 mb-4 mb-lg-0'>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/' +
                        developerDetail.id +
                        '.jpg'
                      }
                      width='70%'
                      style={{ paddingTop: '3%', paddingBottom: '3%' }}
                    ></img>
                  </div>
                  <div className='col-lg-6 px-xl-10'>
                    <div>
                      <h3 style={{ textAlign: 'start' }}>
                        {developerDetail.name}
                      </h3>
                    </div>
                    <ul className='list-unstyled mb-1-9'>
                      <li className='mb-2 mb-xl-3 display-28'>
                        <p style={{ textAlign: 'start' }}>
                          <span
                            className='display-26 text-secondary me-2 font-weight-600'
                            style={{ textAlign: 'start', fontSize: '18px' }}
                          >
                            Email
                          </span>
                          <span
                            style={{ textAlign: 'start', fontSize: '15px' }}
                          >
                            {developerDetail.email}
                          </span>
                        </p>
                      </li>
                      <li className='mb-2 mb-xl-3 display-28'>
                        <p style={{ textAlign: 'start' }}>
                          <span
                            className='display-26 text-secondary me-2 font-weight-600'
                            style={{ textAlign: 'start', fontSize: '18px' }}
                          >
                            Phone
                          </span>
                          <span
                            style={{ textAlign: 'start', fontSize: '15px' }}
                          >
                            {developerDetail.phone}
                          </span>
                        </p>
                      </li>

                      <li className='mb-2 mb-xl-3 display-28'>
                        <p
                          className='display-26 text-secondary me-2 font-weight-600'
                          style={{ textAlign: 'start' }}
                        >
                          참여중인 프로젝트 {developerDetail.projectCount}개
                          있습니다
                        </p>{' '}
                      </li>
                    </ul>
                    <div className='subdiv'>
                      <div className='col-6 ' style={{ fontSize: '15px' }}>
                        <span>👍</span>
                        {developerDetail.likeCount}
                      </div>
                      <div className='col-6' style={{ fontSize: '15px' }}>
                        <button
                          style={{
                            padding: '8px 12px',
                            border: '1px solid rgb(222,222,222)',
                            backgroundColor: 'white',
                            fontWeight: '600',
                            borderRadius: '5px',
                          }}
                        >
                          대화하기{' '}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Nav fill variant='tabs' defaultActiveKey='link0'>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(0);
                }}
                eventKey='link0'
              >
                Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(1);
                }}
                eventKey='link1'
              >
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(2);
                }}
                eventKey='link2'
              >
                Skill
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent
            tab={tab}
            developerDetail={developerDetail}
            skillDetail={skillDetail}
            jobDetail={jobDetail}
            careerDetail={careerDetail}
          />
        </div>
      </div>
    </section>
  );
}
function TabContent(props) {
  if (props.tab == 0) {
    return (
      <div className='col-lg-12 mb-4 mb-sm-5'>
        <div>
          <span
            className='section-title text-primary mb-3 mb-sm-4'
            style={{ marginTop: '3%' }}
          >
            Profile
          </span>
          <div style={{ padding: '3%' }}>
            <span style={{ textAlign: 'start' }}>
              <p
                className='display-26 text-secondary me-2 font-weight-600'
                style={{
                  textAlign: 'start',
                  fontSize: '18px',
                }}
              >
                [주 능력]
              </p>
              <p
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  직무
                </span>{' '}
                {props.jobDetail[0]}
              </p>
            </span>
            <div style={{ textAlign: 'start' }}>
              <p
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  경력
                </span>{' '}
                {props.careerDetail[0]}
              </p>
            </div>
            <div style={{ textAlign: 'start' }}>
              <span
                className='display-26 text-secondary me-2 font-weight-600'
                style={{
                  textAlign: 'start',
                  fontSize: '18px',
                  marginBottom: '10%',
                }}
              >
                [부 능력]
              </span>
              <p
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  직무
                </span>{' '}
                {props.jobDetail[1]}
              </p>
            </div>
            <div style={{ textAlign: 'start' }}>
              <p
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  경력
                </span>{' '}
                {props.careerDetail[1]}
              </p>
            </div>
            <div style={{ textAlign: 'start' }}>
              <span
                className='display-26 text-secondary me-2 font-weight-600'
                style={{
                  textAlign: 'start',
                  fontSize: '18px',
                  marginBottom: '10%',
                }}
              >
                [지역]
              </span>
            </div>
            <div style={{ textAlign: 'start' }}>
              <p
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  지역
                </span>{' '}
                {props.developerDetail.region}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (props.tab == 1) {
    return (
      <div className='col-lg-12 mb-4 mb-sm-5'>
        <div>
          <span
            className='section-title text-primary mb-3 mb-sm-4'
            style={{ marginTop: '3%' }}
          >
            About Me
          </span>
          <div style={{ padding: '3%' }}>
            <div style={{ textAlign: 'start' }}>
              <span
                className='display-26 text-secondary me-2 font-weight-600'
                style={{
                  textAlign: 'start',
                  fontSize: '18px',
                  marginBottom: '10%',
                }}
              >
                [소개]
              </span>
              <p
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  {props.developerDetail.introduce}
                </span>{' '}
              </p>
            </div>
            <div style={{ textAlign: 'start' }}>
              <span
                className='display-26 text-secondary me-2 font-weight-600'
                style={{
                  textAlign: 'start',
                  fontSize: '18px',
                  marginBottom: '10%',
                }}
              >
                [링크]
              </span>
              <div
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
                </span>{' '}
                <span
                  onClick={() => {
                    window.open(props.developerDetail.urlGithub);
                  }}
                  style={{ cursor: 'pointer', fontWeight: '600' }}
                >
                  깃허브
                </span>
              </div>
            </div>
            <div
              style={{
                textAlign: 'start',
                fontSize: '15px',
                marginTop: '2%',
              }}
            >
              <span style={{ fontWeight: '600', marginRight: '10%' }}>
                <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
              </span>{' '}
              <span
                onClick={() => {
                  window.open(props.developerDetail.urlInsta);
                }}
                style={{ cursor: 'pointer', fontWeight: '600' }}
              >
                인스타그램
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (props.tab == 2) {
    return (
      <div className='col-lg-12 mb-4 mb-sm-5'>
        <div>
          <div className='mb-4 mb-sm-5'>
            <span
              className='section-title text-primary mb-3 mb-sm-4'
              style={{ marginTop: '3%' }}
            >
              Skill
            </span>
          </div>
          <div style={{ padding: '3%' }}>
            <div style={{ textAlign: 'start' }}>
              <p
                className='display-26 text-secondary me-2 font-weight-600'
                style={{
                  textAlign: 'start',
                  fontSize: '18px',
                  marginBottom: '10%',
                }}
              >
                [스킬]
              </p>
              <div
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '5%',
                      marginLeft: '10%',
                      marginRight: '10%',
                      flexWrap: 'wrap',
                    }}
                  >
                    {props.skillDetail.map((ele, i) => {
                      return (
                        <Icons
                          key={i}
                          icons2={icons2}
                          i={i}
                          ele={ele}
                          developerDetail={props.developerDetail}
                          skillDetail={props.skillDetail}
                        />
                      );
                    })}
                  </div>
                </span>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function Icons(props) {
  return (
    <div key={props.i} style={{}}>
      <div style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ paddingLeft: '1%' }}>{props.icons2[props.ele]}</p>
        <p style={{ textAlign: 'center' }}>{props.skillDetail[props.i]}</p>
      </div>
    </div>
  );
}
export default ViewDeveloperDetail;
