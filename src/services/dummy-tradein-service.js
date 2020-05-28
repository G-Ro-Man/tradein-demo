import { TestData } from '../test-data'

export default class DummyTradeinServices {
  _prodnom = {
    status: 1,
    data: [
      { prodnom_id: '202', name: 'Asus ZenFone Selfie ZD551KL 16GB White' },
      { prodnom_id: '203', name: 'Asus ZenFone Selfie ZD551KL 16GB Black' },
      { prodnom_id: '204', name: 'Asus ZenFone Selfie ZD551KL 16GB Gold' },
      { prodnom_id: '205', name: 'Asus ZenFone Max ZC550KL 16GB White' },
      { prodnom_id: '206', name: 'Asus ZenFone Max ZC550KL 16GB Black' },
      { prodnom_id: '207', name: 'Asus ZenFone Max ZC550KL 16GB Gold' },
    ],
  }

  _prodnomAll = TestData
  // _prodnomAll = {
  //   status: 1,
  //   data: {
  //     '1': {
  //       prodnom_id: '1',
  //       name: 'Apple iPhone XS Max 64GB Space Grey',
  //       price_4: 777,
  //       price_4p: 777,
  //       price_5: 777,
  //       price_5p: 777,
  //     },
  //     '2': {
  //       prodnom_id: '2',
  //       name: 'Apple iPhone XS Max 64GB Silver',
  //       price_4: 777,
  //       price_4p: 777,
  //       price_5: 777,
  //       price_5p: 777,
  //     },
  //     '3': {
  //       prodnom_id: '3',
  //       name: 'Apple iPhone XS Max 64GB Gold',
  //       price_4: 777,
  //       price_4p: 777,
  //       price_5: 777,
  //       price_5p: 777,
  //     },
  //     '4': {
  //       prodnom_id: '4',
  //       name: 'Asus ZenFone Selfie ZD551KL 16GB White',
  //       price_4: 404,
  //       price_4p: 454,
  //       price_5: 504,
  //       price_5p: 554,
  //     },
  //     '5': {
  //       prodnom_id: '5',
  //       name: 'Asus ZenFone Selfie ZD551KL 16GB Black',
  //       price_4: 405,
  //       price_4p: 455,
  //       price_5: 505,
  //       price_5p: 555,
  //     },
  //     '6': {
  //       prodnom_id: '6',
  //       name: 'Asus ZenFone Selfie ZD551KL 16GB Gold',
  //       price_4: 406,
  //       price_4p: 456,
  //       price_5: 506,
  //       price_5p: 556,
  //     },
  //     '7': {
  //       prodnom_id: '7',
  //       name: 'Asus ZenFone Max ZC550KL 16GB White',
  //       price_4: 407,
  //       price_4p: 457,
  //       price_5: 507,
  //       price_5p: 557,
  //     },
  //     '8': {
  //       prodnom_id: '8',
  //       name: 'Asus ZenFone Max ZC550KL 16GB Black',
  //       price_4: 408,
  //       price_4p: 458,
  //       price_5: 508,
  //       price_5p: 558,
  //     },
  //     '9': {
  //       prodnom_id: '9',
  //       name: 'Asus ZenFone Max ZC550KL 16GB Gold',
  //       price_4: 409,
  //       price_4p: 459,
  //       price_5: 509,
  //       price_5p: 559,
  //     },
  //   },
  // }

  _calcPrice = {
    status: 1,
    data: {
      price: 850,
      product_group: '4+',
    },
  }

  getAllProdnom = async () => {
    return this._prodnomAll.data
  }

  findProdnom = async (query) => {
    const RegExpQuery = new RegExp(query.trim().replace(/\W/g, '.+'), 'i')
    const filteredProdnom = Object.entries(this._prodnomAll.data)
      .filter((el) => RegExpQuery.test(el[1].name))
      .map(([id, prod]) => ({
        id,
        name: prod.name,
        price_4: prod.price_4,
        price_4p: prod.price_4p,
        price_5: prod.price_5,
        price_5p: prod.price_5p,
      }))

    return filteredProdnom
  }

  // findProdnom = async () => {
  //   const res = this._prodnom
  //   return res.data.map(this._transformFindProdnomt)
  // }

  getPrice = async (prodnom_id, product_group) => {
    const filteredProdnomCalc = Object.entries(this._prodnomAll.data)
      .filter((el) => el[1].prodnom_id === prodnom_id)
      .map(([id, prod]) => ({
        id,
        name: prod.name,
        price_4: prod.price_4,
        price_4p: prod.price_4p,
        price_5: prod.price_5,
        price_5p: prod.price_5p,
      }))

    return filteredProdnomCalc[0][product_group]
  }
  // getPrice = async (prodnom_id, product_group) => {
  //   if (prodnom_id === '' && product_group === '') {
  //     return null
  //   }
  //   const res = this._calcPrice
  //   return res.data
  // }

  _transformFindProdnomt = (nom) => {
    return {
      id: nom.prodnom_id,
      name: nom.name,
    }
  }

  _transformGetPrice = (price) => {
    return {
      price: price.price,
      product_group: price.product_group,
    }
  }
}
