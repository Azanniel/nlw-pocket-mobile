import { useQuery } from '@tanstack/react-query'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useRef, useState } from 'react'
import { Alert, Modal, ScrollView, View } from 'react-native'

import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { Coupon } from '@/components/market/coupon'
import { Cover } from '@/components/market/cover'
import { Details } from '@/components/market/details'
import { getCoupon } from '@/http/get-coupon'
import { getMarket } from '@/http/get-market'

export default function Market() {
  const [coupon, setCoupon] = useState<string | null>(null)
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)

  const isQrCodeScannerLocked = useRef(false)

  const [_, requestPermission] = useCameraPermissions()
  const { id } = useLocalSearchParams<{ id: string }>()
  const { data: market, isFetching } = useQuery({
    queryKey: ['market', id],
    queryFn: () => getMarket(id),
  })

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        return Alert.alert(
          'Permissão',
          'Precisamos da permissão da câmera para ler o QR Code.',
        )
      }

      isQrCodeScannerLocked.current = false
      setIsVisibleCameraModal(true)
    } catch (error) {
      console.error(error)
      Alert.alert('Câmera', 'Não foi possível utilizar a câmera.')
    }
  }

  async function getCouponCode(marketId: string) {
    try {
      const { coupon } = await getCoupon(marketId)

      setCoupon(coupon)
      Alert.alert('Cupom', coupon)
    } catch (error) {
      console.log(error)
      Alert.alert('Cupom', 'Não foi possível utilizar o cupom.')
    }
  }

  function handleUseCoupon(code: string) {
    setIsVisibleCameraModal(false)

    Alert.alert(
      'Cupom',
      'Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?',
      [
        { style: 'cancel', text: 'Não' },
        { text: 'Sim', onPress: () => getCouponCode(code) },
      ],
    )
  }

  if (isFetching) {
    return <Loading />
  }

  if (!market) {
    return <Redirect href="/home" />
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={market.cover} />
        <Details data={market} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !isQrCodeScannerLocked.current) {
              isQrCodeScannerLocked.current = true
              setTimeout(() => handleUseCoupon(data), 500)
            }
          }}
        />

        <View style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
          <Button onPress={() => setIsVisibleCameraModal(false)}>
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  )
}
