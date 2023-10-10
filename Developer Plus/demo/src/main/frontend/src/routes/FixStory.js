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
import { ListGroup, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FixStory() {
  let { id } = useParams(); // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  let navigate = useNavigate(); //페이지 이동

  //   const handleImageChange = (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         const imgElement = document.getElementById('preview-image');
  //         imgElement.src = reader.result;
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  const updateStory = (_title, _imgURL, _content) => {
    axios
      .post('/api/updateDatabase', {
        title: _title,
        imgURL: _imgURL,
        content: _content,
        id: id,
      })
      .then()
      .catch((error) => console.log(error));
  };

  const [devDto, setDevDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getDevData', {
          id: sessionStorage.getItem('id'),
          orderBy: '',
          limit: '',
        })
        .then((response) => {
          setDevDto(response.data);
        })
        .catch((error) => console.log(error));
    }, []);
  }

  const [storyDto, setStoryDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getStoryData', {
          id: id,
          orderBy: '',
          limit: '',
        })
        .then((response) => {
          setStoryDto(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }, []);
  }
  const mkdir = storyDto[0].content;
  return (
    <section className='bg-light' style={{ marginTop: '-6%' }}>
      <div className='container' style={{ paddingTop: '3%' }}>
        <div className='row'>
          <MainTabContent
            // selectedImage={selectedImage}
            // handleImageChange={handleImageChange}
            devDto={devDto}
            storyDto={storyDto}
            updateStory={updateStory}
            navigate={navigate}
            mkdir={mkdir}
            // upLoadimage={upLoadimage}
          ></MainTabContent>
        </div>
      </div>
    </section>
  );
}
function MainTabContent(props) {
  const [imageUrlList] = useState([
    process.env.PUBLIC_URL + '/001.png',
    process.env.PUBLIC_URL + '/002.png',
    process.env.PUBLIC_URL + '/003.png',
    process.env.PUBLIC_URL + '/004.png',
    process.env.PUBLIC_URL + '/005.png',
    process.env.PUBLIC_URL + '/006.png',
    process.env.PUBLIC_URL + '/007.png',
    process.env.PUBLIC_URL + '/008.png',
    process.env.PUBLIC_URL + '/009.png',
    process.env.PUBLIC_URL + '/010.png',
    process.env.PUBLIC_URL + '/011.png',
    process.env.PUBLIC_URL + '/012.png',
    process.env.PUBLIC_URL + '/013.png',
    process.env.PUBLIC_URL + '/014.png',
    process.env.PUBLIC_URL + '/015.png',
    process.env.PUBLIC_URL + '/016.png',
    process.env.PUBLIC_URL + '/017.png',
    process.env.PUBLIC_URL + '/018.png',
    process.env.PUBLIC_URL + '/019.png',
    process.env.PUBLIC_URL + '/020.png',
    // 필요한 만큼 사진의 URL을 추가하세요.
  ]);

  const thumbnailStyle = {
    maxWidth: '100%',
    maxHeight: '230px',
    objectFit: 'cover', // 가로 너비에 맞게 비율을 유지하도록 자동 조정
  };
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [defaultImageUrl, setdefaultImageUrl] = useState(
    `${process.env.PUBLIC_URL}/c3.jpg`
  );
  const handleThumbnailClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };
  const editorRef = useRef();

  const [defaultURL, setDefaultURL] = useState(['']);
  {
    useEffect(() => {
      setSelectedImageUrl(props.storyDto[0].imgURL);
    }, []);
  }
  console.log(props.storyDto[0].content);
  useEffect(() => {
    // 데이터 로딩이 완료된 후에 초기값 설정
    if (editorRef.current && props.storyDto[0]?.content) {
      editorRef.current.getInstance().setMarkdown(props.storyDto[0].content);
    }
  }, [props.storyDto]);
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
        ✏️ 스토리 글 수정하기
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
            placeholder='3~40글자로 적어주세요'
            maxLength={40}
            minLength={3}
            defaultValue={props.storyDto[0].title}
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
            ❗스토리 대표 이미지를 정해주세요.
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
                  src={props.storyDto[0].imgURL}
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

      {/* <p
        style={{
          fontSize: '1.125rem',
          textAlign: 'start',
          fontWeight: '500',
        }}
      >
        스토리 작성
      </p> */}

      <Editor
        ref={editorRef}
        id='editor'
        previewStyle='vertical'
        height='600px'
        initialEditType='markdown'
        useCommandShortcut={true}
      />

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
          if (
            !document.getElementById('title').value ||
            !selectedImageUrl ||
            !editorRef.current.getInstance().getMarkdown()
          ) {
            alert('모든 칸은 필수입력입니다.');
            return;
          } else {
            props.updateStory(
              document.getElementById('title').value,
              selectedImageUrl,
              editorRef.current.getInstance().getMarkdown()
            );
          }
          props.navigate('/Story');
        }}
      >
        스토리 글 수정하기
      </a>
    </>
  );
}

export default FixStory;
