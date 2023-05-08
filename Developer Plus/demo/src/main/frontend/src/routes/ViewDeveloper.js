import { developerData } from '../data.js';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
function ViewDeveloper(props) {
  let { id } = useParams(); // 유저가 URL파라미터에 입력한거 가져오려면 useParams()

  let [developer, setDeveloper] = useState(developerData);
  return (
    <div className='container'>
      <div className='row' style={{ paddingTop: '2%', paddingBottom: '2%' }}>
        {props.developer.map((a, i) => {
          return (
            <DeveloperCard
              developer={developer[i].id}
              developerData={developerData}
              i={i}
              goodCount={props.goodCount}
              changeGoodCount={props.changeGoodCount}
              setDeveloper={setDeveloper}
              navigate={props.navigate}
              id={id}
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
        <p>{props.developerData[props.i].name}</p>
        <p>{props.developerData[props.i].mainJob}</p>
        <p>{props.developerData[props.i].subJob}</p>
      </div>

      <div className='col-content_developer'>
        <p>{props.developerData[props.i].project}</p>

        <div className='subdiv'>
          <div className='col-6 '>
            <span
              onClick={(e) => {
                e.stopPropagation();
                let copy = [...props.developerData];
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
