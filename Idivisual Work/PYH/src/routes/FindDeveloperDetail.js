function FindDeveloperDetail(props) {
  return (
    <div
      className='container'
      style={{ paddingLeft: '20%', paddingRight: '20%' }}
    >
      <div
        className='row'
        width='30%'
        style={{ paddingTop: '2%', paddingBottom: '2%' }}
      >
        <div className='col-12'>
          <p style={{ fontSize: '22px' }}>
            [서울] [직장인들을 위한 플랫폼 만들어봐요]
          </p>
        </div>
        <div style={{ paddingTop: '2%', paddingBottom: '2%' }}>
          <img src={process.env.PUBLIC_URL + '/main.jpg'} width='50%'></img>
        </div>
        <p>안녕하세요 직무전환을 위해 사이드 프로젝트를 진행하려고 합니다!</p>
        <p>
          현재는 사이드 프로젝트지만, 후에 앱 런칭과 운영까지 생각하고 있어요 🙂
        </p>
        <p>프로젝트 인원은 9명이고, 필요에 따라 증원될 수 있습니다.</p>
        <div style={{ paddingTop: '2%', paddingBottom: '2%', display: 'flex' }}>
          <div className='col-6'>
            <h4>모집인원</h4>
            <p>프론트엔드 2/3명</p>
            <p>벡 엔드 1/2명</p>
            <p>서버개발 0/1명</p>
          </div>
          <div className='col-6'>
            <h4>담당자 연락처</h4>
            <p>이름 박용호</p>
            <p>전화번호 010-8823-5776</p>
            <p>이메일 qkaxhf8823@naver.com</p>
            <button
              style={{
                width: '50%',
                alignItems: 'center',
                backgroundColor: 'white',
                border: '1px solid rgb(222,222,222)',
                borderRadius: '5px',
              }}
            >
              담당자와 연락
            </button>
          </div>
        </div>
        <div>
          <button
            style={{
              width: '30%',
              alignItems: 'center',
              backgroundColor: 'white',
              border: '1px solid rgb(222,222,222)',
              borderRadius: '5px',
            }}
          >
            연락하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindDeveloperDetail;
