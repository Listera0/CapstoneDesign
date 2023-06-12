import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// let icons = [
//   <FontAwesomeIcon
//     icon='fa-brands fa-square-js'
//     style={{ color: '#f0d10a', fontSize: '50px' }}
//   />,

//   <FontAwesomeIcon
//     icon='fa-brands fa-java'
//     style={{ color: '#f0d10a', fontSize: '50px' }}
//   />,
//   <FontAwesomeIcon
//     icon='fa-brands fa-php'
//     style={{ color: '#f0d10a', fontSize: '50px' }}
//   />,
// ];

const icons2 = {
  react: (
    <FontAwesomeIcon
      icon='fa-brands fa-react'
      style={{ color: '#61dbfb', fontSize: '50px' }}
    />
  ),
  javascript: (
    <FontAwesomeIcon
      icon='fa-brands fa-square-js'
      style={{ color: '#f0d10a', fontSize: '50px' }}
    />
  ),

  java: (
    <FontAwesomeIcon icon='fa-brands fa-java' style={{ fontSize: '50px' }} />
  ),
  Node_js: (
    <FontAwesomeIcon
      icon='fa-brands fa-node-js'
      style={{ fontSize: '50px', color: 'green' }}
    />
  ),

  python: (
    <FontAwesomeIcon
      icon=' fa-brands fa-python '
      style={{
        fontSize: '50px',
      }}
    />
  ),

  php: <FontAwesomeIcon icon='fa-brands fa-php' style={{ fontSize: '50px' }} />,
  golang: (
    <FontAwesomeIcon icon='fa-brands fa-golang' style={{ fontSize: '50px' }} />
  ),

  html: (
    <FontAwesomeIcon icon='fa-brands fa-html5' style={{ fontSize: '50px' }} />
  ),

  css: (
    <FontAwesomeIcon
      icon='fa-brands fa-css3-alt'
      style={{ fontSize: '50px' }}
    />
  ),
  bootstrap: (
    <FontAwesomeIcon
      icon='fa-brands fa-bootstrap'
      style={{ fontSize: '50px' }}
    />
  ),
  미입력: (
    <img
      src={process.env.PUBLIC_URL + '/ximg' + '.png'}
      style={{ width: '50px', height: '50px' }}
    ></img>
  ),
};
const jobs = {
  프론트엔드: '프론트엔드',
  'UX/UI기획': 'UX/UI기획',
  벡엔드: '벡엔드',
};
export { icons2, jobs };
