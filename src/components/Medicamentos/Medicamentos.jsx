import React from 'react'
import Content from '../Content/Content'
import CardProduct from '../CardProduct/CardProduct'


const Medicamentos = () => {
  return (
    <div className='content'>
      <h1>Secão de medicamentos</h1>
      {/* <Content /> */}
      <CardProduct typeProduct={'medicamentos'} />
    </div>
  )
}

export default Medicamentos
