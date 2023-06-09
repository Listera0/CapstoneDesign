import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { icons2, jobs } from '../icons2.js';
import axios from 'axios';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { Viewer } from '@toast-ui/react-editor';

const mkdStr = `
# 1.프로젝트 시작동기

-왜 이 서비스를 만들고싶은 이유를 적어주세요.
<span style='color:gray'> (ex 국내여행을 가려고 하는데 어떤곳이 좋은지에 대한 경험이 없어서 어려웠습니다.</span> 
<span style='color:gray'> 국내도 해외만큼이나 다양한 지역의 명소가 있는데, 이것이 잘 정리되어있지 않아 잊어버리기 일쑤입니다.</span> 
<span style='color:gray'> 전국적인 행사정보와 국내 유명여행지를 모아보여준다면, 사람들이 많이 사용할 것 같습니다) </span>

-만들고자 하는 서비스에 대해 알려주세요 
<span style='color:gray'>(ex 계절별/축제별 국내여행을 모아서 추천해주는 서비스를 만들고자합니다. </span>
<span style='color:gray'>꽃이 피는 시기를 기준으로 , 꽃구경을 갈 수 있는 장소를, 월별로 축제가 있는 지역을 추천합니다. </span>
<span style='color:gray'>추천시에는 블로그 리뷰 등을 묶어서 해당 부분을 참고할 수 있게 하고 , 이메일이나 앱 푸시등으로 사용자에게 주기적으로 안내합니다.) </span>

-어떤 사용자들을 타겟하고 있는지 적어주세요 
<span style='color:gray'>(ex 주말에 평범한 데이트가 아닌 특별한 데이트를 찾거나, 미취학아동들과 같이 갈수있는 체험형 코스를 찾는 사용자를 대상으로 합니다.) </span>

# 2. 회의 진행/ 모임 방식

-1주에 몇번정도 회의나 모임을 진행할 계획인가요? 
<span style='color:gray'>(ex - 1주일에 1회/2회 정도 정기적으로 회의합니다)

-온/오프라인 회의 진행시 진행방식을 적어주세요 
<span style='color:gray'>(ex - 온라인은 줌을 활용하고, 오프라인은 강남역 카페등을 대관할예정입니다, 커뮤니케이션은 슬랙을 위주로 사용합니다 )</span>

# 3. 그외 자유기재
<span style='color:gray'>(ex 대학생분들만 지원해주시면 감사하겠습니다.)</span>
`;

