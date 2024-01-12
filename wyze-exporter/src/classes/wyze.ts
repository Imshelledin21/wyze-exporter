'use strict'
const axios = require('axios')
const md5 = require('md5')
const moment = require('moment')
const LocalStorage = require('node-localstorage').LocalStorage
const localStorage = new LocalStorage('./scratch')

export class Wyze {
  username: any
  password: any
  xApiKey: string
  userAgent: string
  phoneId: string
  authUrl: string
  baseUrl: string
  appVer: string
  sc: string
  sv: string
  accessToken: string
  refreshToken: string
  /**
   * @param {object} options
   * @constructor
   */
  constructor(options: { username: any; password: any; }) {
    this.username = options.username
    this.password = options.password
    this.xApiKey = 'kywkv5UnY5NhhRe18aU5X67w91yMKojCGooq4kHmjZDHgMUpOfAf20g0Otk8'
    this.userAgent = 'wyze_ios_2.21.35'
    this.phoneId = '7624c647-c679-4599-9366-c2e2d42a654d'
    this.authUrl = 'https://auth-prod.api.wyze.com'
    this.baseUrl = 'https://api.wyzecam.com:8443'
    this.appVer = 'com.hualai.WyzeCam___2.3.69'
    this.sc = '9f275790cab94a72bd206c8876429f3c'
    this.sv = '9d74946e652647e9b6c9d59326aef104'
    this.accessToken = ''
    this.refreshToken = ''
  }

  /**
  * get request data
  */
  async getRequestBodyData(data = {}) {
    return {
      access_token: this.accessToken,
      phone_id: this.phoneId,
      app_ver: this.appVer,
      sc: this.sc,
      sv: this.sv,
      ts: moment().unix(),
      ...data,
    }
  }

  /**
  * get tokens
  */
  async getTokens() {
    this.accessToken = localStorage.getItem('access_token')
    this.refreshToken = localStorage.getItem('refresh_token')
  }

  /**
  * set tokens
  */
  async setTokens(accessToken: any, refreshToken: any) {
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('refresh_token', refreshToken)
    this.accessToken = accessToken
    this.refreshToken = refreshToken
  }

  /**
   * login to get access_token
   * @returns {data}
   */
  async login() {
    let result
    try {

      const data = {
        email: this.username,
        password: md5(md5(md5((this.password)))),
      }

     let options = {
       headers: {
        'x-api-key': this.xApiKey,
        'user-agent': this.userAgent,
        'Content-Type': 'application/json',
        'Keyid': this.phoneId,
        'Apikey': this.xApiKey
       }
     }

      result = await axios.post(`${this.authUrl}/api/user/login`, await this.getRequestBodyData(data), await options)
      this.setTokens(result.data['access_token'], result.data['refresh_token'])
    }
    catch (e) {
      throw e
    }
    return result.data
  }

  /**
   * get refresh_token
   * @returns {data}
   */
  async getRefreshToken() {
    let result
    try {
      const data = {
        refresh_token: this.refreshToken,
      }
      result = await axios.post(`${this.baseUrl}/app/user/refresh_token`, await this.getRequestBodyData(data))
      this.setTokens(result.data.data['access_token'], result.data.data['refresh_token'])
    }
    catch (e) {
      throw e
    }
    return result.data
  }

  /**
   * get objects list
   * @returns {data}
   */
  async getObjectList() : Promise<any> {
    let result
    try {
      await this.getTokens();
      if (!this.accessToken) {
        await this.login()
      }
      result = await axios.post(`${this.baseUrl}/app/v2/home_page/get_object_list`, await this.getRequestBodyData())
      if (result.data.msg === 'AccessTokenError') {
        await this.getRefreshToken()
        return this.getObjectList()
      }
    }
    catch (e) {
      throw e
    }
    return result.data
  }

  /**
   * run action
   * @returns {data}
   */
  async runAction(instanceId: any, providerKey: any, actionKey: string | undefined) : Promise<any>{
    let result
    try {
      await this.getTokens();
      if (!this.accessToken) {
        await this.login()
      }

      const data = {
        provider_key: providerKey,
        instance_id: instanceId,
        action_key: actionKey,
        action_params: {},
        custom_string: '',
        phone_id: this.phoneId,
      }

      result = await axios.post(`${this.baseUrl}/app/v2/auto/run_action`, await this.getRequestBodyData(data))

      if (result.data.msg === 'AccessTokenError') {
        await this.getRefreshToken()
      }
    }
    catch (e) {
      throw e
    }
    return result.data
  }

