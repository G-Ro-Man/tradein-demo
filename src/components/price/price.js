import React from 'react'

const Price = (props) => {
  const { price } = props

  return (
    <div className="col-6 col-md-4">
      <h6>Оценочная стоимость</h6>
      <p>{price ? `${price} грн` : '-'}</p>
    </div>
  )
}

export default Price
