import BaseModel from './BaseModel'

export default class Model extends BaseModel {

  baseURL () {
    return '/api'
  }

  request (config) {
    return this.$http.request(config)
  }
}