const storymkdStr = `
스토리는 별도의 가이드라인없이 작성해주시면 됩니다.
`;
function Write() {
  let navigate = useNavigate(); //페이지 이동
  const [value, setValue] = useState(mkdStr);

  let [tab, setTab] = useState(0);
  let [maintab, setMainTab] = useState(0);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgElement = document.getElementById('preview-image');
        imgElement.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };
  const insertStory = (_title, _imgURL, _name, _content, _hashTag) => {
    axios
      .post('/api/insertStory', {
        title: _title,
        imgURL: _imgURL,
        name: _name,
        content: _content,
        hashTag: _hashTag,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const insertProject = (
    _title,
    _imgURL,
    _region,
    _name,
    _job,
    _jobDetail,
    _career,
    _nowJob,
    _requireJob,
    _startDate,
    _endDate,
    _content,
    _skill
  ) => {
    axios
      .post('/api/insertProject', {
        title: _title,
        imgURL: _imgURL,
        region: _region,
        name: _name,
        job: _job,
        jobDetail: _jobDetail,
        career: _career,
        nowJob: _nowJob,
        requireJob: _requireJob,
        startDate: _startDate,
        endDate: _endDate,
        content: _content,
        skill: _skill,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
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
  const [RegionSelectValue, setRegionSelectValue] = useState('');
  const handleRegionSelectChange = (event) => {
    const value = event.target.value;
    setRegionSelectValue(value);
  };
  const [firstSelectValue, setFirstSelectValue] = useState('');
  const handleFirstSelectChange = (event) => {
    const value = event.target.value;
    setFirstSelectValue(value);
  };
  const [secondSelectValue, setSecondSelectValue] = useState('');
  const handleSecondSelectChange = (event) => {
    const value = event.target.value;
    setSecondSelectValue(value);
  };
  const [skillSelectValue, setSkillSelectValue] = useState('');
  const handleSkillSelectChange = (event) => {
    const value = event.target.value;
    setSkillSelectValue(value);
  };
  const [careerSelectValue, setCareerSelectValue] = useState('');
  const handleCareerSelectChange = (event) => {
    const value = event.target.value;
    setCareerSelectValue(value);
  };

  return (
    <section className='bg-light' style={{ marginTop: '-6%' }}>
      <div className='container' style={{ paddingTop: '3%' }}>
        <div className='row'>
          <h2
            style={{
              textAlign: 'start',
              paddingTop: '5%',
              paddingLeft: '5%',
              fontWeight: '600',
            }}
          >
            글 작성하기
          </h2>
          <Nav
            fill
            variant='tabs'
            defaultActiveKey='link0'
            style={{ paddingTop: '5%', marginBottom: '3%' }}
          >
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setMainTab(0);
                }}
                eventKey='link0'
              >
                프로젝트
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setMainTab(1);
                }}
                eventKey='link1'
              >
                스토리
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <MainTabContent
            tab={tab}
            maintab={maintab}
            setTab={setTab}
            // selectedImage={selectedImage}
            handleImageChange={handleImageChange}
            allDevDto={allDevDto}
            insertStory={insertStory}
            insertProject={insertProject}
            navigate={navigate}
            firstSelectValue={firstSelectValue}
            setFirstSelectValue={setFirstSelectValue}
            handleFirstSelectChange={handleFirstSelectChange}
            secondSelectValue={secondSelectValue}
            setSecondSelectValue={setSecondSelectValue}
            handleSecondSelectChange={handleSecondSelectChange}
            RegionSelectValue={RegionSelectValue}
            setRegionSelectValue={setRegionSelectValue}
            handleRegionSelectChange={handleRegionSelectChange}
            skillSelectValue={skillSelectValue}
            setSkillSelectValue={setSkillSelectValue}
            handleSkillSelectChange={handleSkillSelectChange}
            careerSelectValue={careerSelectValue}
            setCareerSelectValue={setCareerSelectValue}
            handleCareerSelectChange={handleCareerSelectChange}
            // upLoadimage={upLoadimage}
          ></MainTabContent>
        </div>
      </div>
    </section>
  );
}

function MainTabContent(props) {
  const [imageUrlList] = useState([
    process.env.PUBLIC_URL + '/c1.jpg',
    process.env.PUBLIC_URL + '/c2.png',
    process.env.PUBLIC_URL + '/c3.jpg',
    process.env.PUBLIC_URL + '/main1.jpg',
    process.env.PUBLIC_URL + '/main2.jpg',
    process.env.PUBLIC_URL + '/main3.jpg',
    process.env.PUBLIC_URL + '/main4.jpg',
    process.env.PUBLIC_URL + '/main5.jpg',
    // 필요한 만큼 사진의 URL을 추가하세요.
  ]);
  const thumbnailStyle = {
    maxWidth: '100%',
    maxHeight: '230px',
    objectFit: 'cover', // 가로 너비에 맞게 비율을 유지하도록 자동 조정
  };
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [defaultImageUrl, setdefaultImageUrl] = useState(
    `${process.env.PUBLIC_URL}/main1.jpg`
  );
  const handleThumbnailClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };
  const editorRef = useRef();
  const [countPeople, setCountPeople] = useState(0);
  const handleIncreseButton = () => {
    setCountPeople(countPeople + 1);
  };
  const handleDiscreseButton = () => {
    setCountPeople(countPeople - 1);
  };
  const [countPeopleMap, setCountPeopleMap] = useState([]);
  if (props.maintab == 0) {
    return (
      <>
        <h5
          style={{
            textAlign: 'start',
            paddingTop: '5%',
            marginBottom: '3%',
            fontWeight: '600',
          }}
        >
          ✏️ 협업 모집 글 작성하기
        </h5>

        <div>
          <p
            style={{
              fontSize: '1.125rem',
              textAlign: 'start',
              fontWeight: '500',
            }}
          >
            프로젝트명
          </p>

          <p
            style={{
              marginBottom: '3%',
              fontWeight: '400',
              fontSize: '13px',
              color: '#b1b1b1',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              lineHeight: '18px',
              textAlign: 'start',
            }}
          >
            ❗직관적인 프로젝트명을 사용하시면 클릭률이 올라갑니다.
          </p>
        </div>
        <div className='col-lg-12 mb-4 mb-sm-5' style={{ textAlign: 'start' }}>
          <span className='col-lg-8'>
            <input
              type='text'
              style={{
                width: '70%',
                height: '5vh',
                borderRadius: '5px',
                border: '1px solid rgb(222,222,222)',
                outline: 'none',
                marginRight: '1%',
                padding: '25px 5px',
              }}
              placeholder='3~20글자로 적어주세요'
              maxLength={20}
              minLength={3}
              id='projectTitle'
            ></input>
          </span>
        </div>
        <div>
          <div>
            <p
              style={{
                fontSize: '1.125rem',
                textAlign: 'start',
                fontWeight: '500',
              }}
            >
              대표이미지
            </p>

            <p
              style={{
                marginBottom: '3%',
                fontWeight: '400',
                fontSize: '13px',
                color: '#b1b1b1',
                fontFamily: 'Pretendard',
                fontStyle: 'normal',
                lineHeight: '18px',
                textAlign: 'start',
              }}
            >
              ❗프로젝트 대표 이미지를 업로드해주세요.
            </p>
          </div>
          <div className='flex-container'>
            <div className='wrapper' style={{ display: 'flex' }}>
              <div>
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
        </div>
        <div>
          <p
            style={{
              fontSize: '1.125rem',
              textAlign: 'start',
              fontWeight: '500',
            }}
          >
            지역
          </p>
          <p
            style={{
              marginBottom: '3%',
              fontWeight: '400',
              fontSize: '13px',
              color: '#b1b1b1',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              lineHeight: '18px',
              textAlign: 'start',
            }}
          >
            ❗지역을 선택해주세요.
          </p>
          <div
            className='col-lg-5 mb-4 mb-sm-5'
            style={{
              display: 'flex',
            }}
          >
            <RegionSelect
              RegionSelectValue={props.RegionSelectValue}
              setRegionSelectValue={props.setRegionSelectValue}
              handleRegionSelectChange={props.handleRegionSelectChange}
            ></RegionSelect>
          </div>
        </div>
        <div>
          <p
            style={{
              fontSize: '1.125rem',
              textAlign: 'start',
              fontWeight: '500',
            }}
          >
            모집인원
          </p>

          <p
            style={{
              marginBottom: '3%',
              fontWeight: '400',
              fontSize: '13px',
              color: '#b1b1b1',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              lineHeight: '18px',
              textAlign: 'start',
            }}
          >
            ❗모집인원을 설정해주세요 (3~4명 추천 , 최대 10명)
          </p>
        </div>

        <li className='mb-2 mb-xl-3' style={{ listStyle: 'none' }}>
          <div
            className='col-lg-12 mb-4 mb-sm-5'
            style={{
              display: 'flex',
            }}
          >
            <div className='col-lg-5' style={{ paddingRight: '1%' }}>
              <SelectBasicExample
                useState={useState}
                firstSelectValue={props.firstSelectValue}
                setFirstSelectValue={props.setFirstSelectValue}
                handleFirstSelectChange={props.handleFirstSelectChange}
                secondSelectValue={props.secondSelectValue}
                setSecondSelectValue={props.setSecondSelectValue}
                handleSecondSelectChange={props.handleSecondSelectChange}
              />
            </div>
            <div className='col-lg-5' style={{ paddingRight: '1%' }}>
              <SelectTwo
                useState={useState}
                secondSelectValue={props.secondSelectValue}
                setSecondSelectValue={props.setSecondSelectValue}
                handleSecondSelectChange={props.handleSecondSelectChange}
                firstSelectValue={props.firstSelectValue}
                setFirstSelectValue={props.setFirstSelectValue}
                handleFirstSelectChange={props.handleFirstSelectChange}
              />
            </div>
          </div>
          <div
            className='col-lg-12 mb-4 mb-sm-5'
            style={{
              display: 'flex',
            }}
          >
            <div className='col-lg-5' style={{ paddingRight: '1%' }}>
              <CareerSelect
                careerSelectValue={props.careerSelectValue}
                setCareerSelectValue={props.setCareerSelectValue}
                handleCareerSelectChange={props.handleCareerSelectChange}
              ></CareerSelect>
            </div>

            <div
              className='col-lg-2'
              style={{
                paddingLeft: '10%',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: '20px',
              }}
            >
              <p
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  {
                    countPeople >= 10 ? (
                      <button disabled>+</button>
                    ) : (
                      handleIncreseButton()
                    );
                  }
                }}
              >
                +
              </p>
              <p
                style={{
                  textAlign: 'center',
                  padding: '0% 50%',
                  color: 'rgb(148,178,249)',
                }}
              >
                {countPeople}
              </p>
              <p
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  {
                    countPeople <= 0 ? (
                      <button disabled>-</button>
                    ) : (
                      handleDiscreseButton()
                    );
                  }
                }}
              >
                -
              </p>
            </div>
          </div>
        </li>
        <p
          style={{
            fontSize: '1.125rem',
            textAlign: 'start',
            fontWeight: '500',
          }}
        >
          프로젝트 설명
        </p>

        <p
          style={{
            marginBottom: '3%',
            fontWeight: '400',
            fontSize: '13px',
            color: '#b1b1b1',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            lineHeight: '18px',
            textAlign: 'start',
          }}
        >
          ❗설명이 풍부한 프로젝트는 지원율이 높습니다.
        </p>

        <Editor
          ref={editorRef}
          className='editor'
          initialValue={mkdStr}
          previewStyle='vertical'
          height='600px'
          initialEditType='wysiwyg'
          useCommandShortcut={true}
        />

        <p
          style={{
            fontSize: '1.125rem',
            textAlign: 'start',
            fontWeight: '500',
            marginTop: '5%',
          }}
        >
          기술/언어
        </p>

        <p
          style={{
            marginBottom: '3%',
            fontWeight: '400',
            fontSize: '13px',
            color: '#b1b1b1',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            lineHeight: '18px',
            textAlign: 'start',
          }}
        >
          ❗프로젝트에 적용 하고자하는 기술을 골라주세요
        </p>
        <div
          className='col-lg-5 mb-4 mb-sm-5'
          style={{
            display: 'flex',
          }}
        >
          <SkillSelect
            skillSelectValue={props.skillSelectValue}
            setSkillSelectValue={props.setSkillSelectValue}
            handleSkillSelectChange={props.handleSkillSelectChange}
          ></SkillSelect>
        </div>
        <a
          style={{
            cursor: 'pointer',
            marginBottom: '3%',
            fontWeight: '400',
            fontSize: '13px',
            color: 'gray',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            lineHeight: '18px',
            textAlign: 'center',
          }}
          onClick={() => {
            // console.log(props.secondSelectValue + ',');
            props.insertProject(
              document.getElementById('projectTitle').value,
              selectedImageUrl,
              props.RegionSelectValue,
              props.allDevDto[sessionStorage.getItem('id') - 1].name,
              props.firstSelectValue,
              props.secondSelectValue,
              props.careerSelectValue,
              '0',
              countPeople,
              '',
              '',
              editorRef.current.getInstance().getMarkdown(),
              props.skillSelectValue
            );
            props.navigate('/findDeveloper');
          }}
        >
          프로젝트 글 작성하기
        </a>
      </>
    );
  }
  if (props.maintab == 1) {
    return (
      <>
        <h5
          style={{
            textAlign: 'start',
            paddingTop: '5%',
            marginBottom: '3%',
            fontWeight: '600',
          }}
        >
          ✏️ 스토리 글 작성하기
        </h5>

        <div>
          <p
            style={{
              fontSize: '1.125rem',
              textAlign: 'start',
              fontWeight: '500',
            }}
          >
            제목
          </p>
        </div>
        <div className='col-lg-12 mb-4 mb-sm-5' style={{ textAlign: 'start' }}>
          <span className='col-lg-8'>
            <input
              type='text'
              style={{
                width: '70%',
                height: '5vh',
                borderRadius: '5px',
                border: '1px solid rgb(222,222,222)',
                outline: 'none',
                marginRight: '1%',
                padding: '25px 5px',
              }}
              id='title'
              placeholder='3~20글자로 적어주세요'
              maxLength={20}
              minLength={3}
            ></input>
          </span>
        </div>
        <div>
          <div>
            <p
              style={{
                fontSize: '1.125rem',
                textAlign: 'start',
                fontWeight: '500',
              }}
            >
              대표이미지
            </p>

            <p
              style={{
                marginBottom: '3%',
                fontWeight: '400',
                fontSize: '13px',
                color: '#b1b1b1',
                fontFamily: 'Pretendard',
                fontStyle: 'normal',
                lineHeight: '18px',
                textAlign: 'start',
              }}
            >
              ❗스토리 대표 이미지를 업로드해주세요.
            </p>
          </div>
          <div className='flex-container'>
            <div className='wrapper' style={{ display: 'flex' }}>
              <div>
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
        </div>

        <p
          style={{
            fontSize: '1.125rem',
            textAlign: 'start',
            fontWeight: '500',
          }}
        >
          스토리 작성
        </p>

        <Editor
          ref={editorRef}
          id='editor'
          initialValue={storymkdStr}
          previewStyle='vertical'
          height='600px'
          initialEditType='wysiwyg'
          useCommandShortcut={true}
        />
        <div>
          <p
            style={{
              fontSize: '1.125rem',
              textAlign: 'start',
              fontWeight: '500',
              marginTop: '5%',
            }}
          >
            검색태그(#)
          </p>

          <p
            style={{
              marginBottom: '3%',
              fontWeight: '400',
              fontSize: '13px',
              color: '#b1b1b1',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              lineHeight: '18px',
              textAlign: 'start',
            }}
          >
            ❗검색태그는 5개까지 가능합니다.
          </p>
        </div>
        <div className='col-lg-12 mb-4 mb-sm-5' style={{ textAlign: 'start' }}>
          <span className='col-lg-8'>
            <input
              type='text'
              style={{
                width: '70%',
                height: '5vh',
                borderRadius: '5px',
                border: '1px solid rgb(222,222,222)',
                outline: 'none',
                marginRight: '1%',
                padding: '25px 5px',
              }}
              id='hashTag'
              placeholder='검색태그를 적어주세요'
              maxLength={20}
              minLength={3}
            ></input>
          </span>
        </div>
        <a
          style={{
            cursor: 'pointer',
            marginBottom: '3%',
            fontWeight: '400',
            fontSize: '13px',
            color: 'gray',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            lineHeight: '18px',
            textAlign: 'center',
          }}
          onClick={() => {
            props.insertStory(
              document.getElementById('title').value,
              selectedImageUrl,
              props.allDevDto[sessionStorage.getItem('id') - 1].name,
              editorRef.current.getInstance().getMarkdown(),
              document.getElementById('hashTag').value
            );
            props.navigate('/Story');
          }}
        >
          스토리 글 작성하기
        </a>
      </>
    );
  }
}
function PlusButton(props) {}
function SelectBasicExample(props) {
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        value={props.firstSelectValue}
        onChange={props.handleFirstSelectChange}
      >
        <option value='선택하세요'>선택하세요</option>
        <option value='기획,'>기획</option>
        <option value='디자인,'>디자인</option>
        <option value='프론트엔드개발,'>프론트엔드개발</option>
        <option value='벡엔드개발,'>벡엔드개발</option>
        <option value='사업,'>사업</option>
        <option value='기타,'>기타</option>
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
      {props.firstSelectValue === '기획,' && (
        <>
          <option value='전체'>전체</option>
          <option value='UX/UI기획'>UX/UI기획</option>
          <option value='게임기획'>게임기획</option>
          <option value='프로젝트 매니저'>프로젝트 매니저</option>
          <option value='하드웨어(제품) 기획'>하드웨어(제품) 기획</option>
          <option value='(기획)기타'>(기획)기타</option>
        </>
      )}
      {props.firstSelectValue === '디자인,' && (
        <>
          <option value='전체'>전체</option>
          <option value='그래픽디자인'>그래픽디자인</option>
          <option value='UX/UI디자인'>UX/UI디자인</option>
          <option value='3D디자인'>3D디자인</option>
          <option value='하드웨어(제품)디자인'>하드웨어(제품)디자인</option>
          <option value='디자인(기타)'>디자인(기타)</option>
        </>
      )}
      {props.firstSelectValue === '프론트엔드개발,' && (
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
      {props.firstSelectValue === '벡엔드개발,' && (
        <>
          <option value='전체'>전체</option>
          <option value='웹서버'>웹서버</option>
          <option value='블록체인'>블록체인</option>
          <option value='AI'>AI</option>
          <option value='DB/빅데이터/DS'>DB/빅데이터/DS</option>
          <option value='게임서버'>게임서버</option>
        </>
      )}
      {props.firstSelectValue === '사업,' && (
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
      {props.firstSelectValue === '기타,' && (
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
  return (
    <>
      <Form.Select
        aria-label='Default select example'
        value={props.skillSelectValue}
        onChange={props.handleSkillSelectChange}
      >
        <option value=''>선택하세요</option>
        <option value='Python'>Python</option>
        <option value='C'>C</option>
        <option value='C++'>C++</option>
        <option value='Java'>Java</option>
        <option value='C'>C#</option>
        <option value='JavaScript'>JavaScript</option>
        <option value='TypeScript'>TypeScript</option>6
        <option value='Assembly'>Assembly</option>
        <option value='Swift'>Swift</option>
        <option value='PHP'>PHP</option>
        <option value='Go'>Go</option>
        <option value='R'>R</option>
        <option value='Ruby'>Ruby</option>
        <option value='Rust'>Rust</option>
        <option value='Kotlin'>Kotlin</option>
        <option value='Vue'>Vue.js</option>
        <option value='jQuery'>jQuery</option>
        <option value='Nuxt.js'>Nuxt.js</option>
        <option value='Next.js'>Next.js</option>
      </Form.Select>
    </>
  );
}
export default Write;
