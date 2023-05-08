import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// let icons = [
//   <FontAwesomeIcon
//     icon='fa-brands fa-square-js'
//     style={{ color: '#f0d10a', fontSize: '80px' }}
//   />,

//   <FontAwesomeIcon
//     icon='fa-brands fa-java'
//     style={{ color: '#f0d10a', fontSize: '80px' }}
//   />,
//   <FontAwesomeIcon
//     icon='fa-brands fa-php'
//     style={{ color: '#f0d10a', fontSize: '80px' }}
//   />,
// ];

const icons2 = {
  react: (
    <FontAwesomeIcon
      icon='fa-brands fa-react'
      style={{ color: '#61dbfb', fontSize: '80px' }}
    />
  ),
  javascript: (
    <FontAwesomeIcon
      icon='fa-brands fa-square-js'
      style={{ color: '#f0d10a', fontSize: '80px' }}
    />
  ),

  java: (
    <FontAwesomeIcon icon='fa-brands fa-java' style={{ fontSize: '80px' }} />
  ),
};
const jobs = {
  프론트엔드: '프론트엔드',
  'UX/UI기획': 'UX/UI기획',
  벡엔드: '벡엔드',
};
export default { icons2, jobs };
