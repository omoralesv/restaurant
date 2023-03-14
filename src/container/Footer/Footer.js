import React from 'react'
import './Footer.css'
import { FiFacebook, FiTwitter, FiInstagram, FiTwitch } from 'react-icons/fi'
import FooterOverlay from '../../components/Footer/FooterOverlay'
import Newsletter from '../../components/Footer/Newsletter'
import logo from '../../assets/mainlogo.png'
import spoon from '../../assets/spoon.png'

const Footer = () => {
  return (
    <div className="app__footer section__padding" id="login">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
          <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <p className="p__opensans">Hawthorn Island, New York</p>
            <p className="p__opensans">+1 123-456-7890</p>
            <p className="p__opensans">+1 456-789-0123</p>
          </div>

          <div className="app__footer-links_logo">
            <img src={logo} alt="footer_logo" />
            <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
            <img src={spoon} className="spoon__img" style={{ marginTop: 15 }} alt='spoon'/>
            <div className="app__footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
              <FiTwitch />
            </div>
          </div>

          <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday-Friday:</p>
            <p className="p__opensans">04:00 pm - 02:00 am</p>
            <p className="p__opensans">Saturday-Sunday:</p>
            <p className="p__opensans">04:00 pm - 03:00 am</p>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="p__opensans">2023 Hawthorn. All Rights reserved.</p>
        </div>
        <p className='p__opensans'>Parody website based on the 2022 movie <i>The Menu</i> </p>
    </div>

  )
}

export default Footer