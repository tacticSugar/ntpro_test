import React from 'react'
import './Input.scss'

type InputProps = {
  value: string
  onChange: (value: string) => void
}

export default function Input(props: InputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/[\D]/, '')
    if (isNaN(parseFloat(value))) return
    props.onChange(value)
  }

  return (
    <div>
      <label>
        Volume
        <input value={props.value} onChange={handleChange} />
      </label>
    </div>
  )
}
