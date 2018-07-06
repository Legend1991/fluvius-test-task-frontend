import config from '../config'

class Api {
  _request (method, path, body) {
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    let token = localStorage.getItem('token')
    if (token) {
      headers['Authorization'] = token
    }

    const options = {method, headers}

    if (body) {
      options.body = JSON.stringify(body)
    }

    const url = `${config.endpoint}/${path}`

    return fetch(url, options).then(this._json)
  }

  _json (res) {
    if (res.status === 200) {
      return res.json()
    } else {
      const error = new Error(res.statusText)
      error.response = res
      throw error
    }
  }

  _get (url) {
    return this._request('GET', url)
  }

  _post (url, body) {
    return this._request('POST', url, body)
  }

  _put (url, body) {
    return this._request('PUT', url, body)
  }

  _delete (url) {
    return this._request('DELETE', url)
  }

  async login (email, password) {
    let res = await this._post('login', {email, password})
    return res.result
  }

  async creaceEvent (name, date) {
    let res = await this._post('events', {name, date})
    return res.result
  }

  async getEvents (query) {
    let queryStr = Object.keys(query).reduce((res, key) => {
      let value = typeof query[key].toISOString === 'function'
        ? query[key].toISOString()
        : query[key]
      res += res === '' ? '?' : '&'
      res += `${key}=${value}`
      return res
    }, '')
    return this._get(`events${queryStr}`)
  }

  async updateEvent (id, {name, date}) {
    return this._put(`events/${id}`, {name, date})
  }

  async deleteEvent (id) {
    return this._delete(`events/${id}`)
  }
}

export default new Api()
