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

  Node_js: (
    <FontAwesomeIcon
      icon='fa-brands fa-node-js'
      style={{ fontSize: '50px', color: 'green' }}
    />
  ),
  python: (
    <FontAwesomeIcon icon='fa-brands fa-python' style={{ fontSize: '50px' }} />
  ),

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
      src={process.env.PUBLIC_URL + '/ximg.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  C: (
    <img
      src={process.env.PUBLIC_URL + '/C.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  java: (
    <img
      src={process.env.PUBLIC_URL + '/java.jpg'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  'C++': (
    <img
      src={process.env.PUBLIC_URL + '/Cplus.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  'C#': (
    <img
      src={process.env.PUBLIC_URL + '/Ctiq.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  typescript: (
    <img
      src={process.env.PUBLIC_URL + '/typescript.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  assembly: (
    <img
      src={process.env.PUBLIC_URL + '/assembly.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  swift: (
    <img
      src={process.env.PUBLIC_URL + '/swift.jpg'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  php: (
    <img
      src={process.env.PUBLIC_URL + '/php.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  go: (
    <img
      src={process.env.PUBLIC_URL + '/go.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  R: (
    <img
      src={process.env.PUBLIC_URL + '/R.jpg'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  ruby: (
    <img
      src={process.env.PUBLIC_URL + '/ruby.jpg'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  rust: (
    <img
      src={process.env.PUBLIC_URL + '/rust.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  kotlin: (
    <img
      src={process.env.PUBLIC_URL + '/kotlin.jpg'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  vue: (
    <img
      src={process.env.PUBLIC_URL + '/vue.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  jquery: (
    <img
      src={process.env.PUBLIC_URL + '/jquery.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  nuxt: (
    <img
      src={process.env.PUBLIC_URL + '/nuxt.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
  next: (
    <img
      src={process.env.PUBLIC_URL + '/next.png'}
      style={{ width: '50px', height: '50px' }}
    />
  ),
};
const jobs = {
  프론트엔드: '프론트엔드',
  'UX/UI기획': 'UX/UI기획',
  벡엔드: '벡엔드',
};
export { icons2, jobs };
