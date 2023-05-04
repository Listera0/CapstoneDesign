import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return (
    <div className='container'>
      <div
        class='grid text-center'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '1%',
        }}
      >
        <div
          className='g-col-6 g-col-md-4 profile_bookmark'
          style={{
            border: '1px solid rgb(222,222,222)',
            width: '25%',
            backgroundColor: 'white',
            borderRadius: '5px',
          }}
        >
          <h2 style={{ padding: '5%', fontSize: '22px' }}>북마크 목록</h2>
          <div>
            <div style={{ marginBottom: '1%' }}>
              <a href='#'>
                <div
                  style={{
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    display: 'flex',
                  }}
                >
                  <div>
                    <FontAwesomeIcon icon={faBookmark} />{' '}
                  </div>
                  <p style={{ paddingLeft: '3%' }}>나윤재</p>
                </div>
              </a>
            </div>
            <div style={{ marginBottom: '1%' }}>
              <a href='#'>
                <div
                  style={{
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    display: 'flex',
                  }}
                >
                  <div>
                    <FontAwesomeIcon icon={faBookmark} />{' '}
                  </div>
                  <p style={{ paddingLeft: '3%' }}>
                    [서울] [직장인들을 위한 플랫폼 만들어봐요]
                  </p>
                </div>
              </a>
            </div>
            <div style={{ marginBottom: '1%' }}>
              <a href='#'>
                <div
                  style={{
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    display: 'flex',
                  }}
                >
                  <div>
                    <FontAwesomeIcon icon={faBookmark} />{' '}
                  </div>
                  <p style={{ paddingLeft: '3%' }}>
                    LINE 오픈챗 서버가 100배 급증하는 트래픽을 다루는 방법
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className='g-col-6 g-col-md-4 '
          style={{
            border: '1px solid rgb(222,222,222)',
            width: '45%',

            backgroundColor: 'white',
            borderRadius: '5px',
            paddingTop: '5%',
          }}
        >
          <div className='col-div'>
            <img
              className='col-div_developer'
              src={process.env.PUBLIC_URL + '/1.jpg'}
            ></img>
          </div>

          <div className='col-content_developer'>
            <p style={{ fontSize: '16px' }}>전준호</p>
            <p
              style={{
                textAlign: 'center',

                fontSize: '20px',
              }}
            >
              정보
            </p>
            <hr></hr>
            <p>[본 직무]</p>
            <p>벡엔드</p>
            <p>[부 직무]</p>
            <p>서버 관리자</p>
            <p>[경력]</p>
            <p>신입</p>
            <p>[소개]</p>
            <p>안녕하세요.박용호입니다.</p>
            <p>[링크]</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <p style={{ paddingRight: '2%' }}>
                {' '}
                <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
              </p>
              <div>
                <p> https://github.com/ParkYongHo1 </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className='g-col-6 g-col-md-4 '
          style={{
            border: '1px solid rgb(222,222,222)',
            width: '25%',

            backgroundColor: 'white',
            borderRadius: '5px',
          }}
        >
          <h2 style={{ padding: '5%', fontSize: '22px' }}>대화방</h2>
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
  );
}
export default Profile;
