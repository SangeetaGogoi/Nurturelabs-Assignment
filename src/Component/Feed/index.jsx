import React from 'react';
import { useState, useEffect } from 'react';
import './Feed.css';
import WALLET from '../Assets/Wallet.png';
import REMOVE from '../Assets/Remove Icon.png';
import IMAGE from '../Assets/Image.png';
import ENTER from '../Assets/Enter Icon.png';
import MONEYBAG from '../Assets/Money Bag.png';
import COPYICON from '../Assets/Copy.png';
import SecondTab from '../SecondTab/index';

export default function Feed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/akshita151199/APIs/main/data'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);

  return (
    <main className='feed-container'>
      <div className='nav-bar'>
        <div className='section-container'>
          Section
        </div>
        <div className='balance-container'>
          <img
            src={WALLET}
            alt=''
            className='wallet-icon'
          />
          0.2 $XYZ
          <div className='tier'>Tier 1</div>
        </div>
      </div>
      <div className='banner-container'>
        <div className='promo-panel'>
          <h4>
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </h4>
          <button className='tutorial-con'>
            Tutorial
          </button>
          <img
            src={REMOVE}
            alt=''
            className='remove-icon'
          />
          <img
            src={IMAGE}
            alt=''
            className='image'
          />
        </div>
      </div>
      <div className='reward-container'>
        <div className='reward-innercontainer'>
          <p>Your rewards</p>
          <div className='rewards-link'>
            <h2> $ 0.26231428</h2>
            <button className='editable-button'>
              <img src={ENTER} alt='' />
              Custom link
            </button>
          </div>
          <div className='rewards-scheme'>
            <div className='avax'>$40 AVAX</div>
            <div className='bnb'>$10 BNB</div>
            <div className='btc'>$210 BTC</div>
          </div>
        </div>
      </div>
      <div className='ad-container'>
        <div className='left-container'>
          <div className='percentage'>
            <img src={MONEYBAG} alt='' />
            <h3>12.5% of fee</h3>
          </div>
          <p>Your Referral Link for xyz</p>
          <div className='referral-link'>
            https://unityexchange.design
            <img
              src={COPYICON}
              alt=''
              className='copy-icon'
            />
          </div>
        </div>
        <div className='right-container'>
          <div className='percentage'>
            <img src={MONEYBAG} alt='' />
            <h3>12.5% of fee</h3>
          </div>
          <p>Your Referral Link for xyz</p>
          <div className='referral-link'>
            https://unityexchange.design
            <img
              src={COPYICON}
              alt=''
              className='copy-icon'
            />
          </div>
        </div>
      </div>
      <div className='bottom-bar'>
        <div className='title'>
          <h3>First Tab</h3>
          <h4>Second Tab</h4>
        </div>
        <div className='first-tab'>
          <h4>ASSET</h4>
          <h4>AMOUNT</h4>
          <h4>USER ACCOUNT</h4>
          <h4>REFERRAL EARNING</h4>
        </div>
        {data.length
          ? data.map((item, index) => (
              <SecondTab
                key={index}
                records={item}
              />
            ))
          : null}
      </div>
    </main>
  );
}
