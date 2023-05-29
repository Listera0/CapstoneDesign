import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function ProfileDetail() {
  const [firstSelectValue, setFirstSelectValue] = useState('');
  const [secondSelectValue, setSecondSelectValue] = useState('');
  const navigate = useNavigate();
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
              프로필작성이 완료됩니다.
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
                      스킬
                    </span>
                  </div>
                  <div
                    className='col-lg-5 mb-4 mb-sm-5'
                    style={{
                      display: 'flex',
                    }}
                  >
                    <SkillSelect
                      useState={useState}
                      secondSelectValue={secondSelectValue}
                      setSecondSelectValue={setSecondSelectValue}
                      handleSecondSelectChange={handleSecondSelectChange}
                      firstSelectValue={firstSelectValue}
                      setFirstSelectValue={setFirstSelectValue}
                      handleFirstSelectChange={handleFirstSelectChange}
                    ></SkillSelect>
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
                </li>
              </ul>
            </div>
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
              <button
                style={{
                  border: '1px solid rgb(222,222,222)',
                  borderRadius: '5px',
                  backgroundColor: '#9796a7',
                  color: 'white',
                  fontWeight: '600',
                  padding: '8px 14px',
                  textAlign: 'center',
                }}
              >
                작성완료
              </button>
            </div>
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
        <option value='option1'>기획</option>
        <option value='option2'>디자인</option>
        <option value='option3'>프론트엔드개발</option>
        <option value='option4'>벡엔드개발</option>
        <option value='option5'>사업</option>
        <option value='option6'>기타</option>
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
          <option value='subOption2'>UX/UI기획</option>
          <option value='subOption3'>게임기획</option>
          <option value='subOption4'>프로젝트 매니저</option>
          <option value='subOption5'>하드웨어(제품) 기획</option>
          <option value='subOption6'>(기획)기타</option>
        </>
      )}
      {props.firstSelectValue === 'option2' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>그래픽디자인</option>
          <option value='subOption3'>UX/UI디자인</option>
          <option value='subOption4'>3D디자인</option>
          <option value='subOption5'>하드웨어(제품)디자인</option>
          <option value='subOption6'>디자인(기타)</option>
        </>
      )}
      {props.firstSelectValue === 'option3' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>IOS</option>
          <option value='subOption3'>안드로이드</option>
          <option value='subOption4'>웹프론트엔드</option>
          <option value='subOption5'>웹퍼블리셔</option>
          <option value='subOption6'>크로스플랫폼</option>
          <option value='subOption7'>임베디드SW</option>
        </>
      )}
      {props.firstSelectValue === 'option4' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>웹서버</option>
          <option value='subOption3'>블록체인</option>
          <option value='subOption4'>AI</option>
          <option value='subOption5'>DB/빅데이터/DS</option>
          <option value='subOption6'>게임서버</option>
        </>
      )}
      {props.firstSelectValue === 'option5' && (
        <>
          <option value='subOption1'>전체</option>
          <option value='subOption2'>사업기획</option>
          <option value='subOption3'>마케팅</option>
          <option value='subOption4'>재무/회계</option>
          <option value='subOption5'>영업</option>
          <option value='subOption6'>전략/컨설팅</option>
          <option value='subOption7'>투자/고문</option>
          <option value='subOption10'>사업(기타)</option>
        </>
      )}
      {props.firstSelectValue === 'option6' && (
        <>
          <option value='option1'>전체</option>
          <option value='option2'>DBA</option>
          <option value='option3'>데이터 엔지니어</option>
          <option value='option4'>데이터 사이언티스트</option>
          <option value='option5'>보안 엔지니어</option>
          <option value='option6'>소프트웨어 개발자</option>
          <option value='option7'>게임 개발자</option>
          <option value='option8'>하드웨어 개발자</option>
          <option value='option9'>머신러닝 개발자</option>
          <option value='option10'>클라우드엔지니어</option>
          <option value='option11'>QA</option>
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
function SkillSelect(props) {
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        value={props.firstSelectValue}
        onChange={props.handleFirstSelectChange}
      >
        <option value='' data-image='C:\Users\82108\Desktop\python.jpg'>
          선택하세요
        </option>
        <option value='option1'>Python</option>
        <option value='option2'>C</option>
        <option value='option3'>C++</option>
        <option value='option4'>Java</option>
        <option value='option5'>C#</option>
        <option value='option6'>JavaScript</option>
        <option value='option7'>TypeScript</option>6
        <option value='option8'>Assembly</option>
        <option value='option9'>Swift</option>
        <option value='option10'>PHP</option>
        <option value='option11'>Go</option>
        <option value='option12'>R</option>
        <option value='option13'>Ruby</option>
        <option value='option14'>Rust</option>
        <option value='option15'>Kotlin</option>
        <option value='option16'>Vue.js</option>
        <option value='option17'>jQuery</option>
        <option value='option18'>Nuxt.js</option>
        <option value='option19'>Next.js</option>
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
export default ProfileDetail;
