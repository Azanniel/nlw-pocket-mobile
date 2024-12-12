import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Alert, View } from 'react-native'

import { Categories } from '@/components/categories'
import { getCategories } from '@/http/get-categories'

export default function Home() {
  const [categorySelected, setCategorySelected] = useState('')

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const response = await getCategories()
        setCategorySelected(response[0].id)

        return response
      } catch {
        Alert.alert('Categorias', 'Não foi possível carregar as categorias')
      }
    },
  })

  return (
    <View style={{ flex: 1 }}>
      <Categories
        categories={categories ?? []}
        selected={categorySelected}
        onSelect={setCategorySelected}
      />
    </View>
  )
}
