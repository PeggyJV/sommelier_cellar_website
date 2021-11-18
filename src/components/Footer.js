import React from "react"
import SbEditable from "storyblok-react"

import twitterImg from '@images/social/twitter.png'
import githubImg from '@images/social/github.png'
import discordImg from '@images/social/discord.png'
import telegramImg from '@images/social/telegram.png'

import investPolychain from '@images/investors/Polychain.png'
import investStandarCrypto from '@images/investors/StandardCrypto.png'
import investAlameda from '@images/investors/Alameda.png'
import investMulticoin from '@images/investors/Multichain.png'
import investCyg from '@images/investors/cygnilabs.png'
import investD from '@images/investors/D1.png'
import investTendermint from '@images/investors/Tendermint.png'
import investByzantine from '@images/investors/Byzantine.png'
import investZola from '@images/investors/Zola.png'

const Footer = () => {
  return (
    <footer className="text-center flex flex-col items-center py-20 mx-auto">
      <div className='footer-investors section-container'>
        <h2 className="text-center">Investors</h2>
        <div className='footer-investors__img-container type2'>
          <img src={investPolychain} className='type2' />
        </div>
        <div className='footer-investors__img-container'>
          <img src={investStandarCrypto} />
          <img src={investAlameda} />
        </div>
        <div className='footer-investors__img-container'>
          <img src={investMulticoin} />
          <img src={investCyg} />
        </div>
        <div className='footer-investors__img-container'>
          <img src={investD} />
          <img src={investTendermint} />
        </div>
        <div className='footer-investors__img-container'>
          <img src={investByzantine} />
          <img src={investZola} />
        </div>
      </div>
      <div className='footer_container'>
        <div className='footer-menu-wrapper'>
          <div className='footer-menu-sommelier'>
            <h4>Sommelier</h4>
            <div className='footer-menu-sommelier-wrapper'>
              <a href='/' className='footer-menu-item'>Home</a>
              <a href='/about-us' className='footer-menu-item'>About</a>
              <a href='/blog/' className='footer-menu-item'>Blog</a>
              <a href='/resources/' className='footer-menu-item'>Resource</a>
              <a href='/events/' className='footer-menu-item'>Event</a>
            </div>
            <p className='copyright text-left'>Copyright © 2021 Sommelier</p>
          </div>
          <div className='footer-menu-social'>
            <h4>Social</h4>
            <div className='footer-menu-social-wrapper'>
              <a href='https://twitter.com/sommfinance' target='_blank' className='footer-menu-item'>
                <img src={twitterImg} />
              </a>
              <a href='https://github.com/PeggyJV' target='_blank' className='footer-menu-item'>
                <img src={githubImg} />
              </a>
              <a href='https://discord.com/invite/ZcAYgSBxvY' target='_blank' className='footer-menu-item'>
                <img src={discordImg} />
              </a>
              <a href='https://t.me/getsomm' target='_blank' className='footer-menu-item'>
                <img src={telegramImg} />
              </a>
            </div>
          </div>
        </div>
        <p className='description desktop-visible'>
          Sommelier is alpha software. Sommelier is non-custodial and has no warranties. We also do not endorse any pools that we share on our channels. Pools may be compromised and things on Sommelier break all the time and you may lose your money. We are not giving you investment advice with this update and Sommelier does not control your funds. Again, all our software is alpha and undergoing daily updates and things can break all the time.
        </p>
      </div>
      <p className='description mobile-visible' style={{ padding: '0px 50px 50px'}}>
        Sommelier is alpha software. Sommelier is non-custodial and has no warranties. We also do not endorse any pools that we share on our channels. Pools may be compromised and things on Sommelier break all the time and you may lose your money. We are not giving you investment advice with this update and Sommelier does not control your funds. Again, all our software is alpha and undergoing daily updates and things can break all the time.
      </p>
    </footer>
  )
}

export default Footer
