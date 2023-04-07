import { supabase } from "./supabase"

interface RequestData {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url: string
  body?: any
}

class Api {

  constructor() {

  }

  async getAuthJWT() {
    const authSession = await supabase.auth.getSession()
    if (authSession.data.session?.access_token) {
      return authSession.data.session.access_token
    }
  }

  async request(data: RequestData) {
    const authorization = await this.getAuthJWT()

    return fetch(data.url, {
      body: data.body,
      method: data.method,
      headers: {
        'supabase-jwt': authorization ? `Bearer ${authorization}` : ''
      }
    })
  }



  async testApiCall() {
    const response = await this.request({
      url: 'https://eoyfxef2rsv6rc7.m.pipedream.net?user=my-user',
      method: 'GET'
    })

    const jsonData = await response.json() as {

    }


    return jsonData
  }

}

export const api = new Api()