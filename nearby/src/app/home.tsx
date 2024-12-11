import { useEffect } from 'react'
import { Alert, Text, View } from 'react-native'

import { getCategories } from '@/http/get-categories'

export default function Home() {
  async function fetchCategories() {
    try {
      const categories = await getCategories()

      console.log(categories)
    } catch (error) {
      console.error(error)
      Alert.alert('Categorias', 'Não foi possível carregar as categorias')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Text>Home</Text>
    </View>
  )
}
