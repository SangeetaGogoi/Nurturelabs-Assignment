import React from 'react';
import './LeftBar.css';
import CLOSINGICON from '../Assets/closing icon.png';
import CATEGORY from '../Assets/Category.png';
import SECTION1 from '../Assets/Group 15792.png';
import SECTION2 from '../Assets/Group 15799.png';
import SECTION3 from '../Assets/Group 15794.png';
import SECTION4 from '../Assets/Group 15874.png';
import SECTION5 from '../Assets/Group 15802.png';
import SECTION6 from '../Assets/Group 15803.png';
import SECTION7 from '../Assets/Group 15804.png';
import SECTION8 from '../Assets/Group 15805.png';
import DOCUMENT from '../Assets/Group 15806.png';
import DARKTHEMEPNG from '../Assets/Dark toggle.png';

export default function LeftBar() {
  return (
    <aside className='leftbar-container'>
      <div className='indicators'>
        <div className='profile-name'>
          {' '}
          <div className='logo'>N</div>{' '}
          <div className='logo-name'>Name</div>
        </div>
        <div className='closing-icon'>
          <img src={CLOSINGICON} alt='' />
        </div>
      </div>
      <div className='section-list'>
        <ul>
          <li>
            {' '}
            <img
              src={CATEGORY}
              alt=''
              className='category-icon'
            />{' '}
            Home
          </li>
          <li>
            <img
              src={SECTION1}
              alt=''
              className='sec1-icon'
            />{' '}
            Section 1
          </li>
          <li>
            <img
              src={SECTION2}
              alt=''
              className='sec2-icon'
            />{' '}
            Section 2
          </li>
          <li>
            <img
              src={SECTION3}
              alt=''
              className='sec3-icon'
            />{' '}
            Section 3
          </li>
          <li>
            <img
              src={SECTION4}
              alt=''
              className='sec4-icon'
            />{' '}
            Section 4
          </li>
          <li>
            <img
              src={SECTION5}
              alt=''
              className='sec5-icon'
            />{' '}
            Section
          </li>
          <li>
            <img
              src={SECTION6}
              alt=''
              className='sec6-icon'
            />{' '}
            Section 6
          </li>
          <li>
            <img
              src={SECTION7}
              alt=''
              className='sec7-icon'
            />{' '}
            Section 7
          </li>
          <li className='share-container'>
            <img
              src={SECTION8}
              alt=''
              className='sec8-icon'
            />
            Section 8
          </li>
          <li>
            {' '}
            <img
              src={DOCUMENT}
              alt=''
              className='doc-icon'
            />
            Documentation
          </li>
        </ul>
      </div>
      <div className='bottom-container'>
        <div className='button-container'>
          <button className='price-button'>
            {' '}
            <div className='logo'>N</div>
            $0.90
          </button>
          <button className='buy-button'>
            {' '}
            Buy $XYZ
          </button>
        </div>
        <div className='dark-theme'>
          <img src={DARKTHEMEPNG} alt='' />
        </div>
      </div>
    </aside>
  );
}
