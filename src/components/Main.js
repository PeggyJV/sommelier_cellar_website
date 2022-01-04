import React, {useEffect, useState} from 'react'

import { getRemainDays } from '../utils/date'
import { prevZero } from '../utils/string'

import "../assets/scss/main.scss"

import welcomeBg from '@images/welcome.png'
import spiral1Img from '@images/spiral-1.png'
import rightArrowImg from '@images/right-arrow.png'

const airdropBgImg = '/images/airdrop-bg-2.png'
const etheriumImg = '/images/etherium.png'

const whyData1 = [
  {
    title: 'Liquidity Provider Management Tools',
    description: 'Sommelier Cellars are focused on Uniswap v3 which has high degree of capital efficiency in the Range Order structure.',
  },
  {
    title: 'Bi-Directional Ethereum Bridge',
    description: 'Ethereum transactions are managed by the most functional bridge optimized for extending Ethereum features for Liquidity Providers.',
  },
]

const whyData2 = [
  {
    title: 'Data Driven Strategies',
    description: 'Sommelier validators leverage optimal liquidity management strategies based on blockchain transaction data and advanced price prediction models.',
  },
  {
    title: 'Non-Custodial Liquidity Oracle',
    description: 'Sommelier transactions are managed by the Sommelier blockchain validator set with decentralized governance. Sommelier itself does not control user funds.',
  },
]

setTimeout(function(){
  var href = window.location.href;
  const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
  const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
  const twitter_url = 'http://twitter.com/share?url='+ href;

  const fb = document.getElementById('facebook')


  if (fb) {
    document.getElementById('facebook').setAttribute("href", facebook_url);
    document.getElementById('linkedin').setAttribute("href", linkedin_url);
    document.getElementById('twitter').setAttribute("href", twitter_url);
  }
}, 1500);

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

function CountNumber({ value, cnt, mark }) { 
  return (
    <div className='main-airdrop-countdown-numbers'>
      {prevZero(value, '0', cnt).split('').map((num, index) => (
        <div className='main-airdrop-countdown-number' key={`${mark}-${index}`}>
          {num}
        </div>
      ))}
    </div>
  )
}

const END_TIME = 1648684800000    // 2022.3.31 0:0:0 UTC

export default function Main() {
  const [day, setDay] = useState(0)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    windowGlobal.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      const { day: d, hour: h, minute: m } = getRemainDays(new Date().getTime(), END_TIME)
      setDay(d)
      setHour(h)
      setMinute(m)
    }, 1000)

    return () => clearInterval(interval)
  }, [day, hour, minute])

  return (
    <div className='mt-5 main-container'>
      <div className='main-airdrop'>
        <div className='main-airdrop-content'>
          <div className='main-airdrop-title'>
            <span>SOMM AIRDROP</span>
            <span>EXPIRES IN</span>
          </div>
          <div className='main-airdrop-countdown'>
            <div className='main-airdrop-countdown-item'>
              <div className='main-airdrop-countdown-days'>
                <CountNumber value={day} cnt={3} mark='day' />
              </div>
              <div className='main-airdrop-countdown-labels'>
                Days
              </div>
            </div>
            <div className='main-airdrop-countdown-item'><span>:</span></div>
            <div className='main-airdrop-countdown-item'>
              <div className='main-airdrop-countdown-days'>
                <CountNumber value={hour} cnt={2} mark='hour' />
              </div>
              <div className='main-airdrop-countdown-labels'>
                Hours
              </div>
            </div>
            <div className='main-airdrop-countdown-item'><span>:</span></div>
            <div className='main-airdrop-countdown-item'>
              <div className='main-airdrop-countdown-days'>
                <CountNumber value={minute} cnt={2} mark='minute' />
              </div>
              <div className='main-airdrop-countdown-labels'>
                Minutes
              </div>
            </div>
          </div>
          <a href="https://airdrop.sommelier.finance/" target="_blank" className='main-airdrop-link'>
            Claim your tokens now
            <img src={rightArrowImg} />
          </a>
        </div>
        <div className='main-airdrop-bg'>
          <img src={airdropBgImg} />
        </div>
      </div>

      <a name="features" id='features'></a>

      <div className='main-welcome-why'>
        <div className="main-welcome" style={{ backgroundImage: `url(${welcomeBg})`, backgroundSize: 'cover' }}>
          <img src={etheriumImg} alt='frame image' />
          <h1>Welcome to Sommelier</h1>
          <h3>The new coprocessor for the Ethereum VM</h3>
          <a href='#' className='add-liquidity-button'>Add Liquidity</a>
        </div>

        <div className='main-why'>
          <h2>
            Why Sommelier Cellars?
          </h2>
          <div className='main-why__content'>
            <div className='main-why__content-wrapper'>
              {whyData1.map((data, index) => (
                <div className='main-why__content-item' key={`why1-title-${index}`}>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
            <div className='main-why__content-wrapper'>
              {whyData2.map((data, index) => (
                <div className='main-why__content-item' key={`why2-title-${index}`}>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
              ))}
              </div>
          </div>
        </div>
      </div>
      <a name="usecases" id='usecases'></a>
      <div className='main-usecases'>
        <h2>
          Use Cases
        </h2>
        <div className='main-usecases__content'>
          <div className='main-usecases__content-item mobile-visible'>
            <img src={spiral1Img} />
          </div>
          <div className='main-usecases__content-wrapper'>
            <div className='main-usecases__content-item'>
              <h4>Decentralized Portfolio Management</h4>
              <p>Validator set portfolio management with full user funds control.</p>
            </div>
            <img src={spiral1Img} className='desktop-visible'/>
            <div className='main-usecases__content-item'>
              <h4>Compounding Fees Across AMMs and Networks</h4>
              <p>Automatically compounding fees without need for active intervention.</p>
            </div>
          </div>
          <div className='main-usecases__content-wrapper'>
            <div className='main-usecases__content-item'>
              <h4>Permissionless Governance</h4>
              <p>Propose new DeFi strategies for community vote and validator managed deployment.</p>
            </div>
            <div className='main-usecases__content-spacer'>
            </div>
            <div className='main-usecases__content-item'>
              <h4>Automated Portfolio Rebalancing</h4>
              <p>Automatically rebalance portfolio to focus on high yield Liquidity Provider opportunities and exit lower yielding opportunities.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='main-divider'></div>

    </div>
  )
}
