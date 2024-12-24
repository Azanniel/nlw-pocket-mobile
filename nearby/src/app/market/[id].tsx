import { useQuery } from '@tanstack/react-query'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

import { Loading } from '@/components/loading'
import { getMarket } from '@/http/get-market'

export default function Market() {
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Market: {market.name}</Text>
    </View>
  )
}
