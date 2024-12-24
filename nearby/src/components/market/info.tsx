import { LucideProps } from 'lucide-react-native'
import { ComponentType } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

interface InfoProps {
  description: string
  icon: ComponentType<LucideProps>
}

export function Info({ description, icon: Icon }: InfoProps) {
  return (
    <View style={styles.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    lineHeight: 22.4,
    flex: 1,
  },
})
