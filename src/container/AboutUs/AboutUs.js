import React from 'react'
import './AboutUs.css'
import letterLogo from '../../assets/H.png'
import spoon from '../../assets/spoon.svg'
import knife from '../../assets/knife.png'


const AboutUs = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className='app__aboutus-overlay flex__center'>
            <img src={letterLogo} alt='h letter' />
        </div>

        <div className='app__aboutus-content flex__center'>
            <div className="app__aboutus-content_about">
                <h1 className='headtext__cormorant'>About Us</h1>
                <img src={spoon} alt='about_spoon' className='spoon_img'></img>
                <p className='p__opensans'>
                    We make food for the mind and for the soul. Our dishes redefine what it means to perceive taste.
                    All of our ingrediants are sourced directly from the island in which the restaurant
                    is located on. We harvest. We ferment. We slaughter. We Marinate. We liquify. We spherify.
                    We gel. All right here on the island.
                </p>
                <button type='button' className='custom__button'>Learn More</button>
            </div>
            
            <div className='app__aboutus-content_knife flex__center'>
                <img src={knife} alt='about_knife' />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className='headtext__cormorant'>Our History</h1>
                <img src={spoon} alt='about_spoon' className='spoon_img'></img>
                <p className='p__opensans'>
                    A passion for food forged from humble beginnings has now blossomed into a world renound establishment 
                    that lives on the cutting edge of inivation and culinary excellence. Years of refinement and experimentation
                    has lead to the world famous restaurant that stands before you.
                    </p>
                <button type='button' className='custom__button'>Learn More</button>
            </div>

        </div>
    </div>
  )
}

export default AboutUs