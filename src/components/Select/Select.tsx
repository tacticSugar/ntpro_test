export default function Select({ options, activePair, setActivePair }) {
  return (
    <select onChange={(e) => setActivePair(e.target.value)} value={activePair}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  )
}
