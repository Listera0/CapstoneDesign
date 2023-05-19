import { developerData } from '../data.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
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
      className='col-4 '
      style={{
        padding: '1%',
        width: '25%',
      }}
    >
      <div className='d-flex justify-content-around '>
        <Card style={{ width: '18rem' }}>
          <div
            className='col-div '
            style={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => {
              props.navigate(
                `/ViewDeveloperDetail/${props.allDevDto[props.i].id}`
              );
            }}
          >
            <img
              style={{
                paddingTop: '3%',
                cursor: 'pointer',
                paddingLeft: '10%',
                marginRight: '5%',
              }}
              src={`${process.env.PUBLIC_URL}/${
                props.allDevDto[props.i].imgURL
              }.jpg`}
            ></img>
            <Card.Text className='col-content' style={{ paddingTop: '3%' }}>
              <span style={{ fontSize: '18px' }}>
                {props.allDevDto[props.i].name}
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />{' '}
                <div style={{ paddingLeft: '10%' }}>
                  {props.allDevDto[props.i].likeCount}
                </div>
              </div>
            </Card.Text>
          </div>

          <Card.Body>
            <Card.Text className='col-content'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '3%',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                [직무]
                <div style={{ paddingLeft: '5%' }}>{props.jobDetail[0]}</div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '3%',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                [전문분야]
                <div style={{ paddingLeft: '5%' }}>{props.jobDetail[1]}</div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '3%',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                [경력]
                <div style={{ paddingLeft: '5%' }}>{props.careerDetail[0]}</div>
              </div>
            </Card.Text>
            <Card.Text className='col-content'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '3%',
                  fontSize: '12px',
                  fontWeight: '400',
                }}
              >
                참여중인 프로젝트 &nbsp;
                <div style={{ fontWeight: '700', color: 'rgb(148,179,248)' }}>
                  {props.allDevDto[props.i].projectCount}&nbsp;
                </div>
                개 있습니다.
              </div>
            </Card.Text>

            <button className='btn'>
              <span> 1대1 대화 </span>
            </button>
          </Card.Body>
        </Card>
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
          <FontAwesomeIcon icon={farHeart} style={{ fontSize: '20px' }} />
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
          <FontAwesomeIcon icon={farHeart} size='2x' />
        </span>
        {props.goodCount}
      </div>
    </div>
  );
}
export default ViewDeveloper;
