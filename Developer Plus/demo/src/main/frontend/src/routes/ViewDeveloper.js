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
      <div className='row' style={{ paddingTop: '2%', paddingBottom: '2%' }}>
        {allDevDto.map((a, i) => {
          return (
            <DeveloperCard
              developer={allDevDto[i].id}
              i={i}
              allDevDto={allDevDto}
              goodCount={props.goodCount}
              changeGoodCount={props.changeGoodCount}
              navigate={props.navigate}
              key={i}
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
        width: '23%',
        margin: '1%',
      }}
    >
      <div
        className='col-div'
        onClick={() => {
          props.navigate(`/ViewDeveloperDetail/${props.developer}`);
        }}
      >
        <img
          style={{ paddingTop: '3%' }}
          className='col-div_developer'
          src={process.env.PUBLIC_URL + '/' + (props.i + 1) + '.jpg'}
        ></img>
      </div>

      <div className='col-content_developer'>
        <p>{props.allDevDto[props.i].name}</p>
        <p>{props.allDevDto[props.i].job}</p>
        <p>{props.allDevDto[props.i].career}</p>
      </div>

      <div className='col-content_developer'>
        <p>{props.allDevDto[props.i].project}</p>
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
          />
        )}
      </div>
    </div>
  );
}

function DeLike(props) {
  return (
    <div className='col-content_developer'>
      <div className='subdiv'>
        <div className='col-6 '>
          <span
            onClick={() => {
              props.changeGoodCount(props.goodCount - 1);
            }}
          >
            👍
          </span>
          {props.goodCount}
        </div>

        <div className='col-6 '>댓글</div>
      </div>
    </div>
  );
}
function Like(props) {
  return (
    <div className='col-content_developer'>
      <p>{props.allDevDto[props.i].project}</p>
      <div className='subdiv'>
        <div className='col-6 '>
          <span
            onClick={(e) => {
              props.changeGoodCount(props.goodCount + 1);
            }}
          >
            👍
          </span>
          {props.goodCount}
        </div>

        <div className='col-6 '>댓글</div>
      </div>
    </div>
  );
}
export default ViewDeveloper;
