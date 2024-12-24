import { api } from './api-client'

export interface Market {
  id: string
  name: string
  description: string
  coupons: number
  cover: string
  address: string
  latitude: number
  longitude: number
}

export function getMarket(id: string) {
  return api.get(`markets/${id}`).json<Market>()
}
