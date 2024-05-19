import React from 'react'

const Cartao = ({cabecalho, children}) => {
  return (
    // .card>(.card-header.text-muted+.card-body)
    <div className='card'>
      <div className='card-header text-muted'>{cabecalho}</div>
      <div className='card-body'>
        {children}
      </div>
    </div>    
  )
}

{/* <Cartao cabecalho="oi">
  <p>Oi</p>
  <div>
    <p>Tchau</p>
  </div>
</Cartao> */}

export default Cartao