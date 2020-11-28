// image assets
import img1 from '../../assets/video/sect-imgs/img1.svg';
import img2 from '../../assets/video/sect-imgs/img2.svg';
import img3 from '../../assets/video/sect-imgs/img3.svg';

// sections
export const sectionOne = {
   id: 'market',
   lightBg: true,
   lightTxt: false,
   heading: 'Get Live Market Updates',
   subheading: 'Market',
   description: 'Never miss an update on a stock or company with our 24/7 market update feature.',
   buttonLabel: 'Market',
   primaryBtn: false,
   img: img1,
   imgFirst: true,

}
export const sectionTwo = {
   id: 'trade',
   lightBg: false,
   lightTxt: true,
   heading: 'Start Trading Today',
   subheading: 'Trade',
   description: 'Whether you are a pro or a rookie, our easy to use trading platform makes it easy to execute plans.',
   buttonLabel: 'Trade',
   primaryBtn: true,
   img: img2,
   imgFirst: false,

}
export const sectionThree = {
   id: 'pricing',
   lightBg: true,
   lightTxt: false,
   heading: 'Learn More!',
   subheading: 'Pricing',
   description: 'Our New App Make It Easier Than Ever',
   buttonLabel: 'Sign Up',
   primaryBtn: false,
   img: img3,
   imgFirst: true,

}

