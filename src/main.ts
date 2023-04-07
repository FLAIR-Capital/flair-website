import Alpine from 'alpinejs'
import { api } from './api'
import './auth'
import './init'


Alpine.store('App', {
  user: 'my user',
  
  init() {
    console.log('App store initialized')
  },

  async click() {
    const res = await api.testApiCall()
    console.log("🚀 ~ file: main.ts:23 ~ click ~ res:", res)
  }
})