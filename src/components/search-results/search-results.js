import React from 'react'
import Spinner from '../spinner'

import './search-results.css'

const SearchResults = (props) => {
  const { onItemSelected, itemList } = props

  if (!itemList) {
    return <Spinner />
  }

  function renderItems(arr) {
    if (arr.length === 0) {
      return (
        <li className="list-group-item dropdown-list-item" key="1">
          Модель не найдена
        </li>
      )
    }
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item dropdown-list-item"
          key={id}
          onClick={() => onItemSelected(id, name)}
        >
          {name}
        </li>
      )
    })
  }

  const items = renderItems(itemList)

  return (
    <div className="dropdown">
      <ul className="item-list list-group dropdown-menu">{items}</ul>
    </div>
  )
}

export default SearchResults
