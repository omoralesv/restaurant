import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import './Header.css'
import item1 from '../../assets/item1.png'


const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavor"/>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>
        We, the people on this island, are not important. The island and the nutrients 
        it provides exist in their most perfect state without us gathering them or 
        manipulating them, or digesting them. What happens inside this room is meaningless 
        compared to what happens outside in nature, in the soil, in the water, in the air. 
        We are but a frightened nanosecond. Nature is timeless.
        </p>
        <button type='button' className='custom__button'>Explore the Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={item1} alt="header img"></img>
      </div>
    </div>
  )
}

export default Header