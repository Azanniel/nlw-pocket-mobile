import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function Market() {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Market: {id}</Text>
    </View>
  )
}
