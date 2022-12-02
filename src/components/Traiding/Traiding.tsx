import { useEffect, useState } from 'react'

import './Traiding.scss'

import Clock from '../Clock/Clock'
import { Modal } from '../Modal/Modal'
import Price from '../Price/Price'
import Select from '../Select/Select'
import Input from '../Input/Input'
import { configuration } from '../../configuration'

export type Order = {
  side: 'buy' | 'sell'
  price: number
  instrument: keyof typeof configuration
  volume: number
  time: Date
}

type TraidingProps = {
  addNewOrder: (order: Order) => void
}

const options = Object.keys(configuration) as Array<keyof typeof configuration>

export default function Traiding(props: TraidingProps) {
  const { addNewOrder } = props

  const [activePair, setActivePair] = useState(options[0])

  const { min, max } = configuration[activePair]

  const [price, setPrice] = useState(randomIntFromInterval(min, max).toFixed(4))
  const [volume, setVolume] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [orderValues, setOrderValues] = useState({ type: '', price: '' })

  function randomIntFromInterval(min: number, max: number) {
    return Math.random() * (max - min + 1) + min
  }

  useEffect(() => {
    const { min, max } = configuration[activePair]
    const interval = setInterval(() => {
      setPrice(randomIntFromInterval(min, max).toFixed(4))
    }, 3000)
    return () => clearInterval(interval)
  }, [activePair])

  function calculateSpread() {
    return (parseFloat(price) - configuration[activePair].spread).toFixed(4)
  }

  function handleActivePair(activePair: keyof typeof configuration) {
    const { min, max } = configuration[activePair]
    setActivePair(activePair)
    setPrice(randomIntFromInterval(min, max).toFixed(4))
  }

  function handleClickSubmitVolume() {
    addNewOrder({
      side: orderValues.type,
      price: orderValues.price,
      instrument: activePair,
      volume,
      time: Date.now(),
    })
    setIsOpen(false)
    setVolume('')
  }

  return (
    <div className="trading">
      <Clock />
      <Select
        options={options}
        activePair={activePair}
        setActivePair={handleActivePair}
      />
      <div className="prices">
        <Price
          type="buy"
          price={price}
          setOrderValues={setOrderValues}
          setIsOpen={setIsOpen}
        />
        <Price
          type="sell"
          price={calculateSpread()}
          setIsOpen={setIsOpen}
          setOrderValues={setOrderValues}
        />
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <b className={orderValues.type === 'buy' ? 'green' : 'red'}>
          {orderValues.type} {orderValues.price}
        </b>
        <b>{activePair}</b>
        <Input value={volume} onChange={setVolume} />
        <div className="modal__buttons">
          <button onClick={() => setIsOpen(false)}>Cancel</button>{' '}
          <button onClick={handleClickSubmitVolume}>OK</button>
        </div>
      </Modal>
    </div>
  )
}
