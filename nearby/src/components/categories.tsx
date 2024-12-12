import { FlatList, StyleSheet } from 'react-native'

import { Category as CategoryData } from '@/http/get-categories'

import { Category } from './category'

interface CategoriesProps {
  categories: CategoryData[]
  selected: string
  onSelect: (categoryId: string) => void
}

export function Categories({
  categories,
  selected,
  onSelect,
}: CategoriesProps) {
  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={(category) => category.id}
      renderItem={({ item }) => {
        return (
          <Category
            name={item.name}
            iconId={item.id}
            isSelected={item.id === selected}
            onPress={() => onSelect(item.id)}
          />
        )
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 36,
    position: 'absolute',
    zIndex: 1,
    top: 64,
  },

  content: {
    gap: 8,
    paddingHorizontal: 24,
  },
})
