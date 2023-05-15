import { developerData } from '../data.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
function ViewDeveloper(props) {
  const [allDevDto, setAllDevDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllDevData')
        .then((response) => setAllDevDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }
  useEffect(() => {
    if (props.goodcount != 0 && props.goodcount < 3) {
      props.changeGoodCount(props.goodCount + 1);
    }
  }, [props.goodCount]);
  return (
    <div className='container'>
      <div
        className='row'
        style={{
          paddingTop: '2%',
          paddingBottom: '2%',
          alignItems: 'center',
          paddingLeft: '2%',
          paddingRight: '2%',
        }}
      >
        {allDevDto.map((a, i) => {
          let jobDetail =
            allDevDto[i].job != null ? allDevDto[i].job.split(',') : '';
          let careerDetail =
            allDevDto[i].career != null ? allDevDto[i].career.split(',') : '';
          return (
            <DeveloperCard
              developer={allDevDto[i].id}
              i={i}
              allDevDto={allDevDto}
              goodCount={props.goodCount}
              changeGoodCount={props.changeGoodCount}
              navigate={props.navigate}
              key={i}
              jobDetail={jobDetail}
              careerDetail={careerDetail}
            ></DeveloperCard>
          );
        })}
      </div>
    </div>
  );
}

function DeveloperCard(props) {
  return (
    <div
      className='g-col-6 g-col-md-4 '
      style={{
        border: '1px solid rgb(222,222,222)',
        borderRadius: '5px',
        width: '25%',
        margin: '0',
      }}
    >
      <div
        className='col-12'
        onClick={() => {
          props.navigate(`/ViewDeveloperDetail/${props.allDevDto[props.i].id}`);
        }}
      >
        <img
          style={{ paddingTop: '3%' }}
          className='col-div_developer'
          src={`${process.env.PUBLIC_URL}/${
            props.allDevDto[props.i].imgURL
          }.jpg`}
        ></img>
      </div>
      <div className='col-content_developer' style={{ textAlign: 'center' }}>
        <p>{props.allDevDto[props.i].name}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p>[주 능력] {props.jobDetail[0]}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p style={{ textAlign: 'center' }}>[경력] {props.careerDetail[0]}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'start',
          }}
        >
          <p>[부 능력] {props.jobDetail[1]}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p style={{ textAlign: 'center' }}>[경력] {props.careerDetail[1]}</p>
        </div>
      </div>
      <div className='col-content_developer'>
        {props.goodCount ? (
          <DeLike
            developer={props.allDevDto[props.i].id}
            i={props.i}
            allDevDto={props.allDevDto}
            goodCount={props.goodCount}
            changeGoodCount={props.changeGoodCount}
            navigate={props.navigate}
          ></DeLike>
        ) : (
          <Like
            developer={props.allDevDto[props.i].id}
            i={props.i}
            allDevDto={props.allDevDto}
            goodCount={props.goodCount}
            changeGoodCount={props.changeGoodCount}
            navigate={props.navigate}
          ></Like>
        )}

        <p>
          참여중인 프로젝트 {props.allDevDto[props.i].projectCount}개 있습니다.
        </p>
        <button className='btn'>
          <span> 1대1 대화 </span>
        </button>
      </div>
    </div>
  );
}

function DeLike(props) {
  return (
    <div className='col-content_developer'>
      <div className='col-12 '>
        <span
          onClick={() => {
            props.changeGoodCount(props.goodCount - 1);
          }}
        >
          👍
        </span>
        {props.goodCount}
      </div>
    </div>
  );
}
function Like(props) {
  return (
    <div className='col-content_developer'>
      <div className='col-12 '>
        <span
          onClick={(e) => {
            props.changeGoodCount(props.goodCount + 1);
          }}
        >
          👍
        </span>
        {props.goodCount}
      </div>
    </div>
  );
}
export default ViewDeveloper;
