import React from 'react'
import Content from '../Content/Content'
import CardProduct from '../CardProduct/CardProduct'
// import CellPhoneList from '../CellPhoneList/CellPhoneList'
// import Adverts from '../Adverts/Adverts'

const Home = () => {
  return (
    <div className='content'>
        {/* <Content /> */}
        <CardProduct apiKey={'https://api-farmacia-higia-java-d263a377630d.herokuapp.com/products/all'} />
    </div>
  )
}

export default Home