import { useEffect, useState } from 'react'

import './Traiding.scss'

import Clock from '../Clock/Clock'
import { Modal } from '../Modal/Modal'
import Price, { OrderValues } from '../Price/Price'
import Select from '../Select/Select'
import Input from '../Input/Input'
import { configuration } from '../../configuration'
import { randomFromInterval } from '../../helpers/randomNum'
import { addOrder } from '../../redux/archiveSlice'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export type Order = {
  side: 'buy' | 'sell'
  price: number
  instrument: keyof typeof configuration
  volume: number
  time: Date
}

const options = Object.keys(configuration) as Array<keyof typeof configuration>

export default function Traiding() {
  const dispatch = useDispatch()

  const [activePair, setActivePair] = useState(options[0])

  const { min, max } = configuration[activePair]
  const [price, setPrice] = useState(randomFromInterval(min, max).toFixed(4))

  const [volume, setVolume] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [orderValues, setOrderValues] = useState<OrderValues>()

  useEffect(() => {
    const { min, max } = configuration[activePair]
    const interval = setInterval(() => {
      setPrice(randomFromInterval(min, max).toFixed(4))
    }, 700)
    return () => clearInterval(interval)
  }, [activePair])

  function calculateSpread(): number {
    const fixPrice = (+price)
      .toFixed(4)
      .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')

    const fixSpread = configuration[activePair].spread
      .toFixed(4)
      .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')

    const fixRes = (parseFloat(fixPrice) - parseFloat(fixSpread))
      .toFixed(4)
      .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')

    return parseFloat(fixRes)
  }

  function handleActivePair(activePair: keyof typeof configuration) {
    const { min, max } = configuration[activePair]
    setActivePair(activePair)
    setPrice(randomFromInterval(min, max).toFixed(4))
  }

  function handleSubmitOrder() {
    if (!orderValues) return
    dispatch(
      addOrder({
        side: orderValues.type,
        price: orderValues.price,
        instrument: activePair,
        volume: parseFloat(volume),
        time: new Date(),
      })
    )
    setIsOpen(false)
    setVolume('')
  }

  return (
    <div className="trading-container">
      <div className="buttons">
        <Link className="link" to={'/'}>
          TRAIDING
        </Link>
        <Link className="link" to={'/archive'}>
          ARCHIVE
        </Link>
      </div>
      <Clock />
      <Select
        options={options}
        activePair={activePair}
        setActivePair={handleActivePair}
      />
      <div className="prices">
        <Price
          type="buy"
          price={parseFloat(price)}
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
        {orderValues && (
          <>
            <b className={orderValues.type === 'buy' ? 'green' : 'red'}>
              {orderValues.type} {orderValues.price}
            </b>
            <b>{activePair}</b>
            <Input value={volume} onChange={setVolume} />
            <div className="modal__buttons">
              <button onClick={() => setIsOpen(false)}>Cancel</button>{' '}
              <button onClick={handleSubmitOrder}>OK</button>
            </div>
          </>
        )}
      </Modal>
    </div>
  )
}
