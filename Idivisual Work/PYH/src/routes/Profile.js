import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
function Profile(props) {
  let { id } = useParams(); // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  let developerDetail = props.developer.find(function (x) {
    return x.id == id;
  });
  let [tab, setTab] = useState(0);
  let [maintab, setMainTab] = useState(0);
  return (
    <section class='bg-light' style={{ marginTop: '-6%' }}>
      <div class='container' style={{ paddingTop: '3%' }}>
        <div class='row'>
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
          <Nav
            fill
            variant='tabs'
            defaultActiveKey='link0'
            style={{ paddingTop: '5%' }}
          >
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setMainTab(0);
                }}
                eventKey='link0'
              >
                정보
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setMainTab(1);
                }}
                eventKey='link1'
              >
                북마크
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <MainTabContent
            tab={tab}
            maintab={maintab}
            setTab={setTab}
            developerDetail={developerDetail}
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
        <div class='col-lg-8 mb-4 mb-sm-5'>
          <div class='card card-style1 border-0'>
            <div class='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'>
              <div class='row align-items-center'>
                <div class='col-lg-6 mb-4 mb-lg-0'>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/' +
                      props.developerDetail.id +
                      '.jpg'
                    }
                    width='70%'
                    style={{ paddingTop: '3%', paddingBottom: '3%' }}
                  ></img>
                </div>
                <div class='col-lg-6 px-xl-10'>
                  <div>
                    <h3 style={{ textAlign: 'start', fontWeight: '600' }}>
                      {props.developerDetail.name}
                    </h3>
                  </div>
                  <ul class='list-unstyled mb-1-9'>
                    <li class='mb-2 mb-xl-3 display-28'>
                      <p style={{ textAlign: 'start' }}>
                        <span
                          class='display-26 text-secondary me-2 font-weight-600'
                          style={{ textAlign: 'start', fontSize: '18px' }}
                        >
                          Email
                        </span>
                        <span style={{ textAlign: 'start', fontSize: '15px' }}>
                          qkaxhf8823@naver.com
                        </span>
                      </p>
                    </li>
                    <li class='mb-2 mb-xl-3 display-28'>
                      <p style={{ textAlign: 'start' }}>
                        <span
                          class='display-26 text-secondary me-2 font-weight-600'
                          style={{ textAlign: 'start', fontSize: '18px' }}
                        >
                          Phone
                        </span>
                        <span style={{ textAlign: 'start', fontSize: '15px' }}>
                          010-8823-5776
                        </span>
                      </p>
                    </li>

                    <li class='mb-2 mb-xl-3 display-28'>
                      <p
                        class='display-26 text-secondary me-2 font-weight-600'
                        style={{ textAlign: 'start' }}
                      >
                        참여중인 프로젝트 {props.developerDetail.projectCount}개
                        있습니다
                      </p>{' '}
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
          <TabContent tab={props.tab} developerDetail={props.developerDetail} />
        </div>
        <div class='col-lg-4 mb-4 mb-sm-5'>
          <div class='card card-style1 border-0'>
            <div
              class='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div class='row align-items-center'>
                <p
                  style={{
                    textAlign: 'start',
                    paddingTop: '5%',
                    paddingLeft: '5%',
                    fontWeight: '600',
                  }}
                >
                  모임
                </p>
                <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                  <button
                    style={{
                      width: '100%',
                      height: '10vh',
                      marginBottom: '3%',
                      border: '1px solid rgb(222,222,222)',
                      backgroundColor: 'white',
                    }}
                  >
                    전체 톡방
                  </button>
                  <button
                    style={{
                      width: '100%',
                      height: '10vh',
                      marginBottom: '3%',
                      border: '1px solid rgb(222,222,222)',
                      backgroundColor: 'white',
                    }}
                  >
                    DP 프로젝트 톡방
                  </button>
                  <button
                    style={{
                      width: '100%',
                      height: '10vh',
                      marginBottom: '3%',
                      border: '1px solid rgb(222,222,222)',
                      backgroundColor: 'white',
                    }}
                  >
                    에타 프로젝트
                  </button>
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
      <div>
        <p></p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <FontAwesomeIcon icon={faBookmark} />
              </th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.developerDetail.name}</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
function TabContent(props) {
  if (props.tab == 0) {
    return (
      <div class='col-lg-12 mb-4 mb-sm-5'>
        <div>
          <span
            class='section-title text-primary mb-3 mb-sm-4'
            style={{ marginTop: '3%' }}
          >
            Profile
          </span>
          <div style={{ padding: '3%' }}>
            <p style={{ textAlign: 'start' }}>
              <span
                class='display-26 text-secondary me-2 font-weight-600'
                style={{
                  textAlign: 'start',
                  fontSize: '18px',
                  marginBottom: '10%',
                }}
              >
                [주 능력]
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
                {props.developerDetail.mainJob}
              </p>
            </p>
            <p style={{ textAlign: 'start' }}>
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
                {props.developerDetail.career}
              </p>
            </p>
            <p style={{ textAlign: 'start' }}>
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
            </p>
            <p style={{ textAlign: 'start' }}>
              <span
                class='display-26 text-secondary me-2 font-weight-600'
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
                {props.developerDetail.subJob}
              </p>
            </p>
            <p style={{ textAlign: 'start' }}>
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
                {props.developerDetail.career}
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (props.tab == 1) {
    return (
      <div class='col-lg-12 mb-4 mb-sm-5'>
        <div>
          <span
            class='section-title text-primary mb-3 mb-sm-4'
            style={{ marginTop: '3%' }}
          >
            About Me
          </span>
          <div style={{ padding: '3%' }}>
            <p style={{ textAlign: 'start' }}>
              <span
                class='display-26 text-secondary me-2 font-weight-600'
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
            </p>
            <p style={{ textAlign: 'start' }}>
              <span
                class='display-26 text-secondary me-2 font-weight-600'
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
            </p>
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
      <div class='col-lg-12 mb-4 mb-sm-5'>
        <div>
          <div class='mb-4 mb-sm-5'>
            <span
              class='section-title text-primary mb-3 mb-sm-4'
              style={{ marginTop: '3%' }}
            >
              Skill
            </span>
          </div>
          <div style={{ padding: '3%' }}>
            <p style={{ textAlign: 'start' }}>
              <span
                class='display-26 text-secondary me-2 font-weight-600'
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
                  {props.developerDetail.skill}
                </span>{' '}
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
