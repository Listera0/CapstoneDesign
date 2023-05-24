import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { icons2, jobs } from '../icons2.js';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { Viewer } from '@toast-ui/react-editor';

const mkdStr = `
**게시글은 별도의 가이드라인 없이 자유롭게 작성하시면 됩니다.**

# 헤딩

**굵게**

일반텍스트

\`\`\`
코드블럭
\`\`\`
*기울이기*

글자 \`베경색\`

>인용문
`;

function Write() {
  const [value, setValue] = useState(mkdStr);
  let [tab, setTab] = useState(0);
  let [maintab, setMainTab] = useState(0);

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
          ✏️협업 모집 글 작성하기
        </h5>
        <Editor
          className='editor'
          initialValue={mkdStr}
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
      <div>
        <p></p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <FontAwesomeIcon icon={faBookmark} />
              </th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Write;
