import React from 'react';
import './Main.css';
import LeftBar from '../LeftBar';
import RightBar from '../RightBar';
import Feed from '../Feed';

export default function Main() {
  return (
    <div className='main-container'>
      <LeftBar />
      <Feed />
      <RightBar />
    </div>
  );
}
