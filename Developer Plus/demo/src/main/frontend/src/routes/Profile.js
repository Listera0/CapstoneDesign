import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { icons2, jobs } from '../icons2.js';
import { useNavigate } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from 'axios';
function Profile(props) {
  let { id } = useParams();
  let { ids } = useParams();
  let navigate = useNavigate(); //페이지 이동
  const [talkList, setTalkList] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getChatInfo', { id: '', limit: '3' })
        .then((response) => {
          setTalkList(response.data);
        });
    });
  }
  const [userDetail, setUserDetail] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getDevData', {
          id: id,
          orderBy: '',
          limit: '',
        })
        .then((response) => {
          setUserDetail(response.data);
        })
        .catch((error) => console.log(error));
    }, []);
  }
  const [projectDetails, setProjectDetails] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getProjectData', {
          id: id,
          orderBy: '',
          limit: '',
        })
        .then((response) => setProjectDetails(response.data))
        .catch((error) => console.log(error));
    }, []);
  }
  let projectDetail = projectDetails[0];
  const [alertList, setAlertList] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getAlert', {
          reciver: id,
        })
        .then((response) => {
          setAlertList(response.data);
        })
        .catch((error) => console.log(error));
    }, []);
  }
  const addMemberToChat = (_memberId, _projectId) => {
    axios
      .post('/api/addMemberToChat', {
        memberId: _memberId,
        projectId: _projectId,
      })
      .then();
  };
  const removeAlert = (_id) => {
    axios
      .post('/api/removeAlert', {
        id: _id,
      })
      .then()
      .catch((error) => console.log(error));
  };

  const updateNowJob = (_id) => {
    axios
      .post('/api/updateNowJob', {
        id: _id,
      })
      .then()
      .catch((error) => console.log(error));
  };

  let developerDetail = userDetail[0];

  let skillDetail =
    developerDetail.skill != null ? developerDetail.skill.split(',') : '';

  let jobDetail =
    developerDetail.job != null ? developerDetail.job.split(',') : '';

  let careerDetail =
    developerDetail.career != null ? developerDetail.career.split(',') : '';
  let [tab, setTab] = useState(0);
  let [maintab, setMainTab] = useState(0);
  return (
    <section className='bg-light' style={{ marginTop: '-6%' }}>
      <div className='container' style={{ paddingTop: '3%' }}>
        <div className='row'>
          <h2
            style={{
              textAlign: 'start',
              paddingTop: '5%',
              paddingLeft: '5%',
              fontWeight: '600',
            }}
          >
            마이페이지
          </h2>

          <MainTabContent
            tab={tab}
            maintab={maintab}
            setTab={setTab}
            developerDetail={developerDetail}
            projectDetail={projectDetail}
            jobDetail={jobDetail}
            careerDetail={careerDetail}
            skillDetail={skillDetail}
            navigate={navigate}
            removeAlert={removeAlert}
            updateNowJob={updateNowJob}
            alertList={alertList}
            talkList={talkList}
            setTalkList={setTalkList}
            addMemberToChat={addMemberToChat}
          ></MainTabContent>
        </div>
      </div>
    </section>
  );
}
function MainTabContent(props) {
  if (props.maintab == 0) {
    return (
      <>
        <div className='col-lg-8 mb-4 mb-sm-5'>
          <div className='card card-style1 border-0'>
            <div className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'>
              <div className='row align-items-center'>
                <div className='col-lg-6 mb-4 mb-lg-0'>
                  <img
                    src={process.env.PUBLIC_URL + props.developerDetail.imgURL}
                    width='70%'
                    style={{ paddingTop: '3%', paddingBottom: '3%' }}
                  ></img>
                </div>
                <div className='col-lg-6 px-xl-10'>
                  <div>
                    <h3 style={{ textAlign: 'start', fontWeight: '600' }}>
                      {props.developerDetail.name}
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
                        <span style={{ textAlign: 'start', fontSize: '15px' }}>
                          {props.developerDetail.email}
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
                        <span style={{ textAlign: 'start', fontSize: '15px' }}>
                          {props.developerDetail.phone}
                        </span>
                      </p>
                    </li>

                    <li className='mb-2 mb-xl-3 display-28'>
                      <p
                        className='display-26 text-secondary me-2 font-weight-600'
                        style={{ textAlign: 'start', fontSize: '15px' }}
                      >
                        참여중인 프로젝트 {props.developerDetail.projectCount}개
                        있습니다
                      </p>{' '}
                    </li>
                    <li className='mb-2 mb-xl-3 display-28'>
                      <button
                        onClick={() => {
                          props.navigate('/profileDetail');
                        }}
                        style={{
                          border: '1px solid rgb(222,222,222)',
                          borderRadius: '5px',
                          backgroundColor: '#9796a7',
                          color: 'white',
                          fontWeight: '600',
                          padding: '8px 14px',
                        }}
                      >
                        프로필 작성하기
                      </button>
                    </li>
                  </ul>
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
                Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  props.setTab(1);
                }}
                eventKey='link1'
              >
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  props.setTab(2);
                }}
                eventKey='link2'
              >
                Link
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent
            tab={props.tab}
            developerDetail={props.developerDetail}
            skillDetail={props.skillDetail}
            jobDetail={props.jobDetail}
            careerDetail={props.careerDetail}
            removeAlert={props.removeAlert}
            updateNowJob={props.updateNowJob}
            alertList={props.alertList}
            addMemberToChat={props.addMemberToChat}
          />
        </div>
        <div className='col-lg-4 mb-4 mb-sm-5' style={{ display: 'block' }}>
          <div className='card card-style1 border-0'>
            <div
              className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div className='row align-items-center' style={{}}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div
                    style={{
                      textAlign: 'start',
                      paddingTop: '5%',
                      paddingLeft: '5%',
                      fontWeight: '600',
                    }}
                  >
                    모임
                  </div>
                  <div
                    onClick={() => {
                      props.navigate(`/talk/${props.developerDetail.id}`);
                    }}
                    style={{
                      textAlign: 'start',
                      paddingTop: '5%',
                      paddingLeft: '5%',
                      fontWeight: '400',
                      color: 'gray',
                      fontSize: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    전체보기 &gt;&gt;
                  </div>
                </div>

                {props.talkList.map((a, i) => {
                  let talkDetail =
                    props.talkList[i].memberId != null
                      ? props.talkList[i].memberId
                          .split(',')
                          .map((id) => parseInt(id))
                      : '';

                  return (
                    <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                      <div
                        className='col-12'
                        style={{
                          display: 'flex',
                          padding: '15px 15px',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          props.navigate(`/talkDetail/${props.talkList[i].id}`);
                        }}
                      >
                        {talkDetail.includes(props.developerDetail.id) ? (
                          <>
                            <div className='profile__project__thumbnail'>
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  props.talkList[i].imgURL
                                }
                                width='100%'
                                style={{
                                  paddingTop: '3%',
                                  paddingBottom: '3%',
                                }}
                              ></img>
                            </div>
                            <div className='txtWrap'>
                              <div className='title'>
                                {props.talkList[i].title}톡방
                              </div>
                              <div className='content'>
                                {props.talkList[i].memberId}
                              </div>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='card card-style1 border-0'>
            <div
              className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div className='row align-items-center'>
                <p
                  style={{
                    textAlign: 'start',
                    paddingTop: '5%',
                    paddingLeft: '5%',
                    fontWeight: '600',
                  }}
                >
                  공지사항
                </p>
                {props.alertList.map((a, i) => {
                  console.log(props.alertList[i]);
                  return (
                    <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                      <div
                        style={{
                          textAlign: 'center',
                          width: '100%',
                          height: '10vh',
                          marginBottom: '3%',
                          border: '1px solid rgb(222,222,222)',
                          backgroundColor: 'white',
                        }}
                      >
                        <div
                          onClick={() => {
                            props.navigate(
                              `/ViewDeveloperDetail/${props.alertList[i].sender}`
                            );
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          {props.alertList[i].comment}
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <button
                            style={{
                              marginRight: '5%',
                              marginTop: '5%',
                              border: '1px solid rgba(148,178,249,0.3)',
                              backgroundColor: 'white',
                              fontWeight: '700',
                            }}
                            onClick={() => {
                              props.updateNowJob(props.alertList[i].sub1);
                              props.removeAlert(props.alertList[i].id);
                              props.addMemberToChat(
                                props.alertList[i].sender,
                                props.alertList[i].sub1
                              );

                              alert('수락되었습니다.');
                            }}
                          >
                            수락{' '}
                          </button>
                          <button
                            style={{
                              marginRight: '5%',
                              marginTop: '5%',
                              border: '1px solid rgba(148,178,249,0.3)',
                              backgroundColor: 'white',
                              fontWeight: '700',
                            }}
                            onClick={() => {
                              props.removeAlert(props.alertList[i].id);
                              alert('거절되었습니다.');
                            }}
                          >
                            거절
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (props.maintab == 1) {
    return (
      <ul class='nav nav-pills nav-justified'>
        <li class='nav-item'>
          <a class='nav-link active' aria-current='page' href='#'>
            Active
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'>
            Much longer nav link
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'>
            Link
          </a>
        </li>
      </ul>
    );
  }
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
            <div style={{ textAlign: 'start' }}>
              <span
                className='display-26 text-secondary me-2 font-weight-600'
                style={{
                  textAlign: 'start',
                  fontSize: '18px',
                  marginBottom: '10%',
                }}
              >
                [주 능력]
              </span>
              <div
                style={{
                  textAlign: 'start',
                  display: 'flex',
                  justifyContent: 'start',
                  marginTop: '3%',
                }}
              >
                <span
                  style={{
                    fontWeight: '600',
                    marginRight: '10%',
                  }}
                >
                  직무
                </span>{' '}
                <p>{props.developerDetail.job}</p>
              </div>
              <div
                style={{
                  textAlign: 'start',
                  display: 'flex',
                  justifyContent: 'start',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  분야
                </span>
                <p>{props.developerDetail.jobDetail}</p>
              </div>
              <div
                style={{
                  textAlign: 'start',
                  display: 'flex',
                  justifyContent: 'start',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  경력
                </span>{' '}
                <p>{props.developerDetail.career}</p>
              </div>
              <div
                style={{
                  textAlign: 'start',
                  display: 'flex',
                  justifyContent: 'start',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  지역
                </span>{' '}
                <p>{props.developerDetail.region}</p>
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
              <div
                style={{
                  fontSize: '15px',
                  marginTop: '2%',
                  width: '80%',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '10%' }}>
                  <Viewer initialValue={props.developerDetail?.introduce} />{' '}
                </span>{' '}
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
              <p
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
            </p>
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
              <span
                className='display-26 text-secondary me-2 font-weight-600'
                style={{
                  textAlign: 'start',
                  fontSize: '18px',
                  marginBottom: '10%',
                }}
              >
                [스킬]
              </span>
              <p
                style={{
                  textAlign: 'start',
                  fontSize: '15px',
                  marginTop: '2%',
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
              </p>
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
      <div className='d-flex justify-content-around '></div>
    </div>
  );
}
export default Profile;
