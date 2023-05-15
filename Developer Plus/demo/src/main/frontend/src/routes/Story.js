import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

import { faCommentDots as farCommentDots } from '@fortawesome/free-regular-svg-icons';
import { data } from '../data.js';
import { useState, useEffect } from 'react';
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
function Story(props) {
  const [allStoryDto, setAllStoryDto] = useState(['']);
  {
    useEffect(() => {
      axios
        .get('/api/getAllStoryData')
        .then((response) => setAllStoryDto(response.data))
        .catch((error) => console.log(error));
    }, []);
  }
  return (
    <div className='container'>
      <div
        className='row'
        style={{
          paddingTop: '2%',
          paddingBottom: '2%',
          paddingLeft: '2%',
          paddingRight: '2%',
        }}
      >
        {allStoryDto.map((a, i) => {
          return (
            <CardExample
              story={allStoryDto[i].id}
              i={i}
              allStoryDto={allStoryDto}
              navigate={props.navigate}
            ></CardExample>
          );
        })}
      </div>
      <button
        onClick={() => {
          axios
            .get('http://codingapple1.github.io/shop/data2.json')
            .then((result) => {
              let copy = [...props.story, ...result.data];
              props.setStory(copy);
            });
        }}
      >
        더보기
      </button>
    </div>
  );
}
function StoryCard(props) {
  return (
    <div
      className='g-col-6 g-col-md-4 '
      style={{
        border: '1px solid rgb(222,222,222)',
        padding: '0',
        width: '33%',
        margin: '0',
      }}
    >
      <div
        className='col-div '
        style={{ overflow: 'hidden' }}
        onClick={() => {
          props.navigate(`/ViewStoryDetail/${props.allStoryDto[props.i].id}`);
        }}
      >
        <img
          className='col-img'
          src={process.env.PUBLIC_URL + '/main' + (props.i + 1) + '.jpg'}
          width='100vw'
        ></img>
      </div>
      <div className='col-content'>
        <span
          onClick={() => {
            props.navigate(`/ViewStoryDetail/${props.allStoryDto[props.i].id}`);
          }}
        >
          {props.allStoryDto[props.i].title}
        </span>
        <p>{props.allStoryDto[props.i].name}</p>
      </div>
    </div>
  );
}
function CardExample(props) {
  return (
    <div
      className='col-4 '
      style={{
        padding: '1%',
        width: '33%',
      }}
    >
      <div className='d-flex justify-content-around '>
        <Card style={{ width: '18rem' }}>
          <div
            className='col-div '
            style={{ overflow: 'hidden' }}
            onClick={() => {
              props.navigate(
                `/ViewStoryDetail/${props.allStoryDto[props.i].id}`
              );
            }}
          >
            <img
              className='col-img'
              src={process.env.PUBLIC_URL + '/main' + (props.i + 1) + '.jpg'}
              width='100vw'
            ></img>
          </div>
          <Card.Body>
            <Card.Title className='col-content' style={{ fontSize: '13px' }}>
              {props.allStoryDto[props.i].title}
            </Card.Title>
            <Card.Text className='col-content' style={{ fontSize: '10px' }}>
              {props.allStoryDto[props.i].name}
            </Card.Text>
            <hr></hr>
            <div
              style={{
                display: 'flex',
                fontSize: '10px',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <FontAwesomeIcon icon={farEye} size='2x' />
              </div>
              <div>
                <FontAwesomeIcon icon={farCommentDots} size='2x' />
              </div>
              <div style={{ fontSize: '15px' }}>
                👍 {props.allStoryDto[props.i].id}
              </div>
              <div>
                <FontAwesomeIcon icon={farBookmark} size='2x' />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Story;
