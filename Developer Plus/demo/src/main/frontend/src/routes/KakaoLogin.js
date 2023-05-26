import { useState, useEffect, userState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { atom, useSetRecoilState } from 'recoil';
import axios from 'axios';

function KakaoLogin(props) {
  const navigate = useNavigate();

  // 1.해당 페이지가 로딩되었다면 url 에 인가코드가 담기게 된다.  
  useEffect(() => {
    
    //2.인가코드를 추출할 변수 생성. 현재 url 주소를 가지고 있다. 
    const url = new URL(window.location.href);

    //3.위에서 만든 URL 에서 code=  라고 써진 키값을 찾아서 벨류를 반환받음.
    const code = url.searchParams.get("code");

    //4.위에서 얻은 인가코드를 백엔드의 카카로 로그인주소로 보냄.
    axios
      .get(`/api/auth/kakao?code=${code}`)
      .then((res) => {
        axios //서버에서 유저정보 요청하는 url 
        .get(`/api/auth/hasProId?proId=${res.data.providerId}&&provider=${res.data.provider}`)
        .then((response) => {
          if(response.data['result'] == "true") {
            sessionStorage.setItem('id', response.data['id']);
            navigate("/");
          }
          else {
            if(res.data.email != null) {
              sessionStorage.setItem('email', res.data.email);
            }
            sessionStorage.setItem('name', res.data.name);
            sessionStorage.setItem('proId', res.data.providerId);
            sessionStorage.setItem('has', "true");
            navigate("/SignUp");
          }
        });
    });
  }, []);
  return <div>로딩중...</div>;
}
export default KakaoLogin;