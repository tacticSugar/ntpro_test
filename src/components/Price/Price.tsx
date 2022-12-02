import './Price.scss'

export type OrderValues = {
  type: 'buy' | 'sell'
  price: number
}

type PriceProps = {
  type: 'buy' | 'sell'
  setOrderValues: (values: OrderValues) => void
  setIsOpen: (value: boolean) => void
  price: number
}

export default function Price({
  type,
  price,
  setOrderValues,
  setIsOpen,
}: PriceProps) {
  const clickToPrice = () => {
    setOrderValues({ type, price })
    setIsOpen(true)
  }
  return (
    <div
      className={`${type === 'buy' ? 'green' : 'red'}`}
      onClick={clickToPrice}
    >
      <b>{type.toUpperCase()}</b>
      <h3>{price}</h3>
    </div>
  )
}
