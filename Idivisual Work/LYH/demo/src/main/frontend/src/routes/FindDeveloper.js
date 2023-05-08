import { data, projectData } from '../data.js';
import { useState } from 'react';
function FindDeveloper() {
  let [project] = useState(projectData);
  let [goodCount, changeGoodCount] = useState([0, 0, 0]);
  return (
    <div className='container'>
      <div className='row' style={{ paddingTop: '2%' }}>
        <div
          className='g-col-6 g-col-md-4 '
          style={{
            border: '1px solid rgb(222,222,222)',
            borderRadius: '5px',
            width: '31%',
            margin: '1%',
          }}
        >
          <div className='col-div ' style={{ overflow: 'hidden' }}>
            <img
              className='col-img'
              src={process.env.PUBLIC_URL + '/main1.jpg'}
              width='100%'
            ></img>
          </div>
          <div className='col-content'>
            <span>LINE 오픈챗 서버가 100배 급증하는 트래픽을 다루는 방법</span>
            <p>우주은</p>
          </div>
          <div className='subdiv'>
            <div className='col-6'>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...goodCount];
                  copy[1] = copy[1] + 1;
                  changeGoodCount(copy);
                }}
              >
                👍
              </span>
              {goodCount[1]}
            </div>
            <div className='col-6'>댓글</div>
          </div>
        </div>
        <div
          className='g-col-6 g-col-md-4 '
          style={{
            border: '1px solid rgb(222,222,222)',
            borderRadius: '5px',
            width: '31%',
            margin: '1%',
          }}
        >
          <div className='col-div ' style={{ overflow: 'hidden' }}>
            <img
              style={{ paddingTop: '3%' }}
              className='col-img'
              src={process.env.PUBLIC_URL + '/main2.jpg'}
              width='100%'
            ></img>
          </div>
          <div className='col-content'>
            <span>LINE 오픈챗 서버가 100배 급증하는 트래픽을 다루는 방법</span>
            <p>우주은</p>
          </div>
          <div className='subdiv'>
            <div className='col-6'>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...goodCount];
                  copy[1] = copy[1] + 1;
                  changeGoodCount(copy);
                }}
              >
                👍
              </span>
              {goodCount[1]}
            </div>
            <div className='col-6'>댓글</div>
          </div>
        </div>
        <div
          className='g-col-6 g-col-md-4 '
          style={{
            border: '1px solid rgb(222,222,222)',
            borderRadius: '5px',
            width: '31%',
            margin: '1%',
          }}
        >
          <div className='col-div ' style={{ overflow: 'hidden' }}>
            <img
              className='col-img'
              src={process.env.PUBLIC_URL + '/main3.jpg'}
              width='100%'
            ></img>
          </div>
          <div className='col-content'>
            <span>LINE 오픈챗 서버가 100배 급증하는 트래픽을 다루는 방법</span>
            <p>우주은</p>
          </div>
          <div className='subdiv'>
            <div className='col-6'>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...goodCount];
                  copy[1] = copy[1] + 1;
                  changeGoodCount(copy);
                }}
              >
                👍
              </span>
              {goodCount[1]}
            </div>
            <div className='col-6'>댓글</div>
          </div>
        </div>
        <div
          className='g-col-6 g-col-md-4 '
          style={{
            border: '1px solid rgb(222,222,222)',
            borderRadius: '5px',
            width: '31%',
            margin: '1%',
          }}
        >
          <div className='col-div ' style={{ overflow: 'hidden' }}>
            <img
              className='col-img'
              src={process.env.PUBLIC_URL + '/main4.jpg'}
              width='100%'
            ></img>
          </div>
          <div className='col-content'>
            <span>오늘의 실패로 내일 더 성장하는 법🔥 -오늘의 실패</span>
            <p>우주은</p>
          </div>
          <div className='subdiv'>
            <div className='col-6 '>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...goodCount];
                  copy[1] = copy[1] + 1;
                  changeGoodCount(copy);
                }}
              >
                👍
              </span>
              {goodCount[1]}
            </div>
            <div className='col-6 '>댓글</div>
          </div>
        </div>
        <div
          className='g-col-6 g-col-md-4 '
          style={{
            border: '1px solid rgb(222,222,222)',
            borderRadius: '5px',
            width: '31%',
            margin: '1%',
          }}
        >
          <div className='col-div ' style={{ overflow: 'hidden' }}>
            <img
              className='col-img'
              src={process.env.PUBLIC_URL + '/main5.jpg'}
              width='100%'
            ></img>
          </div>
          <div className='col-content'>
            <span>재미로 보는 사이드프로젝트 통계 - 직군별 수준</span>
            <p>우주은</p>
          </div>
          <div className='subdiv'>
            <div className='col-6 '>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...goodCount];
                  copy[1] = copy[1] + 1;
                  changeGoodCount(copy);
                }}
              >
                👍
              </span>
              {goodCount[1]}
            </div>
            <div className='col-6 '>댓글</div>
          </div>
        </div>
        <div
          className='g-col-6 g-col-md-4 '
          style={{
            border: '1px solid rgb(222,222,222)',
            borderRadius: '5px',
            width: '31%',
            margin: '1%',
          }}
        >
          <div className='col-div ' style={{ overflow: 'hidden' }}>
            <img
              className='col-img'
              src={process.env.PUBLIC_URL + '/c1.jpg'}
              width='100%'
            ></img>
          </div>
          <div className='col-content'>
            <span>LINE 오픈챗 서버가 100배 급증하는 트래픽을 다루는 방법</span>
            <p>우주은</p>
          </div>
          <div className='subdiv'>
            <div className='col-6 '>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...goodCount];
                  copy[1] = copy[1] + 1;
                  changeGoodCount(copy);
                }}
              >
                👍
              </span>
              {goodCount[1]}
            </div>
            <div className='col-6 '>댓글</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindDeveloper;
