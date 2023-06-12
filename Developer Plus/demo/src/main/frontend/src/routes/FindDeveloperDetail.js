import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import { jobs, icons2 } from '../icons2';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import { useRef } from 'react';
function FindDeveloperDetail(props) {
  let [maintab, setMainTab] = useState(0);
  let { id } = useParams();
  // let { id } = useParams(); // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  // let projectDetail = props.allProjectDto.find(function (x) {
  //   return x.id == id;
  // });
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

  let [tab, setTab] = useState(0);

  // let [req2, setReq2] = useState(projectDetail.requireJob);
  // console.log(req2);
  return (
    <div className='bg-light' style={{ marginTop: '-6%' }}>
      <div className='container' style={{ paddingTop: '3%' }}>
        <div className='row'>
          <h2
            style={{
              textAlign: 'center',
              paddingTop: '5%',

              fontWeight: '600',
            }}
          >
            {projectDetail.title}
          </h2>
          <p style={{ textAlign: 'center' }}>{projectDetail.name}</p>
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
    </div>
  );
}
function MainTabContent(props) {
  return (
    <>
      <div className='col-lg-12'>
        <div className='row ' style={{ border: 'none', display: 'flex' }}>
          <div className='col-lg-12 ' style={{ alignItems: 'center' }}>
            <img
              src={process.env.PUBLIC_URL + props.projectDetail.imgURL}
              width='100%'
              style={{ textAlign: 'center' }}
            ></img>
          </div>
        </div>
      </div>

      <TabContent
        tab={props.tab}
        projectDetail={props.projectDetail}
        icons2={props.icons2}
        skillDetail={props.skillDetail}
        i={props.i}
      />
    </>
  );
}
function TabContent(props) {
  const editorRef = useRef();
  let markdown = props.projectDetail.content;
  console.log(markdown);
  let skillDetail =
    props.projectDetail.skill != null
      ? props.projectDetail.skill.split(',')
      : [];
  if (props.tab == 0) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 'auto',
        }}
      >
        <div
          className='col-lg-12 '
          style={{ display: 'block', width: '70%', marginLeft: '5%' }}
        >
          <span
            className=' text-secondary me-2 font-weight-600'
            style={{
              textAlign: 'start',
              fontSize: '25px',
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
              {props.projectDetail.content && (
                <Viewer initialValue={props.projectDetail?.content} />
              )}
            </span>{' '}
          </div>
          <hr style={{ width: '90%' }}></hr>
          <br></br>
          <span
            className=' text-secondary me-2 font-weight-600'
            style={{
              textAlign: 'start',
              fontSize: '25px',
              marginBottom: '10%',
            }}
          >
            [모집현황]
          </span>
          <div
            style={{
              fontSize: '15px',
              marginTop: '2%',
              width: '80%',
            }}
          >
            <Jobs projectDetail={props.projectDetail}></Jobs>
          </div>
          <hr style={{ width: '90%' }}></hr>
          <br></br>
          <span
            className=' text-secondary me-2 font-weight-600'
            style={{
              textAlign: 'start',
              fontSize: '25px',
              marginBottom: '10%',
            }}
          >
            [사용스킬]
          </span>
          <div
            style={{
              fontSize: '15px',
              marginTop: '2%',
              width: '50%',
            }}
          >
            <div className='col-lg-12 mb-4 mb-sm-5'>
              <div>
                <div style={{ padding: '3%' }}>
                  <div style={{ textAlign: 'start' }}>
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
                            fontSize: '18px',
                          }}
                        >
                          {skillDetail.map((ele, i) => {
                            return (
                              <Icons2
                                key={i}
                                icons2={icons2}
                                i={i}
                                ele={ele}
                                developerDetail={props.developerDetail}
                                skillDetail={skillDetail}
                              />
                            );
                          })}
                        </div>
                      </div>{' '}
                    </div>
                  </div>
                </div>
              </div>
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
              <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
            </span>{' '}
            <span
              onClick={() => {}}
              style={{ cursor: 'pointer', fontWeight: '600' }}
            >
              인스타그램
            </span>
          </p>
        </div>

        <div
          style={{
            width: '20%',
            marginRight: '5%',
            position: 'sticky',
            top: '0',
          }}
        >
          <div
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              top: '100px',
              position: 'sticky',
            }}
          >
            <div
              style={{
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
                  {props.projectDetail.startDate}~{props.projectDetail.endDate}
                </p>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Jobs(props) {
    const [countNowJob, setCountNowJob] = useState(props.projectDetail.nowJob);
    console.log(props.projectDetail.nowJob);

    return (
      <div key={props.i} style={{}}>
        <div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                fontWeight: '600',
                marginRight: '10%',
                marginBottom: '3%',
                fontSize: '18px',
              }}
            >
              [직무]
            </div>
            <div
              style={{
                fontWeight: '600',
                marginRight: '10%',
                marginBottom: '3%',
                fontSize: '18px',
              }}
            >
              {props.projectDetail.job}
            </div>
          </div>
          <div
            style={{ display: 'flex', marginBottom: '2%', textAlign: 'start' }}
          >
            <div
              style={{
                fontWeight: '600',
                marginRight: '10%',
                marginBottom: '3%',
                fontSize: '18px',
              }}
            >
              [분야]
            </div>
            <div
              style={{
                fontWeight: '600',
                marginRight: '10%',
                marginBottom: '3%',
                fontSize: '18px',
              }}
            >
              {props.projectDetail.jobDetail}
            </div>
            <div
              style={{
                fontWeight: '600',
                marginRight: '10%',
                marginBottom: '3%',
                fontSize: '18px',
              }}
            >
              {countNowJob}/{props.projectDetail.requireJob}
            </div>

            <div
              style={{
                marginRight: '10%',
                textAlign: 'start',
              }}
            >
              {' '}
            </div>
            <div style={{ textAlign: 'start' }}>
              {props.projectDetail.requireJob === props.projectDetail.nowJob ? (
                <button style={{}} disabled>
                  마감
                </button>
              ) : (
                <button
                  onClick={() => {
                    setCountNowJob(
                      countNowJob === 0 ? countNowJob === 1 : countNowJob === 0
                    );
                  }}
                >
                  {countNowJob === 0 ? '취소' : '지원'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Skills(props) {
    let skillDetail =
      props.projectDetail.skill != null
        ? props.projectDetail.skill.split(',')
        : '';
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
                      justifyContent: 'start',
                      marginTop: '5%',
                    }}
                  >
                    {skillDetail.map((ele, i) => {
                      return (
                        <Icons2
                          key={i}
                          icons2={icons2}
                          i={i}
                          ele={ele}
                          developerDetail={props.developerDetail}
                          skillDetail={skillDetail}
                        />
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
    <div style={{ justifyContent: 'start' }}>
      <p style={{ paddingLeft: '1%' }}>{props.icons2[props.ele]}</p>
      <p style={{ textAlign: 'center' }}>{props.skillDetail[props.i]}</p>
    </div>
  );
}
export default FindDeveloperDetail;
