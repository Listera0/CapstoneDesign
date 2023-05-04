import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
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
  let developerDetail = props.developer.find(function (x) {
    return x.id == id;
  });
  let [tab, setTab] = useState(0);

  return (
    <section class='bg-light'>
      <div class='container' style={{ marginTop: '-3%' }}>
        <div class='row'>
          <div class='col-lg-12 mb-4 mb-sm-5'>
            <div class='card card-style1 border-0'>
              <div class='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'>
                <div class='row align-items-center'>
                  <div class='col-lg-6 mb-4 mb-lg-0'>
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
                  <div class='col-lg-6 px-xl-10'>
                    <div>
                      <h3 style={{ textAlign: 'start' }}>
                        {developerDetail.name}
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
                          <span
                            style={{ textAlign: 'start', fontSize: '15px' }}
                          >
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
                          <span
                            style={{ textAlign: 'start', fontSize: '15px' }}
                          >
                            010-8823-5776
                          </span>
                        </p>
                      </li>

                      <li class='mb-2 mb-xl-3 display-28'>
                        <p
                          class='display-26 text-secondary me-2 font-weight-600'
                          style={{ textAlign: 'start' }}
                        >
                          참여중인 프로젝트 {developerDetail.projectCount}개
                          있습니다
                        </p>{' '}
                      </li>
                    </ul>
                    <div className='subdiv'>
                      <div className='col-6 ' style={{ fontSize: '15px' }}>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            let copy = [...props.goodCount];
                            copy[1] = copy[1] + 1;
                            props.changeGoodCount(copy);
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          👍
                        </span>
                        {props.goodCount[1]}
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
                Link
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent tab={tab} developerDetail={developerDetail} />
        </div>
      </div>
    </section>
  );
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
export default ViewDeveloperDetail;
