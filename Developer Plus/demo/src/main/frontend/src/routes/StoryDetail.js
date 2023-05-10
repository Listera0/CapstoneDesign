import { data, projectData, developerData } from '../data.js';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
function StoryDetail(props) {
  let [tab, setTab] = useState(0);
  let { id } = useParams(); // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  let storyDetail = props.story.find(function (x) {
    return x.id == id;
  });
  return (
    <section className='bg-light'>
      <div className='container' style={{ marginTop: '-3%' }}>
        <div className='row'>
          <div className='col-lg-12'>
            <h2
              style={{
                textAlign: 'center',
                paddingTop: '5%',
                paddingLeft: '5%',
                fontWeight: '600',
              }}
            >
              {storyDetail.title}
            </h2>
            <div class='grid text-center'>
              <div class='g-col-6'>{storyDetail.name}</div>
              <div class='g-col-6'>{storyDetail.date}</div>
            </div>

            <div className='card card-style1 border-0'>
              <div className='card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7'>
                <div className='row align-items-center'>
                  <div className='col-lg-12 mb-4 mb-lg-0'>
                    <img
                      src={process.env.PUBLIC_URL + '/' + '0.jpg'}
                      width='100%'
                      style={{ textAlign: 'center' }}
                    ></img>
                  </div>
                  {/* <div className="col-lg-6 px-xl-10">
                    <div>
                      <h3 style={{ textAlign: "start" }}>{story.name}</h3>
                    </div>

                    <div className="subdiv">
                      <div
                        className="col-6 "
                        style={{ fontSize: "15px" }}
                      ></div>
                      <div className="col-6" style={{ fontSize: "15px" }}></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <TabContent tab={tab} story={props.story} storyDetail={storyDetail} />
        </div>
      </div>
    </section>
  );
}

function TabContent(props) {
  return (
    <div className='col-lg-12' style={{ padding: 0 }}>
      <div className='col-lg-12'>
        <div style={{ padding: '3%' }}>
          <span style={{ textAlign: 'start' }}>
            <p
              style={{
                textAlign: 'start',
                fontSize: '15px',
                marginTop: '2%',
              }}
            >
              <span style={{ fontWeight: '600', marginRight: '10%' }}>
                {props.storyDetail.content}
              </span>
            </p>
          </span>
        </div>
        <p style={{ paddingLeft: '3%', fontSize: '20px', textAlign: 'start' }}>
          댓글
        </p>
        <br></br>
        <div className='comment_object'>
          <div className='comment_user'>
            <div></div>
          </div>
          <div
            className='comment_input'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontSize: '15px',
              }}
            >
              {props.storyDetail.name}
            </p>
            <textarea
              rows='4'
              mexlength='200'
              className='comment_box'
              placeholder='댓글을 입력해주세요.'
            ></textarea>

            <button className='comment_btn'>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryDetail;
