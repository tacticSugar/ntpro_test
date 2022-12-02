export default function Select({ options, activePair, setActivePair }) {
  return (
    <select onChange={(e) => setActivePair(e.target.value)} value={activePair}>
      {options.map((el) => (
        <option value={el.value}>{el.label}</option>
      ))}
    </select>
  )
}
