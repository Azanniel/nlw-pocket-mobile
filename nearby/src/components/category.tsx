import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { categoriesIcons } from '@/utils/categories-icons'

interface CategoryProps extends PressableProps {
  name: string
  iconId: string
  isSelected?: boolean
}

export function Category({
  name,
  iconId,
  isSelected = false,
  ...props
}: CategoryProps) {
  const Icon = categoriesIcons[iconId]

  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...props}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>
        {name}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 10,
  },

  containerSelected: {
    backgroundColor: colors.green.base,
    borderColor: colors.green.base,
  },

  name: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },

  nameSelected: {
    color: colors.gray[100],
  },
})
