import { useQuery } from '@tanstack/react-query'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'

import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { Coupon } from '@/components/market/coupon'
import { Cover } from '@/components/market/cover'
import { Details } from '@/components/market/details'
import { getMarket } from '@/http/get-market'

export default function Market() {
  const [coupon, setCoupon] = useState<string | null>(null)

  const { id } = useLocalSearchParams<{ id: string }>()
  const { data: market, isFetching } = useQuery({
    queryKey: ['market', id],
    queryFn: () => getMarket(id),
  })

  if (isFetching) {
    return <Loading />
  }

  if (!market) {
    return <Redirect href="/home" />
  }

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={market.cover} />
      <Details data={market} />

      {coupon && <Coupon code={coupon} />}

      <View style={{ padding: 32 }}>
        <Button>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>
    </View>
  )
}
