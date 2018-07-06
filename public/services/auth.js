import api from './api'

class Auth {
  async login (email, password) {
    let token = await api.login(email, password)
    localStorage.setItem('token', token)
  }

  logout () {
    localStorage.removeItem('token')
  }
}

export default new Auth()
