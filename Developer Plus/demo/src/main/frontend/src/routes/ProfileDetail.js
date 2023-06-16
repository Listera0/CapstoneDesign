import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useParams } from 'react-router-dom';
const mkdStr = `
최대 500자까지 작성가능합니다.
`;
function ProfileDetail() {
  const [firstSelectValue, setFirstSelectValue] = useState('');
  const [secondSelectValue, setSecondSelectValue] = useState('');
  const navigate = useNavigate();
  const handleFirstSelectChange = (event) => {
    const value = event.target.value;
    setFirstSelectValue(value);
  };
  const [selectedSkills, setSelectedSkills] = useState([]);
  const handleSkillSelectChange = (selectedSkills) => {
    setSelectedSkills(selectedSkills);
  };
  // 2번째 select 박스의 onChange 핸들러
  const handleSecondSelectChange = (event) => {
    const value = event.target.value;
    setSecondSelectValue(value);
  };
  let { id } = useParams();
  //전화번호 자동 하이폰
  const autoHyphen = (event) => {
    event.target.value = event.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(\-{1,2})$/g, '');
  };
  const githubLink = (event) => {
    event.target.value = event.target.value;
  };
  const velogLink = (event) => {
    event.target.value = event.target.value;
  };
  const editorRef = useRef();
  const [allDevDto, setAllDevDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllDevData')
        .then((response) => {
          setAllDevDto(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }, []);
  }
  const updateUser = (
    _id,
    _imgURL,
    _job,
    _jobDetail,
    _career,
    _region,
    _skill,
    _introduce,
    _urlGithub,
    _urlInsta,
    _phone
  ) => {
    axios
      .post('/api/updateUser', {
        id: _id,
        imgURL: _imgURL,
        job: _job,
        jobDetail: _jobDetail,
        career: _career,
        region: _region,
        skill: _skill,
        introduce: _introduce,
        urlGithub: _urlGithub,
        urlInsta: _urlInsta,
        phone: _phone,
      })
      .then()
      .catch((error) => console.log(error));
  };
  const [imageUrlList] = useState([
    process.env.PUBLIC_URL + '/1people.png',
    process.env.PUBLIC_URL + '/2people.png',
    process.env.PUBLIC_URL + '/3people.png',
    process.env.PUBLIC_URL + '/4people.png',
    process.env.PUBLIC_URL + '/5people.png',
    process.env.PUBLIC_URL + '/6people.png',
    process.env.PUBLIC_URL + '/7people.png',
    process.env.PUBLIC_URL + '/8people.png',
    process.env.PUBLIC_URL + '/9people.png',
    process.env.PUBLIC_URL + '/10people.png',
    process.env.PUBLIC_URL + '/11people.png',
    process.env.PUBLIC_URL + '/12people.png',
    process.env.PUBLIC_URL + '/13people.png',
    process.env.PUBLIC_URL + '/14people.png',
    process.env.PUBLIC_URL + '/15people.png',
    process.env.PUBLIC_URL + '/16people.png',
    process.env.PUBLIC_URL + '/17people.png',
    process.env.PUBLIC_URL + '/18people.png',
    // 필요한 만큼 사진의 URL을 추가하세요.
  ]);
  const thumbnailStyle = {
    minWidth: '20%',
    maxHeight: '100%',
    objectFit: 'cover', // 가로 너비에 맞게 비율을 유지하도록 자동 조정
    margin: '0,0,0',
  };
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [defaultImageUrl, setdefaultImageUrl] = useState(
    `${process.env.PUBLIC_URL}/default.png`
  );
  const handleThumbnailClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };
  const [careerSelectValue, setCareerSelectValue] = useState('');
  const handleCareerSelectChange = (event) => {
    const value = event.target.value;
    setCareerSelectValue(value);
  };
  const [RegionSelectValue, setRegionSelectValue] = useState('');
  const handleRegionSelectChange = (event) => {
    const value = event.target.value;
    setRegionSelectValue(value);
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
                      이미지 설정
                    </span>
                  </div>
                  <div className='flex-container'>
                    <div className='wrapper' style={{ display: 'flex' }}>
                      <div>
                        <div style={{ marginLeft: '40%' }}>
                          {selectedImageUrl ? (
                            <img
                              src={selectedImageUrl}
                              alt='뷰 사진'
                              style={thumbnailStyle}
                            />
                          ) : (
                            <img
                              src={defaultImageUrl}
                              alt='기본 썸네일'
                              style={thumbnailStyle}
                            />
                          )}
                        </div>
                        <div
                          className='wrap-vertical'
                          style={{
                            display: 'flex',
                            whiteSpace: 'nowrap',
                            overflow: 'auto',
                          }}
                        >
                          {/* 썸네일 이미지 */}
                          {imageUrlList.map((imageUrl, index) => (
                            <img
                              key={index}
                              src={imageUrl}
                              alt={`썸네일 이미지 ${index + 1}`}
                              style={{
                                maxWidth: '50%',
                                maxHeight: '150px',
                                objectFit: 'cover',
                                marginLeft: '1%',
                                marginTop: '3%',
                                marginBottom: '3%',
                              }}
                              onClick={() => handleThumbnailClick(imageUrl)}
                            />
                          ))}

                          {/* 뷰 사진 */}
                        </div>
                      </div>
                    </div>
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
                      전화번호
                    </span>
                  </div>
                  <div
                    className='col-lg-12 mb-4 mb-sm-5'
                    style={{ textAlign: 'start' }}
                  >
                    <span className='col-lg-12'>
                      <input
                        type='text'
                        onInput={autoHyphen}
                        maxlength='13'
                        placeholder='전화번호를 입력하세요'
                        style={{
                          width: '80%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginRight: '1%',
                        }}
                        id='phoneNumber'
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
                    <CareerSelect
                      careerSelectValue={careerSelectValue}
                      setCareerSelectValue={setCareerSelectValue}
                      handleCareerSelectChange={handleCareerSelectChange}
                    ></CareerSelect>
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
                    <RegionSelect
                      RegionSelectValue={RegionSelectValue}
                      setRegionSelectValue={setRegionSelectValue}
                      handleRegionSelectChange={handleRegionSelectChange}
                    ></RegionSelect>
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
                      onChange={handleSkillSelectChange}
                      selectedSkills={selectedSkills}
                      setSelectedSkills={setSelectedSkills}
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
                    <Editor
                      ref={editorRef}
                      className='editor'
                      initialValue={mkdStr}
                      previewStyle='vertical'
                      height='200px'
                      initialEditType='wysiwyg'
                      useCommandShortcut={true}
                    />
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
                        id='githubLink'
                        type='text'
                        style={{
                          width: '80%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginLeft: '2%',
                        }}
                        onInput={githubLink}
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
                        id='velogLink'
                        type='text'
                        style={{
                          width: '80%',
                          height: '5vh',
                          borderRadius: '5px',
                          border: '1px solid rgb(222,222,222)',
                          outline: 'none',
                          marginLeft: '2%',
                        }}
                        onInput={velogLink}
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
                //         id: _id,
                // imgURL: _imgURL,
                // job: _job,
                // jobDetail: _jobDetail,
                // career: _career,
                // region: _region,
                // skill: _skill,
                // introduce: _introduce,
                // urlGithub: _urlGithub,
                // urlInsta: _urlInsta,
                // phone: _phone,
                onClick={() => {
                  if (
                    !selectedImageUrl ||
                    !firstSelectValue ||
                    !secondSelectValue ||
                    !careerSelectValue ||
                    !RegionSelectValue
                  ) {
                    alert('모든 칸은 필수입력입니다.');
                    return;
                  } else {
                    updateUser(
                      allDevDto[sessionStorage.getItem('id') - 1].id,
                      selectedImageUrl,
                      firstSelectValue,
                      secondSelectValue,
                      careerSelectValue,
                      RegionSelectValue,
                      selectedSkills.join(','),
                      editorRef.current.getInstance().getMarkdown(),
                      document.getElementById('githubLink').value,
                      document.getElementById('velogLink').value,
                      document.getElementById('phoneNumber').value
                    );
                  }
                  navigate('/');
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
        <option value='선택하세요'>선택하세요</option>
        <option value='기획'>기획</option>
        <option value='디자인'>디자인</option>
        <option value='프론트엔드개발'>프론트엔드개발</option>
        <option value='벡엔드개발'>벡엔드개발</option>
        <option value='사업'>사업</option>
        <option value='기타'>기타</option>
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
      {props.firstSelectValue === '기획' && (
        <>
          <option value='전체'>전체</option>
          <option value='UX/UI기획'>UX/UI기획</option>
          <option value='게임기획'>게임기획</option>
          <option value='프로젝트 매니저'>프로젝트 매니저</option>
          <option value='하드웨어(제품) 기획'>하드웨어(제품) 기획</option>
          <option value='(기획)기타'>(기획)기타</option>
        </>
      )}
      {props.firstSelectValue === '디자인' && (
        <>
          <option value='전체'>전체</option>
          <option value='그래픽디자인'>그래픽디자인</option>
          <option value='UX/UI디자인'>UX/UI디자인</option>
          <option value='3D디자인'>3D디자인</option>
          <option value='하드웨어(제품)디자인'>하드웨어(제품)디자인</option>
          <option value='디자인(기타)'>디자인(기타)</option>
        </>
      )}
      {props.firstSelectValue === '프론트엔드개발' && (
        <>
          <option value='전체'>전체</option>
          <option value='IOS'>IOS</option>
          <option value='안드로이드'>안드로이드</option>
          <option value='웹프론트엔드'>웹프론트엔드</option>
          <option value='웹퍼블리셔'>웹퍼블리셔</option>
          <option value='크로스플랫폼'>크로스플랫폼</option>
          <option value='임베디드SW'>임베디드SW</option>
        </>
      )}
      {props.firstSelectValue === '벡엔드개발' && (
        <>
          <option value='전체'>전체</option>
          <option value='웹서버'>웹서버</option>
          <option value='블록체인'>블록체인</option>
          <option value='AI'>AI</option>
          <option value='DB/빅데이터/DS'>DB/빅데이터/DS</option>
          <option value='게임서버'>게임서버</option>
        </>
      )}
      {props.firstSelectValue === '사업' && (
        <>
          <option value='전체'>전체</option>
          <option value='사업기획'>사업기획</option>
          <option value='마케팅'>마케팅</option>
          <option value='재무/회계'>재무/회계</option>
          <option value='영업'>영업</option>
          <option value='전략/컨설팅'>전략/컨설팅</option>
          <option value='투자/고문'>투자/고문</option>
          <option value='사업(기타)'>사업(기타)</option>
        </>
      )}
      {props.firstSelectValue === '기타' && (
        <>
          <option value='전체'>전체</option>
          <option value='DBA'>DBA</option>
          <option value='데이터 엔지니어'>데이터 엔지니어</option>
          <option value='데이터'>데이터 사이언티스트</option>
          <option value='데이터 사이언티스트'>보안 엔지니어</option>
          <option value='소프트웨어 개발자'>소프트웨어 개발자</option>
          <option value='게임 개발자'>게임 개발자</option>
          <option value='하드웨어 개발자'>하드웨어 개발자</option>
          <option value='머신러닝 개발자'>머신러닝 개발자</option>
          <option value='클라우드엔지니어'>클라우드엔지니어</option>
          <option value='QA'>QA</option>
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
        value={props.careerSelectValue}
        onChange={props.handleCareerSelectChange}
      >
        <option value='선택하세요'>선택하세요</option>
        <option value='초보'>초보</option>
        <option value='중수'>중수</option>
        <option value='고수'>고수</option>
      </Form.Select>
    </>
  );
}
function RegionSelect(props) {
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        value={props.RegionSelectValue}
        onChange={props.handleRegionSelectChange}
      >
        <option value='선택하세요'>선택하세요</option>
        <option value='서울'>서울</option>
        <option value='인천'>인천</option>
        <option value='경기'>경기</option>
        <option value='세종'>세종</option>
        <option value='충남'>충남</option>
        <option value='충북'>충북</option>
        <option value='광주'>광주</option>
        <option value='전남'>전남</option>
        <option value='전북'>전북</option>
        <option value='대구'>대구</option>
        <option value='경북'>경북</option>
        <option value='부산'>부산</option>
        <option value='울산'>울산</option>
        <option value='경남'>경남</option>
        <option value='강원'>강원</option>
        <option value='제주'>제주</option>
        <option value='전국'>전국</option>
      </Form.Select>
    </>
  );
}

function SkillSelect(props) {
  console.log(props.selectedSkills.join(','));
  const handleSkillSelectChange = (event) => {
    const value = event.target.value;
    if (value !== '') {
      const skills = [...props.selectedSkills, value];
      props.setSelectedSkills(skills);
      props.onChange(skills); // 선택된 기술을 부모 컴포넌트로 전달합니다.
    }
  };
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        onChange={handleSkillSelectChange}
        value={props.selectedSkills}
      >
        <option value=''>Select an option</option>
        <option value='C'>C</option>
        <option value='python'>Python</option>
        <option value='C++'>C++</option>
        <option value='java'>Java</option>
        <option value='C#'>C#</option>
        <option value='javascript'>JavaScript</option>
        <option value='typescript'>TypeScript</option>
        <option value='assembly'>Assembly</option>
        <option value='swift'>Swift</option>
        <option value='php'>PHP</option>
        <option value='go'>Go</option>
        <option value='R'>R</option>
        <option value='ruby'>Ruby</option>
        <option value='rust'>Rust</option>
        <option value='kotlin'>Kotlin</option>
        <option value='vue'>Vue.js</option>
        <option value='jquery'>jQuery</option>
        <option value='nuxt'>Nuxt.js</option>
        <option value='next'>Next.js</option>
      </Form.Select>
      <ListGroup>
        {props.selectedSkills.map((skill, index) => (
          <ListGroup.Item key={index}>{skill}</ListGroup.Item>
        ))}
      </ListGroup>
      <p>{}</p>
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
