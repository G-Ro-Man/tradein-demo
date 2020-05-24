import React from 'react'

import './radio-inputs.css'

const RadioInput = (props) => {
  const { name, id, value, checked, onChange, label, description } = props
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      <p className="radio-description mb-1">
        <label htmlFor={id}>{description}</label>
      </p>
    </div>
  )
}

export default RadioInput
