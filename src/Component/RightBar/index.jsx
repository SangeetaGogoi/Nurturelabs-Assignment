import React from 'react';
import './RightBar.css';
import AVALANCHE from '../Assets/Avalanche.png';
import WALLET from '../Assets/Wallet.png';
import DROPDOWN from '../Assets/Vector.png';
import CLOSEARROW from '../Assets/Close.png';
import ENTER from '../Assets/Enter Icon.png';
import CANCEL from '../Assets/Cancel Icon.png';

export default function RightBar() {
  return (
    <aside className='rightbar-container'>
      <div className='info'>
        <div className='avalanche-container'>
          <img
            src={AVALANCHE}
            alt=''
            className='avalanche-icon'
          />
          Avalanche
          <img
            src={DROPDOWN}
            alt=''
            className='dropdown-icon'
          />
        </div>
        <div className='address-container'>
          <img
            src={WALLET}
            alt=''
            className='wallet-icon'
          />
          OXF6...1353
          <img
            src={DROPDOWN}
            alt=''
            className='dropdown-icon'
          />
        </div>
      </div>
      <div className='action-container'>
        <div className='link-container'>
          <div className='custom-link'>
            <img src={CLOSEARROW} alt='' />
            Custom Link
          </div>
          <div className='link-address'>
            https://testnet.xyzxyz/trade?ref=
          </div>
          <input
            type='text'
            placeholder='ENTER'
            className='enter-button'
          />
        </div>
      </div>
      <div className='action-buttons'>
        <button className='editable-button'>
          <img src={ENTER} alt='' />
          Custom link
        </button>
        <button className='cancel-button'>
          <img src={CANCEL} alt='' />
          Cancel
        </button>
      </div>
    </aside>
  );
}
