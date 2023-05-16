import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function SignUp(props) {
  const [firstSelectValue, setFirstSelectValue] = useState('');
  const [secondSelectValue, setSecondSelectValue] = useState('');

  // 1번째 select 박스의 onChange 핸들러
  const handleFirstSelectChange = (event) => {
    const value = event.target.value;
    setFirstSelectValue(value);
  };

  // 2번째 select 박스의 onChange 핸들러
  const handleSecondSelectChange = (event) => {
    const value = event.target.value;
    setSecondSelectValue(value);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='card card-style1 border-0'>
          <div className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'>
            <span
              style={{
                display: 'block',
                textAlign: 'start',
                color: 'rgb(148,178,249)',
              }}
            >
              정보 기본설정
            </span>
            <span
              style={{
                fontWeight: '700',
                fontSize: '17px',
                display: 'block',
                textAlign: 'start',
              }}
            >
              회원가입이 바로 완료됩니다.
            </span>
            <br></br>
            <hr></hr>
            <br></br>
            <div className='row align-items-center' style={{ border: 'none' }}>
              <ul className='list-unstyled mb-1-9'>
                <li className='mb-2 mb-xl-3'>
                  <div style={{ textAlign: 'start', marginBottom: '1%' }}>
                    <span
                      className='display-26 text-secondary me-2 font-weight-600'
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                      }}
                    >
                      이메일
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{ textAlign: 'start' }}
                  >
                    <span className='col-lg-8'>
                      <input
                        type='email'
                        style={{
                          width: '70%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginRight: '1%',
                        }}
                      ></input>
                    </span>
                    <span className='col-lg-4'>
                      <button
                        style={{
                          border: '1px solid rgb(222,222,222)',
                          borderRadius: '5px',
                          padding: '5px 14px',
                          fontWeight: '600',
                          color: 'white',
                          backgroundColor: 'rgba(151,150,167,1)',
                        }}
                      >
                        중복확인
                      </button>
                    </span>
                    <span
                      style={{
                        marginTop: '1%',
                        display: 'block',
                        textAlign: 'start',
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      사용가능한 이메일입니다.
                    </span>
                  </div>
                </li>
                <li className='mb-2 mb-xl-3'>
                  <div style={{ textAlign: 'start', marginBottom: '1%' }}>
                    <span
                      className='display-26 text-secondary me-2 font-weight-600'
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                      }}
                    >
                      아이디
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{ textAlign: 'start' }}
                  >
                    <span className='col-lg-8'>
                      <input
                        type='email'
                        style={{
                          width: '70%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginRight: '1%',
                        }}
                      ></input>
                    </span>
                    <span className='col-lg-4'>
                      <button
                        style={{
                          border: '1px solid rgba(222,222,222)',
                          borderRadius: '5px',
                          padding: '5px 14px',
                          fontWeight: '600',
                          backgroundColor: 'rgba(151,150,167,1)',
                          color: 'white',
                        }}
                      >
                        중복확인
                      </button>
                    </span>
                    <span
                      style={{
                        marginTop: '1%',
                        display: 'block',
                        textAlign: 'start',
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      사용가능한 아이디입니다.
                    </span>
                  </div>
                </li>
                <li className='mb-2 mb-xl-3'>
                  <div style={{ textAlign: 'start', marginBottom: '1%' }}>
                    <span
                      className='display-26 text-secondary me-2 font-weight-600'
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                      }}
                    >
                      비밀번호
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{ textAlign: 'start' }}
                  >
                    <span className='col-lg-8'>
                      <input
                        type='password'
                        style={{
                          width: '80%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginRight: '1%',
                        }}
                      ></input>
                    </span>
                  </div>
                </li>
                <li className='mb-2 mb-xl-3'>
                  <div style={{ textAlign: 'start', marginBottom: '1%' }}>
                    <span
                      className='display-26 text-secondary me-2 font-weight-600'
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                      }}
                    >
                      비밀번호 확인
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{ textAlign: 'start' }}
                  >
                    <span className='col-lg-8'>
                      <input
                        type='email'
                        style={{
                          width: '80%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginRight: '1%',
                        }}
                      ></input>
                    </span>
                    <span
                      style={{
                        marginTop: '1%',
                        display: 'block',
                        textAlign: 'start',
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      비밀번호가 일치합니다.
                    </span>
                  </div>
                </li>
                <li className='mb-2 mb-xl-3'>
                  <div style={{ textAlign: 'start', marginBottom: '1%' }}>
                    <span
                      className='display-26 text-secondary me-2 font-weight-600'
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                      }}
                    >
                      이름
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{ textAlign: 'start' }}
                  >
                    <span className='col-lg-12'>
                      <input
                        type='email'
                        style={{
                          width: '80%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginRight: '1%',
                        }}
                      ></input>
                    </span>
                  </div>
                </li>
                <li className='mb-2 mb-xl-3'>
                  <div style={{ textAlign: 'start', marginBottom: '1%' }}>
                    <span
                      className='display-26 text-secondary me-2 font-weight-600'
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                      }}
                    >
                      직무 , 전문분야 설정
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div className='col-lg-5' style={{ paddingRight: '1%' }}>
                      <SelectBasicExample
                        useState={useState}
                        firstSelectValue={firstSelectValue}
                        setFirstSelectValue={setFirstSelectValue}
                        handleFirstSelectChange={handleFirstSelectChange}
                        secondSelectValue={secondSelectValue}
                        setSecondSelectValue={setSecondSelectValue}
                        handleSecondSelectChange={handleSecondSelectChange}
                      />
                    </div>
                    <div className='col-lg-5' style={{ paddingRight: '1%' }}>
                      <SelectTwo
                        useState={useState}
                        secondSelectValue={secondSelectValue}
                        setSecondSelectValue={setSecondSelectValue}
                        handleSecondSelectChange={handleSecondSelectChange}
                        firstSelectValue={firstSelectValue}
                        setFirstSelectValue={setFirstSelectValue}
                        handleFirstSelectChange={handleFirstSelectChange}
                      />
                    </div>
                  </div>
                  <div
                    className='col-lg-5 mb-4 mb-sm-5'
                    style={{
                      display: 'flex',
                    }}
                  >
                    <CareerSelect></CareerSelect>
                  </div>
                </li>
                <li className='mb-2 mb-xl-3'>
                  <div style={{ textAlign: 'start', marginBottom: '1%' }}>
                    <span
                      className='display-26 text-secondary me-2 font-weight-600'
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                      }}
                    >
                      지역
                    </span>
                  </div>
                  <div
                    className='col-lg-5 mb-4 mb-sm-5'
                    style={{
                      display: 'flex',
                    }}
                  >
                    <RegionSelect></RegionSelect>
                  </div>
                </li>
                <li className='mb-2 mb-xl-3'>
                  <div style={{ textAlign: 'start', marginBottom: '1%' }}>
                    <span
                      className='display-26 text-secondary me-2 font-weight-600'
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                      }}
                    >
                      소개
                    </span>
                  </div>
                  <div>
                    <FormFloatingTextareaExample />
                  </div>
                </li>
                <li className='mb-2 mb-xl-3'>
                  <div style={{ textAlign: 'start', marginBottom: '1%' }}>
                    <span
                      className='display-26 text-secondary me-2 font-weight-600'
                      style={{
                        textAlign: 'start',
                        fontSize: '15px',
                      }}
                    >
                      링크
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{ textAlign: 'start' }}
                  >
                    <span>
                      <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
                    </span>
                    <span className='col-lg-8'>
                      <input
                        type='text'
                        style={{
                          width: '80%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginLeft: '2%',
                        }}
                        placeholder={'Github'}
                      ></input>
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{ textAlign: 'start' }}
                  >
                    <span>
                      <FontAwesomeIcon icon={['fab', 'vimeo']} size='2x' />
                    </span>
                    <span className='col-lg-8'>
                      <input
                        type='text'
                        style={{
                          width: '80%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginLeft: '2%',
                        }}
                        placeholder={'Velog'}
                      ></input>
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{ textAlign: 'start' }}
                  >
                    <span>
                      <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
                    </span>
                    <span className='col-lg-8'>
                      <input
                        type='text'
                        style={{
                          width: '80%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginLeft: '2%',
                        }}
                        placeholder={'Instagram'}
                      ></input>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <button
              style={{
                width: '20%',
                textAlign: 'center',
                border: '1px solid rgb(222,222,222)',
                borderRadius: '5px',
                backgroundColor: '#9796a7',
                color: 'white',
                fontWeight: '600',
                padding: '8px 14px',
              }}
            >
              가입완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function SelectBasicExample(props) {
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        value={props.firstSelectValue}
        onChange={props.handleFirstSelectChange}
      >
        <option value=''>선택하세요</option>
        <option value='option1'>프론트엔드개발자</option>
        <option value='option2'>벡엔드개발자</option>
        <option value='option3'>웹개발자</option>
        <option value='option4'>앱개발자</option>
        <option value='option5'>시스템 엔지니어</option>
        <option value='option6'>네트워크 엔지니어</option>
        <option value='option7'>DBA</option>
        <option value='option8'>데이터 엔지니어</option>
        <option value='option9'>데이터 사이언티스트</option>
        <option value='option10'>보안 엔지니어</option>
        <option value='option11'>소프트웨어 개발자</option>
        <option value='option12'>게임 개발자</option>
        <option value='option13'>하드웨어 개발자</option>
        <option value='option14'>머신러닝 개발자</option>
        <option value='option15'>블록체인 개발자</option>
        <option value='option16'>클라우드엔지니어</option>
        <option value='option17'>웹퍼블리셔</option>
        <option value='option18'>QA</option>
      </Form.Select>
    </>
  );
}
function SelectTwo(props) {
  return (
    <Form.Select
      aria-label='Default select example'
      value={props.secondSelectValue}
      onChange={props.handleSecondSelectChange}
    >
      {props.firstSelectValue === 'option1' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>GUI</option>
          <option value='subOption3'>반응형 웹</option>
          <option value='subOption4'>인터페이스</option>
        </>
      )}
      {props.firstSelectValue === 'option2' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>서버관리</option>
          <option value='subOption3'>SI개발</option>
          <option value='subOption4'>클라이언트</option>
          <option value='subOption5'>HTTP</option>
          <option value='subOption6'>핀테크</option>
        </>
      )}
      {props.firstSelectValue === 'option3' && (
        <>
          <option value='subOption1'>전체</option>
        </>
      )}
      {props.firstSelectValue === 'option4' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>SI개발</option>
          <option value='subOption3'>인터페이스</option>
          <option value='subOption4'>증강현실</option>
          <option value='subOption5'>가상현실</option>
          <option value='subOption6'>핀테크</option>
          <option value='subOption7'>메타버스</option>
          <option value='subOption8'>챗봇</option>
          <option value='subOption9'>음성인식</option>
          <option value='subOption10'>암호화페</option>
        </>
      )}
      {props.firstSelectValue === 'option5' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>시스템운영</option>
          <option value='subOption3'>서버관리</option>
          <option value='subOption4'>서버구축</option>
          <option value='subOption5'>시스템설계</option>
          <option value='subOption6'>시스템분석</option>
          <option value='subOption7'>네트워크관리</option>
          <option value='subOption8'>펌웨어</option>
          <option value='subOption9'>SI개발</option>
        </>
      )}
      {props.firstSelectValue === 'option6' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>시스템운영</option>
          <option value='subOption3'>네트워크관리</option>
          <option value='subOption4'>서버구축</option>
        </>
      )}
      {props.firstSelectValue === 'option7' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>데이터관리</option>
          <option value='subOption3'>데이터마이닝</option>
          <option value='subOption4'>모델링</option>
          <option value='subOption5'>DBMS</option>
          <option value='subOption6'>DW모델러</option>
          <option value='subOption7'>DB튜닝</option>
          <option value='subOption8'>OLAP개발자</option>
        </>
      )}
      {props.firstSelectValue === 'option8' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>빅데이터</option>
          <option value='subOption3'>데이터파이프라인</option>
          <option value='subOption4'>데이터레이크</option>
          <option value='subOption5'>ETL</option>
        </>
      )}
      {props.firstSelectValue === 'option9' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>데이터분석</option>
          <option value='subOption3'>분석모델링</option>
          <option value='subOption4'>데이터시각화</option>
          <option value='subOption5'>BI</option>
        </>
      )}
      {props.firstSelectValue === 'option10' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>정보보안</option>
          <option value='subOption3'>방화벽</option>
          <option value='subOption4'>보안관제</option>
          <option value='subOption5'>네트워크관리</option>
        </>
      )}
      {props.firstSelectValue === 'option11' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>SI개발</option>
          <option value='subOption3'>시스템설계</option>
          <option value='subOption4'>시스템분석</option>
          <option value='subOption5'>클라이언트</option>
          <option value='subOption6'>아키텍처</option>
          <option value='subOption7'>정보보안</option>
        </>
      )}
      {props.firstSelectValue === 'option12' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>MMORPG</option>
          <option value='subOption3'>클라이언트</option>
          <option value='subOption4'>모델링</option>
          <option value='subOption5'>메타버스</option>
          <option value='subOption6'>가상현실</option>
          <option value='subOption7'>증강현실</option>
        </>
      )}
      {props.firstSelectValue === 'option13' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>회로설계</option>
          <option value='subOption3'>펌웨어</option>
          <option value='subOption4'>시스템설계</option>
          <option value='subOption5'>검증</option>
          <option value='subOption6'>시스템분석</option>
        </>
      )}
      {props.firstSelectValue === 'option14' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>인공지능</option>
          <option value='subOption3'>딥러닝</option>
          <option value='subOption4'>자연어처리</option>
          <option value='subOption5'>모델링</option>
          <option value='subOption6'>이미지프로세싱</option>
          <option value='subOption7'>챗봇</option>
          <option value='subOption8'>음성인식</option>
        </>
      )}
      {props.firstSelectValue === 'option15' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>스마트컨트랙트</option>
          <option value='subOption3'>Dapp</option>
          <option value='subOption4'>암호화폐</option>
          <option value='subOption5'>DID</option>
        </>
      )}
      {props.firstSelectValue === 'option16' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>클라우드아키텍트</option>
          <option value='subOption3'>클라우드개발자</option>
          <option value='subOption4'>네트워크관리</option>
          <option value='subOption5'>솔루션스아키텍트</option>
        </>
      )}
      {props.firstSelectValue === 'option17' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>웹표준,웹접근성</option>
          <option value='subOption3'>반응형웹</option>
          <option value='subOption4'>웹마스터</option>
          <option value='subOption5'>GUI</option>
        </>
      )}
      {props.firstSelectValue === 'option18' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>검증</option>
          <option value='subOption1'>테스터</option>
          <option value='subOption1'>웹마스터</option>
        </>
      )}
    </Form.Select>
  );
}
function CareerSelect(props) {
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        value={props.firstSelectValue}
        onChange={props.handleFirstSelectChange}
      >
        <option value=''>선택하세요</option>
        <option value='option1'>초보</option>
        <option value='option2'>중수</option>
        <option value='option3'>고수</option>
      </Form.Select>
    </>
  );
}
function RegionSelect(props) {
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        value={props.firstSelectValue}
        onChange={props.handleFirstSelectChange}
      >
        <option value=''>선택하세요</option>
        <option value='option1'>서울</option>
        <option value='option2'>인천</option>
        <option value='option3'>경기</option>
        <option value='option4'>세종</option>
        <option value='option5'>충남</option>
        <option value='option6'>충북</option>
        <option value='option7'>광주</option>
        <option value='option8'>전남</option>
        <option value='option9'>전북</option>
        <option value='option10'>대구</option>
        <option value='option11'>경북</option>
        <option value='option12'>부산</option>
        <option value='option13'>울산</option>
        <option value='option14'>경남</option>
        <option value='option15'>강원</option>
        <option value='option16'>제주</option>
        <option value='option17'>전국</option>
      </Form.Select>
    </>
  );
}
function FormFloatingTextareaExample() {
  return (
    <>
      <FloatingLabel controlId='floatingTextarea2' label='Comments'>
        <Form.Control
          as='textarea'
          placeholder='Leave a comment here'
          style={{ height: '20vh', resize: 'none' }}
        />
      </FloatingLabel>
    </>
  );
}
export default SignUp;
