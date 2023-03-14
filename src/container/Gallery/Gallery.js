import React, { useRef } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import './Gallery.css'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import plate1 from '../../assets/plate1.png'
import plate3 from '../../assets/plate3.png'
import plate4 from '../../assets/plate4.png'
import plate5 from '../../assets/plate5.png'
import plate6 from '../../assets/plate6.png'
import plate7 from '../../assets/plate7.png'
import plate8 from '../../assets/plate8.png'


const images = [plate1, plate3, plate4, plate5, plate6, plate7, plate8]


const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    const scrollDistance = 830

    if(direction === 'left')
      current.scrollLeft -= scrollDistance
    else
      current.scrollLeft += scrollDistance
  }



  return (
    <div className="app__gallery flex__center">
        <div className="app__gallery-content">
            <SubHeading title='Instagram' />
            <h1 className="headtext__cormorant">Photo Gallery</h1>
            <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
                Some of Our most popular Dishes
            </p>
            <button type="button" className="custom__button">View More</button>
        </div>
        <div className='app__gallery-images'>
          <div className="app__gallery-images_container" ref={scrollRef}>
            {images.map((images, index)=>(
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={images} alt='gallery img' />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>

          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')} />
            <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')} />
          </div>
        </div>
    </div>
  )
}

export default Gallery