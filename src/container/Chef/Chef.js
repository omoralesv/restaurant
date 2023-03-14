import React from 'react'
import './Chef.css'
import chef from '../../assets/chef.png'
import quote from '../../assets/quote.png'
import sign from '../../assets/sign.png'
import SubHeading from '../../components/SubHeading/SubHeading'


const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={chef} alt='chef img' />
        </div>

        <div className='app__wrapper_info'>
            <SubHeading title="Chef&apos;s Word" />
            <h1 className="headtext__cormorant">Our Philosophy</h1>

            <div className='app__chef-content'>
                <div className='app__chef-content_quote'>
                    <img src={quote} alt='quote img' />
                    <p className="p__opensans">
                        There is no way to avoid the mess. The mess you make of your
                        life, of your body, 
                    </p>
                </div>
                <p className="p__opensans">
                    of your sanity, by giving everything you
                    have to pleasing people you will never know. We must
                    be cleansed. Made clean. Like martyrs, or heretics, we can be
                    subsumed and made anew.
                </p>
            </div>

            <div className='app__chef-sign'>
                <p>Julian Slowik</p>
                <p className="p__opensans">Chef & Founder</p>
                <img src={sign} alt="sign_image" />
            </div>
        </div>
    </div>
  )
}

export default Chef