  /**
  * get device info
  * @returns {data.data}
  */
  async getDeviceInfo(deviceMac: any, deviceModel: any) {
    let result
    try {
      await this.getTokens();
      if (!this.accessToken) {
        await this.login()
      }
      const data = {
        device_mac: deviceMac,
        device_model: deviceModel,
      }
      result = await axios.post(`${this.baseUrl}/app/v2/device/get_device_info`, await this.getRequestBodyData(data))
    } catch (e) {
      throw e
    }
    return result.data.data
  }

  /**
  * get property
  * @returns {data.property_list}
  */
  async getPropertyList(deviceMac: any, deviceModel: any) {
    let result
    try {
      await this.getTokens();
      if (!this.accessToken) {
        await this.login()
      }
      const data = {
        device_mac: deviceMac,
        device_model: deviceModel,
      }
      result = await axios.post(`${this.baseUrl}/app/v2/device/get_property_list`, await this.getRequestBodyData(data))
    } catch (e) {
      throw e
    }
    return result.data.data.property_list
  }

  /**
  * set property
  * @returns {data}
  */
  async setProperty(deviceMac: any, deviceModel: any, propertyId: any, propertyValue: any) {
    let result
    try {
      await this.getTokens();
      if (!this.accessToken) {
        await this.login()
      }
      const data = {
        device_mac: deviceMac,
        device_model: deviceModel,
        pid: propertyId,
        pvalue: propertyValue,
      }
      result = await axios.post(`${this.baseUrl}/app/v2/device/set_property`, await this.getRequestBodyData(data))

    } catch (e) {
      throw e
    }
    return result.data
  }

  /**
  * Helper functions
  */

  /**
  * getDeviceList
  */
  async getDeviceList() {
    const result = await this.getObjectList()
    return result.data.device_list
  }

  /**
  * getDeviceByName
  */
  async getDeviceByName(nickname: string) {
    const result = await this.getDeviceList()
    const device = result.find((device: { nickname: string }) => device.nickname.toLowerCase() === nickname.toLowerCase())
    return device
  }

  /**
  * getDeviceByMac
  */
  async getDeviceByMac(mac: any) {
    const result = await this.getDeviceList()
    const device = result.find((device: { mac: any }) => device.mac === mac)
    return device
  }

  /**
  * getDevicesByType
  */
  async getDevicesByType(type: string) {
    const result = await this.getDeviceList()
    const devices = result.filter((device: { product_type: string }) => device.product_type.toLowerCase() === type.toLowerCase())
    return devices
  }

  /**
  * getDevicesByModel
  */
  async getDevicesByModel(model: string) {
    const result = await this.getDeviceList()
    const devices = result.filter((device: { product_model: string }) => device.product_model.toLowerCase() === model.toLowerCase())
    return devices
  }

  /**
  * getDeviceGroupsList
  */
  async getDeviceGroupsList() {
    const result = await this.getObjectList()
    return result.data.device_group_list
  }

  /**
  * getDeviceSortList
  */
  async getDeviceSortList() {
    const result = await this.getObjectList()
    return result.data.device_sort_list
  }


  /**
  * turnOn
  */
  async turnOn(device: { mac: any; product_model: any }) {
    return await this.runAction(device.mac, device.product_model, 'power_on')
  }

  /**
  * turnOff
  */
  async turnOff(device: { mac: any; product_model: any }) {
    return await this.runAction(device.mac, device.product_model, 'power_off')
  }

  /**
  * getDeviceStatus
  */
  async getDeviceStatus(device: { device_params: any }) {
    return device.device_params
  }

  /**
  * getDeviceState
  */
  async getDeviceState(device: { device_params: { power_switch: number; open_close_state: number } }) : Promise<number> {
    let state = device.device_params.power_switch
    if (!state) {
      state = device.device_params.open_close_state
    }
    return state
  }

}
