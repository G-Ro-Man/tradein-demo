import React, { Component } from 'react'

import DefaultPhoneImg from './Apple-iPhone-X-Black.png'
import FormInputs from '../form-inputs'
import DummyTradeinServices from '../../services/dummy-tradein-service'
import Price from '../price'
import ConfirmButton from '../confirm-button'
import { Header, Title } from '../header'

export default class App extends Component {
  state = {
    values: {
      prodnom_id: '',
      name: '',
      product_group: '',
    },
    show: false,
    price: '',
    itemList: null,
  }

  tradeinServices = new DummyTradeinServices()

  onChange = (event) => {
    const { name, value } = event.target

    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }))

    if (name === 'name') {
      if (value !== '')
        this.findProdnom(value).then((itemList) => {
          this.setState({
            itemList,
          })
        })
      else {
        this.setState({
          itemList: null,
          show: false,
        })
      }
    }

    const { prodnom_id } = this.state.values

    if (prodnom_id !== '' && name === 'product_group') {
      this.getPrice(prodnom_id, value)
    }
  }

  getPrice(prodnom_id, product_group) {
    this.tradeinServices.getPrice(prodnom_id, product_group).then((price) => {
      this.setState({
        price,
      })
    })
  }

  findProdnom = (val) => {
    if (val) {
      this.setState(() => ({
        show: true,
      }))
      return this.tradeinServices.findProdnom(val)
    }
    this.setState(() => ({
      show: false,
    }))
  }

  onItemSelected = (id, name) => {
    this.setState((state) => ({
      values: {
        ...state.values,
        prodnom_id: id,
        name,
        product_group: '',
      },
      show: false,
      price: '',
      itemList: null,
    }))
  }

  render() {
    const { values, show, price, itemList } = this.state
    return (
      <div className="form-container card">
        <form className="form">
          <Header />
          <div className="card-body form-description">
            <Title />
            <div className="row align-items-center">
              <FormInputs
                values={values}
                itemList={itemList}
                show={show}
                onChange={this.onChange}
                findProdnom={this.findProdnom}
                onItemSelected={this.onItemSelected}
              />
              <div className="col-md-5">
                <img
                  src={DefaultPhoneImg}
                  className="w-100 mb-4 p-2"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <Price price={price} />
              <ConfirmButton />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
