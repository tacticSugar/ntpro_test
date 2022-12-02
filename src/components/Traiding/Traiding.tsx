import { useEffect, useState } from 'react'
import Clock from '../Clock/Clock'
import { Modal } from '../Modal/Modal'
import Price from '../Price/Price'
import Select from '../Select/Select'

export default function Traiding({
  price,
  activePair,
  setArchiveList,
  setActivePair,
  options,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [orderValues, setOrderValues] = useState({ type: '', price: '' })
  const [volume, setVolume] = useState('')
  return (
    <div>
      <Clock />
      <Select
        options={options}
        activePair={activePair}
        setActivePair={setActivePair}
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
          price={(price * (1 - Math.random() / 10)).toFixed(4)}
          setIsOpen={setIsOpen}
          setOrderValues={setOrderValues}
        />
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <b className={orderValues.type === 'buy' ? 'green' : 'red'}>
          {orderValues.type}
        </b>{' '}
        <b>{orderValues.price}</b>
        {activePair}
        <div>
          <label htmlFor="volume">Volume</label>
          <input
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
        <br />
        <br />
        <button onClick={() => setIsOpen(false)}>Cancel</button>{' '}
        <button
          onClick={() => {
            setArchiveList((prev) => [
              ...prev,
              {
                side: orderValues.type,
                price: orderValues.price,
                instrument: activePair,
                volume,
                time: Date.now(),
              },
            ])
            setIsOpen(false)
            setVolume('')
          }}
        >
          OK
        </button>
      </Modal>
    </div>
  )
}
