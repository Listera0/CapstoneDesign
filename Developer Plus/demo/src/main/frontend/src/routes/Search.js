import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
let MobileDeveloper = styled.div`
  width: 25%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
let Scroll = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    overflow-x: auto;
  }
`;
function Serach() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  let { id } = useParams();
  const [userDetail, setUserDetail] = useState(['']);
  {
    useEffect(() => {
      axios
        .post('/api/getDevData', {
          id: id,
          orderBy: '',
          limit: '',
        })
        .then((response) => setUserDetail(response.data))
        .catch((error) => console.log(error));
    }, []);
  }
  const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
  ];
  useEffect(() => {
    // 검색어가 변경될 때마다 데이터를 필터링
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className='App'>
      <div className='col-lg-12 mb-4 mb-sm-5'>
        <span className='col-lg-6'>
          <input
            type='text'
            style={{
              width: '60%',
              height: '10vh',
              borderRadius: '5px',
              border: '1px solid rgb(222,222,222)',
              outline: 'none',
              marginLeft: '10%',
              padding: '25px 20px',
              fontSize: '20px',
            }}
            id='title'
            value={searchTerm}
            onChange={handleSearch}
            placeholder='검색어를 입력하세요'
          ></input>
        </span>
        <span className='col-lg-6'>
          <button
            style={{
              width: '10%',
              height: '10vh',
              borderRadius: '5px',
              border: '1px solid rgb(222,222,222)',
              outline: 'none',
              marginLeft: '1%',
              padding: '20px 20px',
              fontSize: '20px',
            }}
            id='title'
          >
            검색
          </button>
        </span>
        <span className='col-lg-6'>
          <p
            style={{
              marginLeft: '10%',
              width: '100%',
              fontSize: '25px',
              marginTop: '3%',
            }}
          >
            "백엔드"에 대한 검색 결과
          </p>
        </span>
        <br></br>
        <hr style={{ marginLeft: '5%', marginRight: '10%' }}></hr>
        <p
          style={{
            textAlign: 'start',

            paddingLeft: '5%',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          스토리 검색건
        </p>
        <div className='container'>
          <div className='row' style={{ marginRight: '20%' }}>
            <div
              className='col-12'
              style={{
                display: 'flex',
                padding: '15px 15px',
              }}
            >
              <div className='thumbnail'>
                <img src='https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2021/06/09175641/GettyImages-1321766712-scaled.jpg'></img>
              </div>
              <div className='txtWrap'>
                <div className='title'>[그래픽, 웹 디자이너] 여행역할</div>
                <div className='content'>
                  프로젝트에 관해 더 자세히 물어보고 싶으신 분들은 오픈 채팅으로
                  연락주시면 친절하게
                  설명해드리겠습니다.https://open.kakao.com/o/sVAjZSaf1.
                  프로젝트의 시작 동기큰 주제여행을 가려고 하는 사람들끼리
                  각자의 역할을 정한 뒤 해야 할 일을 처리할 수 있고 단합할 수
                  있도록 해준다친구들과 여행을 가려고 할 때 계획을 짤 때마다
                  각자의 역할이 있다는 것을 알게되었고, 그 역할을 이용해서
                  서비스를 만들면 좋을것같단 생각을 했습니다.
                </div>
              </div>
            </div>
            <div
              className='col-12'
              style={{ display: 'flex', padding: '15px 15px' }}
            >
              <div className='thumbnail'>
                <img src='https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2020/02/10160353/GettyImages-1131776334-scaled.jpg'></img>
              </div>
              <div className='txtWrap'>
                <div className='title'>사이드 프로젝트(웹개발) 팀원 모집</div>
                <div className='content'>
                  4~5주 단기간에 프로젝트 완성하실분 구합니다! 기획부터 개발까지
                  같이 만들어가요! 스터디&amp;네트워킹 목표 및 진행방식 목표 :
                  4~5주 동안 프로젝트 완성 진행방식 : 온라인 장소/횟수 : 주
                  3~5회 기간 : 4~5주 참여 조건 필요인원 : 백엔드 개발자 1
                  명(java, springboot 사용할수 있어야합니다) 프론트엔드 개발자
                  2명 참여회비 : 같이 정하면 좋을거같습니다 기타 : 열심히 하셔서
                  프토젝트 완성하실분 구합니다!!!
                </div>
              </div>
            </div>
            <div
              className='col-12'
              style={{ display: 'flex', padding: '15px 15px' }}
            >
              <div className='thumbnail'>
                <img src='https://letspl.s3.ap-northeast-2.amazonaws.com/user/3754/images/%EC%BC%80%EC%9D%B4%ED%98%B8%20%ED%94%84%EB%A1%9C%ED%95%84%2021.png'></img>
              </div>
              <div className='txtWrap'>
                <div className='title'>
                  [서울][직장인들을 위한 플랫폼 만들어봐요]
                </div>
                <div className='content'>
                  안녕하세요 직무전환을 위해 사이드 프로젝트를 진행하려고
                  합니다!현재는 사이드 프로젝트지만, 후에 앱 런칭과 운영까지
                  생각하고 있어요프로젝트 인원은 9명이고, 필요에 따라 증원될 수
                  있습니다.소개｢직장인들을 위한 플랫폼｣－ 함께
                  만들어가봐요목표： 기깔나는 앱 또는 웹 구현프로젝트에 대해
                  자세하게 정해진 건 아직 없습니다.다만 직장인들을 대상으로 하는
                  플랫폼을 만들어보고 싶어요.따라서 다양한 의견을 적극적으로
                  내주실 분을 적극 환영합니다.같은 의견을 가지신 분들은
                  지원해주세요!취준생, 직장인 등 성별, 나이, 경력 모두
                  무관입니다.열정 하나만 가지고 지원해주세요! 포지션 별 인원
                  모집 상세기획자 : 3명(팀장 포함 기획자 3명)UI UX 디자이너 :
                  2명프론트 : 2명백엔드 : 2명사용기술백엔드 : Java, Spring, JPA,
                  C++ 등이 프로젝트를 통해 무언가를 얻을 건지와 구현 기능에
                  따라서 사용할 기술 같이 정해봐요!프론트 : 미정
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          textAlign: 'start',

          paddingLeft: '5%',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        프로젝트 검색건
      </p>
      <div className='container'>
        <div className='row' style={{ marginRight: '20%' }}>
          <div
            className='col-12'
            style={{
              display: 'flex',
              padding: '15px 15px',
            }}
          >
            <div className='thumbnail'>
              <img src='https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2021/06/09175641/GettyImages-1321766712-scaled.jpg'></img>
            </div>
            <div className='txtWrap'>
              <div className='title'>[그래픽, 웹 디자이너] 여행역할</div>
              <div className='content'>
                프로젝트에 관해 더 자세히 물어보고 싶으신 분들은 오픈 채팅으로
                연락주시면 친절하게
                설명해드리겠습니다.https://open.kakao.com/o/sVAjZSaf1.
                프로젝트의 시작 동기큰 주제여행을 가려고 하는 사람들끼리 각자의
                역할을 정한 뒤 해야 할 일을 처리할 수 있고 단합할 수 있도록
                해준다친구들과 여행을 가려고 할 때 계획을 짤 때마다 각자의
                역할이 있다는 것을 알게되었고, 그 역할을 이용해서 서비스를
                만들면 좋을것같단 생각을 했습니다.
              </div>
            </div>
          </div>
          <div
            className='col-12'
            style={{ display: 'flex', padding: '15px 15px' }}
          >
            <div className='thumbnail'>
              <img src='https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2020/02/10160353/GettyImages-1131776334-scaled.jpg'></img>
            </div>
            <div className='txtWrap'>
              <div className='title'>사이드 프로젝트(웹개발) 팀원 모집</div>
              <div className='content'>
                4~5주 단기간에 프로젝트 완성하실분 구합니다! 기획부터 개발까지
                같이 만들어가요! 스터디&amp;네트워킹 목표 및 진행방식 목표 :
                4~5주 동안 프로젝트 완성 진행방식 : 온라인 장소/횟수 : 주 3~5회
                기간 : 4~5주 참여 조건 필요인원 : 백엔드 개발자 1 명(java,
                springboot 사용할수 있어야합니다) 프론트엔드 개발자 2명 참여회비
                : 같이 정하면 좋을거같습니다 기타 : 열심히 하셔서 프토젝트
                완성하실분 구합니다!!!
              </div>
            </div>
          </div>
          <div
            className='col-12'
            style={{ display: 'flex', padding: '15px 15px' }}
          >
            <div className='thumbnail'>
              <img src='https://letspl.s3.ap-northeast-2.amazonaws.com/user/3754/images/%EC%BC%80%EC%9D%B4%ED%98%B8%20%ED%94%84%EB%A1%9C%ED%95%84%2021.png'></img>
            </div>
            <div className='txtWrap'>
              <div className='title'>
                [서울][직장인들을 위한 플랫폼 만들어봐요]
              </div>
              <div className='content'>
                안녕하세요 직무전환을 위해 사이드 프로젝트를 진행하려고
                합니다!현재는 사이드 프로젝트지만, 후에 앱 런칭과 운영까지
                생각하고 있어요프로젝트 인원은 9명이고, 필요에 따라 증원될 수
                있습니다.소개｢직장인들을 위한 플랫폼｣－ 함께 만들어가봐요목표：
                기깔나는 앱 또는 웹 구현프로젝트에 대해 자세하게 정해진 건 아직
                없습니다.다만 직장인들을 대상으로 하는 플랫폼을 만들어보고
                싶어요.따라서 다양한 의견을 적극적으로 내주실 분을 적극
                환영합니다.같은 의견을 가지신 분들은 지원해주세요!취준생, 직장인
                등 성별, 나이, 경력 모두 무관입니다.열정 하나만 가지고
                지원해주세요! 포지션 별 인원 모집 상세기획자 : 3명(팀장 포함
                기획자 3명)UI UX 디자이너 : 2명프론트 : 2명백엔드 :
                2명사용기술백엔드 : Java, Spring, JPA, C++ 등이 프로젝트를 통해
                무언가를 얻을 건지와 구현 기능에 따라서 사용할 기술 같이
                정해봐요!프론트 : 미정
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          textAlign: 'start',

          paddingLeft: '5%',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        개발자 검색건
      </p>
    </div>
  );
}
export default Serach;
