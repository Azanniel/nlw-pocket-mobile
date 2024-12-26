import { useQuery } from '@tanstack/react-query'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { Modal, View } from 'react-native'

import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { Coupon } from '@/components/market/coupon'
import { Cover } from '@/components/market/cover'
import { Details } from '@/components/market/details'
import { getMarket } from '@/http/get-market'

export default function Market() {
  const [coupon, setCoupon] = useState<string | null>(null)
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)

  const { id } = useLocalSearchParams<{ id: string }>()
  const { data: market, isFetching } = useQuery({
    queryKey: ['market', id],
    queryFn: () => getMarket(id),
  })

  function handleOpenCamera() {
    try {
      setIsVisibleCameraModal(true)
    } catch (error) {
      console.error(error)
    }
  }

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
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <Button onPress={() => setIsVisibleCameraModal(false)}>
          <Button.Title>Voltar</Button.Title>
        </Button>
      </Modal>
    </View>
  )
}
