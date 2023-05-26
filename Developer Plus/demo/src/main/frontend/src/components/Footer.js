function Footer(props) {
  return (
    <footer
      className='footer_tab'
      style={{
        padding: '1% 5%',
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '700',
        cursor: 'pointer',
      }}
    >
      <div className='footer_tab2'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ padding: '8px 12px' }}>
            <p style={{ textDecoration: 'none', color: 'black' }}>
              Developer Plus
            </p>
          </div>
          <div style={{ display: 'flex', margin: '0', paddingRight: '1%' }}>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                margin: '0',
                padding: '0',
              }}
            >
              <li style={{ padding: '8px 12px' }}>
                <a
                  onClick={() => {
                    props.navigate('/viewDeveloper');
                  }}
                  style={{
                    color: 'black',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  개발자
                </a>
              </li>
              <li style={{ padding: '8px 12px' }}>
                <a
                  onClick={() => {
                    props.navigate('/findDeveloper');
                  }}
                  style={{
                    color: 'black',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  프로젝트
                </a>
              </li>
              <li style={{ padding: '8px 12px' }}>
                <a
                  onClick={() => {
                    props.navigate('/story');
                  }}
                  style={{
                    color: 'black',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  스토리
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ul style={{ listStyle: 'none' }}>
            <li style={{ fontSize: '10px' }}>
              {' '}
              <p>(주)Developer Plus | 대표이사 박용호(qkaxhf8823@naver.com)</p>
            </li>
            <li style={{ fontSize: '10px' }}>
              {' '}
              <p>
                서울특별시 중랑구 용마산로90길 28 (주)Developer Plus |
                02-0000-0000
              </p>
            </li>

            <li style={{ fontSize: '10px' }}>
              <p>
                사업자등록번호 679-87-00428 | 통신판매업신고번호
                제2018-서울강남-02246호(사업자정보확인) |
                유료직업소개사업등록번호: (국내)제2020-3220237-14-5-00014호
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
