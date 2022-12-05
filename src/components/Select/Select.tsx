import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { configuration } from '../../configuration'
import './Select.scss'

type SelectProps = {
  options: Array<keyof typeof configuration>
  activePair: keyof typeof configuration
  setActivePair: (value: keyof typeof configuration) => void
}

export default function Select({
  options,
  activePair,
  setActivePair,
}: SelectProps) {
  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setActivePair(e.target.value as keyof typeof configuration)
  }

  return (
    <select onChange={handleOnChange} value={activePair}>
      {options.map((option) => (
        <option key={uuidv4()} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
