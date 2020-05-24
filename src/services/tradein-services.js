export default class TradeinServices {
  _apiBase = 'https://tradein.support.ua/api/v1/prodnom'
  // _apiFind = 'https://tradein.support.ua/api/v1/prodnom/find'
  _api_token = 'DZAkymuto7SjZ1k1zEdPeBOdnukUuyGNi.NsMSBD'
  // -	search_val - полное или частичное название устройства;

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      headers: {
        'TANDERS-API-TOKEN': 'TANDERS-API-TOKEN',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: {
        api_token: this._api_token,
      },
    })

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`)
    }
    return await res.json()
  }

  getAllProdnom = async () => {
    const res = await this.getResource(`/all`)
    return res.data
  }

  // findProdnom = async (search_val) => {
  //   return this._prodnom
  // }
}
