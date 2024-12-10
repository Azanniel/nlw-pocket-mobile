import { IconProps } from '@tabler/icons-react-native'
import { ComponentType } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

interface StepProps {
  icon?: ComponentType<IconProps>
  title: string
  description: string
}

export function Step({ icon: Icon, title, description }: StepProps) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={24} color={colors.green.base} />}

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
  },

  details: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
  },

  subtitle: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 4,
  },
})
