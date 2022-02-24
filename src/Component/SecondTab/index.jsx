import React from 'react';
import ENTER from '../Assets/Enter Icon.png';

export default function SecondTab({ records }) {
  return (
    <div className='second-tab'>
      <div className='asset-availability'>
        <img
          src={records.img}
          alt=''
          className='btc-icon'
        />
        <div className='asset-outer'>
          <h3>{records.asset}</h3>
          <div className='asset-inner'>
            {records.type}
            <button className='avax-con'>
              <img
                src={records.chain.img}
                alt=''
                className='avax-png'
              />
              {records.chain.name}
            </button>
          </div>
        </div>
      </div>
      <div className='amount-con'>
        <h3>{records.amount}</h3>
        <h4>{records.state}</h4>
      </div>
      <div className='useraccount-con'>
        <h3>
          {records.user.length > 10
            ? `${records.user.slice(
                0,
                11
              )}...${records.user.slice(
                records.user.length - 4,
                records.user.length
              )}`
            : records.user}
        </h3>
      </div>
      <div className='referral-con'>
        <h3> {records.referral_earnings} BNB</h3>
        <div className='referral-inner'>
          <h4>View on BSC Scan</h4>
          <img
            src={ENTER}
            alt=''
            className='enter-png'
          />
        </div>
      </div>
    </div>
  );
}
