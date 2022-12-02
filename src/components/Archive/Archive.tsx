import dayjs from 'dayjs'

export default function Archive({ archiveList }) {
  return (
    <table>
      <th>Side</th>
      <th>Price</th>
      <th>Instrument</th>
      <th>Volume</th>
      <th>Timestamp</th>
      {archiveList.map((el) => (
        <tr>
          <td className={el.side === 'buy' ? 'green' : 'red'}>{el.side}</td>
          <td>{el.price}</td>
          <td>{el.instrument}</td>
          <td>{el.volume}</td>
          <td>{dayjs(el.time).format('dddd, MMMM D, YYYY h:mm A')}</td>
        </tr>
      ))}
    </table>
  )
}
