import { developerData } from '../data.js';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
function ViewDeveloper(props) {
  const goToviewDeveloperDetail = () => {
    props.navigate('/ViewDeveloperDetail');
  };
  const like = 1;
  return (
    <div className='container'>
      <div className='row' style={{ paddingTop: '2%', paddingBottom: '2%' }}>
        {props.developer.map((a, i) => {
          return (
            <DeveloperCard
              developer={props.developer[i]}
              i={i}
              goToviewDeveloperDetail={props.goToviewDeveloperDetail}
              goodCount={props.goodCount}
              changeGoodCount={props.changeGoodCount}
              setDeveloper={props.setDeveloper}
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
      <div className='col-div'>
        <img
          onClick={() => {
            props.goToviewDeveloperDetail();
          }}
          style={{ paddingTop: '3%' }}
          className='col-div_developer'
          src={process.env.PUBLIC_URL + '/' + (props.i + 1) + '.jpg'}
        ></img>
      </div>

      <div className='col-content_developer'>
        <p>{props.developer.name}</p>
        <p>{props.developer.mainJob}</p>
        <p>{props.developer.subJob}</p>
      </div>

      <div className='col-content_developer'>
        <p>{props.developer.project}</p>

        <div className='subdiv'>
          <div className='col-6 '>
            <span
              onClick={(e) => {
                e.stopPropagation();
                let copy = [...developerData];
                copy[props.i] = copy[props.i] + 1;
                props.setDeveloper(copy);
              }}
            >
              👍
            </span>
            {props.developer[props.i]}
          </div>

          <div className='col-6 '>댓글</div>
        </div>
      </div>
    </div>
  );
}

export default ViewDeveloper;
