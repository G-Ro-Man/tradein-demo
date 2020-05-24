import React from 'react'

const SearchField = (props) => {
  const { value, onChange } = props

  return (
    <div className="form-group">
      <input
        id="phone-model"
        name="name"
        type="text"
        className="form-control"
        placeholder="Ведите модель устройства"
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  )
}

export default SearchField
