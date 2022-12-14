import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { getFromLS } from '../../helpers/sessionStorageHelper'
import { useAppSelector } from '../../redux/store'
import { Order } from '../Traiding/Traiding'
import './Archive.scss'

export default function Archive() {
  // const orders: Order[] = getFromLS('order') ?? [] // get from LS
  const orderList = useAppSelector((state) => {
    return state.archive.orderList.length > 0 ? state.archive.orderList : []
  })

  return (
    <div className="archive-container">
      <div className="buttons">
        <Link className="link" to={'/'}>
          TRAIDING
        </Link>
        <Link className="link" to={'/archive'}>
          ARCHIVE
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Side</th>
            <th>Price</th>
            <th>Instrument</th>
            <th>Volume</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {orderList.map((el) => (
            <tr key={el.time.toISOString()}>
              <td className={el.side === 'buy' ? 'green' : 'red'}>
                {el.side.toString().toUpperCase()}
              </td>
              <td>{el.price}</td>
              <td>{el.instrument}</td>
              <td>{el.volume}</td>
              <td>{dayjs(el.time).format('YYYY.MM.DD H:mm:s.sss')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
