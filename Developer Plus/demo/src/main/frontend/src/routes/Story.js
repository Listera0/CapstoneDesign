import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { faCommentDots as farCommentDots } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
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
            <StoryCard
              story={allStoryDto[i].id}
              i={i}
              allStoryDto={allStoryDto}
              navigate={props.navigate}
            ></StoryCard>
          );
        })}
      </div>
    </div>
  );
}

function StoryCard(props) {
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
                <FontAwesomeIcon icon={farHeart} style={{ fontSize: '20px' }} />{' '}
                {props.allStoryDto[props.i].id}
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
