import React from 'react'

function Coins({name,icon,price,symbol}) {
  return (
    <div className='coin'>
      <img src={icon} />
      <h1>Name:{name}</h1>
      <h3>Price In USD:{price}</h3>
      <h3>Symbol:{symbol}</h3>
    </div>
  )
}

export default Coins
