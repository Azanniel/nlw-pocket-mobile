import { api } from './api-client'

export interface Market {
  id: string
  name: string
  description: string
  coupons: number
  cover: string
  phone: string
  rules: {
    id: string
    description: string
  }[]
  address: string
  latitude: number
  longitude: number
}

export function getMarket(id: string) {
  return api.get(`markets/${id}`).json<Market>()
}
