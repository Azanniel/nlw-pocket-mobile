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

export function getMarketsByCategory(categoryId: string) {
  return api.get(`markets/category/${categoryId}`).json<Market[]>()
}
