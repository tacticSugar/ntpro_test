import dayjs from 'dayjs'
// import '..//Traiding/Traiding.scss'
import './Archive.scss'

export default function Archive({ archiveList }) {
  return (
    <table className="table">
      <tr>
        <th>Order</th>
        <th>Price</th>
        <th>Instrument</th>
        <th>Volume</th>
        <th>Timestamp</th>
      </tr>
      <tbody>
        {archiveList.map((el) => (
          <tr>
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
