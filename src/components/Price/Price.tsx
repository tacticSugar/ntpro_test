import { useEffect, useState } from 'react'

export default function Price({ type, price, setOrderValues, setIsOpen }) {
  const clickToPrice = () => {
    setOrderValues({ type, price })
    setIsOpen(true)
  }
  return (
    <div
      className={`${type === 'buy' ? 'green' : 'red'}`}
      onClick={clickToPrice}
    >
      <b>{type === 'buy' ? 'BUY' : 'SELL'}</b>
      <h3>{price}</h3>
    </div>
  )
}
