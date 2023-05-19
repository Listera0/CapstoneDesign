import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import { jobs, icons2 } from '../icons2';

function FindDeveloperDetail(props) {
  let [tab, setTab] = useState(0);
  let [maintab, setMainTab] = useState(0);

  let { id } = useParams(); // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  let projectDetail = props.allProjectDto.find(function (x) {
    return x.id == id;
  });

  // let [req2, setReq2] = useState(projectDetail.requireJob);
  // console.log(req2);
  return (
    <section className='bg-light' style={{ marginTop: '-6%' }}>
      <div className='container' style={{ paddingTop: '3%' }}>
        <div className='row'>
          <h2
            style={{
              textAlign: 'center',
              paddingTop: '5%',
              paddingLeft: '5%',
              fontWeight: '600',
            }}
          >
            {projectDetail.title}
          </h2>

          <MainTabContent
            tab={tab}
            maintab={maintab}
            setTab={setTab}
            projectDetail={projectDetail}
            // req2={req2}
            // setReq2={setReq2}
          ></MainTabContent>
        </div>
      </div>
    </section>
  );
}
function MainTabContent(props) {
  return (
    <>
      <div className='col-lg-12 mb-4 mb-sm-5'>
        <div className='card card-style1 border-0'>
          <div
            className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'
            style={{ display: 'flex' }}
          >
            <div
              className='row align-items-center'
              style={{ border: 'none', display: 'flex' }}
            >
              <div
                className='col-lg-12 mb-4 mb-lg-0'
                style={{ alignItems: 'center' }}
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/' +
                    props.projectDetail.imgURL +
                    '.jpg'
                  }
                  width='100%'
                  style={{ textAlign: 'center' }}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <Nav fill variant='tabs' defaultActiveKey='link0'>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                props.setTab(0);
              }}
              eventKey='link0'
            >
              정보
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                props.setTab(1);
              }}
              eventKey='link1'
            >
              모집현황
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                props.setTab(2);
              }}
              eventKey='link2'
            >
              기술/언어
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent
          tab={props.tab}
          projectDetail={props.projectDetail}
          
          icons2={props.icons2}
          i={props.i}
        />
      </div>
    </>
  );
}
function TabContent(props) {
  if (props.tab == 0) {
    return (
      <div className='row'>
        <div className='col-lg-8 mb-4 mb-sm-5' style={{ display: 'flex' }}>
          <div className='card card-style1 border-0'>
            <div className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'>
              <div className='row align-items-center'>
                <div className='col-lg-12 px-xl-10'>
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
                      <div
                        style={{
                          fontSize: '15px',
                          marginTop: '2%',
                        }}
                      >
                        {props.projectDetail.content}
                        <span
                          style={{ fontWeight: '600', marginRight: '10%' }}
                        ></span>{' '}
                      </div>
                    </div>
                    <div style={{ textAlign: 'start', marginTop: '3%' }}>
                      <span
                        className='display-26 text-secondary me-2 font-weight-600'
                        style={{
                          textAlign: 'start',
                          fontSize: '18px',
                        }}
                      >
                        [참고링크]
                      </span>
                      <p
                        style={{
                          textAlign: 'start',
                          fontSize: '15px',
                          marginTop: '3%',
                        }}
                      >
                        <span style={{ fontWeight: '600', marginRight: '10%' }}>
                          <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
                        </span>{' '}
                        <span
                          onClick={() => {}}
                          style={{ cursor: 'pointer', fontWeight: '600' }}
                        >
                          깃허브
                        </span>
                      </p>
                    </div>
                    <p
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                        marginTop: '2%',
                      }}
                    >
                      <span style={{ fontWeight: '600', marginRight: '10%' }}>
                        <FontAwesomeIcon
                          icon={['fab', 'instagram']}
                          size='2x'
                        />
                      </span>{' '}
                      <span
                        onClick={() => {}}
                        style={{ cursor: 'pointer', fontWeight: '600' }}
                      >
                        인스타그램
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4 mb-sm-5'>
          <div className='card card-style1 border-0'>
            <div
              className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div className='row align-items-center'>
                <div
                  style={{
                    textAlign: 'start',
                    paddingTop: '5%',
                    paddingLeft: '5%',
                    fontWeight: '600',
                  }}
                >
                  <div
                    style={{
                      textAlign: 'start',
                      paddingTop: '5%',
                      paddingLeft: '5%',
                      fontWeight: '600',
                    }}
                  >
                    리더정보
                    <div
                      style={{
                        textAlign: 'start',
                        paddingTop: '5%',

                        fontWeight: '600',
                      }}
                    >
                      {props.projectDetail.name}
                    </div>
                    <hr></hr>
                  </div>

                  <div
                    style={{
                      textAlign: 'start',
                      paddingTop: '5%',
                      paddingLeft: '5%',
                      fontWeight: '600',
                    }}
                  >
                    프로젝트지역
                    <p
                      style={{
                        textAlign: 'start',
                        paddingTop: '5%',
                        fontWeight: '600',
                      }}
                    >
                      {props.projectDetail.region}
                    </p>
                    <hr></hr>
                  </div>
                  <div
                    style={{
                      textAlign: 'start',
                      paddingTop: '5%',
                      paddingLeft: '5%',
                      fontWeight: '600',
                    }}
                  >
                    프로젝트기간
                    <p
                      style={{
                        textAlign: 'start',
                        paddingTop: '5%',
                        fontWeight: '600',
                      }}
                    >
                      {props.projectDetail.startDate}~
                      {props.projectDetail.endDate}
                    </p>
                    <hr></hr>
                  </div>
                </div>
              </div>
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
                [모집현황]
              </span>
              <div
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <div style={{ fontWeight: '600', marginRight: '10%' }}>
                  {props.projectDetail.job.map((ele, i) => {
                    return (
                      <Jobs
                        key={i}
                        jobs={jobs}
                        i={i}
                        ele={ele}
                        projectDetail={props.projectDetail}
                        job={props.job}
                        req2={props.req2}
                        setReq2={props.setReq2}
                      />
                    );
                  })}
                </div>{' '}
              </div>
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
                  onClick={() => {}}
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
                onClick={() => {}}
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
  function Jobs(props) {
    return (
      <div key={props.i} style={{}}>
        <div>
          <div
            style={{ display: 'flex', marginBottom: '2%', textAlign: 'start' }}
          >
            <div style={{ fontWeight: '600', marginRight: '10%' }}>
              {props.projectDetail.job[props.i]}{' '}
            </div>
            <div
              style={{
                marginRight: '10%',
                textAlign: 'start',
              }}
            >
              {props.projectDetail.requireJob[props.i]}/
              {props.projectDetail.nowJob[props.i]}
            </div>
            <div style={{ textAlign: 'start' }}>
              {props.projectDetail.requireJob[props.i] ==
              props.projectDetail.nowJob[props.i] ? (
                <button style={{}} disabled>
                  마감
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.req2 = props.req2[props.i] + 1;
                  }}
                >
                  지원
                </button>
              )}
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
                [희망스킬]
              </span>
              <div
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
                }}
              >
                <div style={{ fontWeight: '600', marginRight: '10%' }}>
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
                    {props.projectDetail.skill.map((ele, i) => {
                      return (
                        <Icons2
                          key={i}
                          icons2={icons2}
                          i={i}
                          ele={ele}
                          projectDetail={props.projectDetail}
                          skill={props.skill}
                        ></Icons2>
                      );
                    })}
                  </div>
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function Icons2(props) {
  return (
    <div style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <p style={{ paddingLeft: '1%' }}>{props.icons2[props.ele]}</p>
      <p style={{ textAlign: 'center' }}>
        {props.projectDetail.skill[props.i]}
      </p>
    </div>
  );
}
export default FindDeveloperDetail;
