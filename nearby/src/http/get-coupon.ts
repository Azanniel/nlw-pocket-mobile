import { api } from './api-client'

interface Coupon {
  coupon: string
}

export function getCoupon(marketId: string) {
  return api.patch(`coupons/${marketId}`).json<Coupon>()
}
