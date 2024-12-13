import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Alert, View } from 'react-native'

import { Categories } from '@/components/categories'
import { Places } from '@/components/places'
import { getCategories } from '@/http/get-categories'
import { getMarketsByCategory } from '@/http/get-markets-by-category'
import { colors } from '@/styles/colors'

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
        Alert.alert('Categorias', 'Não foi possível carregar as categorias.')
      }
    },
  })

  const { data: markets } = useQuery({
    queryKey: ['markets', categorySelected],
    queryFn: async () => {
      try {
        if (!categorySelected) {
          return []
        }

        return await getMarketsByCategory(categorySelected)
      } catch {
        Alert.alert('Locais', 'Não foi possível carregar os locais.')
      }
    },
  })

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[300] }}>
      <Categories
        categories={categories ?? []}
        selected={categorySelected}
        onSelect={setCategorySelected}
      />

      <Places places={markets ?? []} />
    </View>
  )
}
