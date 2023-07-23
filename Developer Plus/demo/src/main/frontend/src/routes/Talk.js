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
  let navigate = useNavigate(); //페이지 이동

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
            마이톡방
          </h2>

          <MainTabContent
            tab={tab}
            maintab={maintab}
            setTab={setTab}
            developerDetail={developerDetail}
            navigate={navigate}
            removeAlert={removeAlert}
            updateNowJob={updateNowJob}
            alertList={alertList}
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
        <div className='col-lg-12 mb-4 mb-sm-5' style={{ display: 'block' }}>
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
                  style={{
                    textAlign: 'start',
                    paddingTop: '5%',
                    paddingLeft: '5%',
                    fontWeight: '600',
                  }}
                >
                  모임
                </div>

                <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                  <div
                    className='col-12'
                    style={{
                      display: 'flex',
                      padding: '15px 15px',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      props.navigate(`/TalkDetail/${props.developerDetail.id}`);
                    }}
                  >
                    <div className='profile__thumbnail'>
                      <img
                        src={
                          process.env.PUBLIC_URL + props.developerDetail.imgURL
                        }
                        width='50%'
                        style={{ paddingTop: '3%', paddingBottom: '3%' }}
                      ></img>
                    </div>
                    <div className='txtWrap'>
                      <div className='title'>전체톡방</div>
                      <div className='content'>ds</div>
                    </div>
                  </div>
                  <div
                    className='col-12'
                    style={{
                      display: 'flex',
                      padding: '15px 15px',
                      cursor: 'pointer',
                    }}
                    onClick={() => {}}
                  >
                    <div className='profile__thumbnail'>
                      <img
                        src={
                          process.env.PUBLIC_URL + props.developerDetail.imgURL
                        }
                        width='50%'
                        style={{ paddingTop: '3%', paddingBottom: '3%' }}
                      ></img>
                    </div>
                    <div className='txtWrap'>
                      <div className='title'>전체톡방</div>
                      <div className='content'>ds</div>
                    </div>
                  </div>
                  <div
                    className='col-12'
                    style={{
                      display: 'flex',
                      padding: '15px 15px',
                      cursor: 'pointer',
                    }}
                    onClick={() => {}}
                  >
                    <div className='profile__thumbnail'>
                      <img
                        src={
                          process.env.PUBLIC_URL + props.developerDetail.imgURL
                        }
                        width='50%'
                        style={{ paddingTop: '3%', paddingBottom: '3%' }}
                      ></img>
                    </div>
                    <div className='txtWrap'>
                      <div className='title'>dp톡방</div>
                      <div className='content'>ds</div>
                    </div>
                  </div>
                </div>
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
export default Profile;
