import React, { Component } from 'react'
import DummyTradeinServices from '../../services/dummy-tradein-service'
import Spinner from '../spinner'

import './search-results.css'

export default class SearchResults extends Component {
  tradeinServices = new DummyTradeinServices()

  state = {
    itemList: null,
  }

  componentDidMount() {
    this.tradeinServices.findProdnom().then((itemList) => {
      this.setState({
        itemList,
      })
    })
  }

  renderItems(arr) {
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
          onClick={() => this.props.onItemSelected(id, name)}
        >
          {name}
        </li>
      )
    })
  }

  render() {
    const { itemList } = this.state

    if (!itemList) {
      return <Spinner />
    }

    const items = this.renderItems(itemList)

    return (
      <div className="dropdown">
        <ul className="item-list list-group dropdown-menu">{items}</ul>
      </div>
    )
  }
}
