import { data } from '../data.js';
import { useState } from 'react';
import axios from 'axios';
function Story(props) {
  return (
    <div className='container'>
      <div className='row' style={{ paddingTop: '2%', paddingBottom: '2%' }}>
        {props.story.map((a, i) => {
          return (
            <StoryCard
              story={props.story[i]}
              i={props.i}
              goodCount={props.goodCount}
              changeGoodCount={props.changeGoodCount}
            ></StoryCard>
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
    <div className='col-md-4 '>
      <div
        className='col-div '
        style={{ overflow: 'hidden' }}
        onClick={() => {
          props.goToStoryDetail();
        }}
      >
        <img
          className='col-img'
          src={process.env.PUBLIC_URL + '/main' + (props.i + 1) + '.jpg'}
          width='100%'
        ></img>
      </div>
      <div className='col-content'>
        <span
          onClick={() => {
            props.goToStoryDetail();
          }}
        >
          {props.story.title}
        </span>
        <p>{props.story.content}</p>
      </div>
    </div>
  );
}
export default Story;
