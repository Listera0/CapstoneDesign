import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
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
            // upLoadimage={upLoadimage}
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
                <img
                  id='preview-image'
                  src='https://i0.wp.com/adventure.co.kr/wp-content/uploads/2020/09/no-image.jpg'
                  className='image-box'
                  style={{
                    maxWidth: '100%',
                    maxHeight: '230px',
                    objectFit: 'cover',
                  }}
                  alt='Preview'
                />

                <div style={{ justifyContent: 'space-between' }}>
                  <label
                    htmlFor='file'
                    style={{
                      cursor: 'pointer',
                      marginBottom: '5%',
                      width: '100%',
                    }}
                  >
                    <input
                      id='file'
                      type='file'
                      accept='image/*'
                      onChange={props.handleImageChange}
                    />
                    <p
                      style={{
                        textAlign: 'center',
                        cursor: 'pointer',
                        marginBottom: '3%',
                        fontWeight: '400',
                        fontSize: '12px',
                        color: '#9796a7',
                        fontFamily: 'Pretendard',
                        fontStyle: 'normal',
                        lineHeight: '18px',
                        padding: '7px 20px',
                        border: '1px solid #9796a7',
                        backgroundColor: '#fff',
                        borderRadius: '4px',
                        marginBottom: '3%',
                        width: '50%',
                      }}
                    >
                      이미지 업로드
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
                      ❗ 이미지 크기는 460X230으로 해주세요
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
                      ❗ 저작권에 위배되지 않는 파일만 업로드해주세요.
                    </p>
                  </label>
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
            <RegionSelect></RegionSelect>
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
            ❗모집인원을 설정해주세요 (3~4명 추천)
          </p>
        </div>
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
          <SkillSelect></SkillSelect>
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
            props.setModal(false);
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
                <img
                  id='preview-image'
                  src='https://i0.wp.com/adventure.co.kr/wp-content/uploads/2020/09/no-image.jpg'
                  className='image-box'
                  style={{
                    maxWidth: '100%',
                    maxHeight: '230px',
                    objectFit: 'cover',
                  }}
                  alt='Preview'
                />

                <div style={{ justifyContent: 'space-between' }}>
                  <label
                    htmlFor='file'
                    style={{
                      cursor: 'pointer',
                      marginBottom: '5%',
                      width: '100%',
                    }}
                  >
                    <input
                      id='file'
                      type='file'
                      accept='image/*'
                      onChange={props.handleImageChange}
                    />
                    <p
                      style={{
                        textAlign: 'center',
                        cursor: 'pointer',
                        marginBottom: '3%',
                        fontWeight: '400',
                        fontSize: '12px',
                        color: '#9796a7',
                        fontFamily: 'Pretendard',
                        fontStyle: 'normal',
                        lineHeight: '18px',
                        padding: '7px 20px',
                        border: '1px solid #9796a7',
                        backgroundColor: '#fff',
                        borderRadius: '4px',
                        marginBottom: '3%',
                        width: '50%',
                      }}
                    >
                      이미지 업로드
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
                      ❗ 이미지 크기는 460X230으로 해주세요
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
                      ❗ 저작권에 위배되지 않는 파일만 업로드해주세요.
                    </p>
                  </label>
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
          className='editor'
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
            props.setModal(false);
          }}
        >
          스토리 글 작성하기
        </a>
      </>
    );
  }
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
export default Write;
