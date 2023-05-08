function Talk() {
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
          className='g-col-6 g-col-md-4'
          style={{
            border: '1px solid rgb(222,222,222)',
            width: '50%',
            backgroundColor: 'white',
            borderRadius: '5px',
          }}
        >
          <p style={{ fontSize: '24px' }}>공지목록</p>
          <div>
            <div
              style={{
                marginBottom: '1%',
                border: '1px solid rgb(222,222,222)',
                alignItems: 'center',
              }}
            >
              <a href='#' style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    display: 'flex',

                    color: 'black',
                  }}
                >
                  <p
                    style={{
                      paddingLeft: '3%',
                      fontWeight: '600',
                    }}
                  >
                    김일환님이 신규 가입하셨습니다
                    <p style={{ paddingTop: '5%', fontWeight: '100' }}>
                      본 직무는 웹프론트엔드이며 수준은 초심자입니다. 😊{' '}
                    </p>
                  </p>
                </div>
              </a>
            </div>
            <div
              style={{
                marginBottom: '1%',
                border: '1px solid rgb(222,222,222)',
                alignItems: 'center',
              }}
            >
              <a href='#' style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    display: 'flex',

                    color: 'black',
                  }}
                >
                  <p
                    style={{
                      paddingLeft: '3%',
                      fontWeight: '600',
                    }}
                  >
                    5/1 (월)은 회의는 6/12(월)로 변경되어 진행예상됩니다 !
                    <p style={{ paddingTop: '5%', fontWeight: '100' }}>
                      회의때 필요한 자료나 정보 있으면 말해주세요 !!
                    </p>
                  </p>
                </div>
              </a>
            </div>
            <div
              style={{
                marginBottom: '1%',
                border: '1px solid rgb(222,222,222)',
                alignItems: 'center',
              }}
            >
              <a href='#' style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    display: 'flex',

                    color: 'black',
                  }}
                >
                  <p
                    style={{
                      paddingLeft: '3%',
                      fontWeight: '600',
                    }}
                  >
                    유승민님이 신규 가입하셨습니다
                    <p style={{ paddingTop: '5%', fontWeight: '100' }}>
                      본 직무는 DB/빅데이터/DS이며 수준은 초보입니다. 😊
                    </p>
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
            width: '50%',

            backgroundColor: 'white',
            borderRadius: '5px',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/main.jpg'}
            style={{
              width: '100%',
              height: '200px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></img>
          <div style={{ display: 'flex' }}>
            <div
              className='g-col-6 g-col-md-4 '
              style={{
                border: '1px solid rgb(222,222,222)',
                width: '70%',
                backgroundColor: '#abc1d1',
                borderRadius: '5px',
              }}
            >
              <header className='alt-header'>
                <div className='alt-header__column'>
                  <h1
                    className='alt-header__title'
                    style={{ fontSize: '22px' }}
                  >
                    <p>캡스톤 디자인</p>
                  </h1>
                </div>
                <div
                  className='alt-header__column'
                  style={{ padding: '0' }}
                ></div>
              </header>
              <main class='main-screen main-chat'>
                <div class='chat__timestamp'>2023년, 2월 17일, 금요일</div>
                <div class='message-row'>
                  <img src='https://avatars.githubusercontent.com/u/103355252?s=96&v=4'></img>
                  <div class='message-row__content'>
                    <span
                      class='message__author'
                      style={{ paddingRight: '65%' }}
                    >
                      용호
                    </span>
                    <div class='message__info'>
                      <span class='message__bubble'>Hi!</span>
                      <span class='message__time'>21:27</span>
                    </div>
                  </div>
                </div>
                <div
                  class='message-row message-row--own'
                  style={{ marginRight: '3%' }}
                >
                  <div class='message__info'>
                    <span
                      class='message__bubble'
                      style={{
                        backgroundColor: 'white',
                        padding: '13px',
                        fontSize: '15px',
                        borderRadius: '15px',
                        borderTopRightRadius: '0px',
                      }}
                    >
                      하이
                    </span>
                    <span class='message__time'>21:27</span>
                  </div>
                </div>
              </main>
              <form class='reply'>
                <div class='reply__column'>
                  <i class='fas fa-plus fa-lg'></i>
                </div>
                <div class='reply__column'>
                  <input
                    type='text'
                    placeholder='Write a message'
                    style={{
                      marginBottom: '3%',
                      border: '1px solid rgb(222,222,222)',
                      backgroundColor: 'white',
                      outline: 'none',
                      marginRight: '1%',
                      borderRadius: '5px',
                    }}
                  ></input>

                  <button
                    style={{
                      marginBottom: '3%',
                      border: '1px solid rgb(222,222,222)',
                      backgroundColor: 'white',
                    }}
                  >
                    보내기
                  </button>
                </div>
              </form>
            </div>
            <div
              className='g-col-6 g-col-md-4 '
              style={{
                border: '1px solid rgb(222,222,222)',
                width: '30%',
                backgroundColor: 'white',
                borderRadius: '5px',
                display: 'inline-block',
              }}
            >
              <div>
                <div>
                  {' '}
                  <button style={{ width: '100%', marginBottom: '10%' }}>
                    ?
                  </button>
                </div>

                <div>
                  {' '}
                  <button style={{ width: '100%', marginBottom: '10%' }}>
                    공지보기
                  </button>
                </div>

                <div>
                  {' '}
                  <button
                    style={{
                      width: '100%',
                      marginBottom: '10%',
                    }}
                  >
                    캘린더
                  </button>
                </div>
                <div>
                  <div>
                    {' '}
                    <button style={{ width: '100%', marginBottom: '10%' }}>
                      뒤로가기
                    </button>
                  </div>

                  <div>
                    {' '}
                    <button style={{ width: '100%', marginBottom: '10%' }}>
                      톡방보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Talk;
