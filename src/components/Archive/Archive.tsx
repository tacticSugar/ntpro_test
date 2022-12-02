import dayjs from 'dayjs'
import { Order } from '../Traiding/Traiding'
import './Archive.scss'

type ArchiveProps = {
  archiveList: Order[]
}

export default function Archive({ archiveList }: ArchiveProps) {
  return (
    <table className="table">
      <tr>
        <th>Side</th>
        <th>Price</th>
        <th>Instrument</th>
        <th>Volume</th>
        <th>Timestamp</th>
      </tr>
      <tbody>
        {archiveList.reverse().map((el) => (
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
  )
}
