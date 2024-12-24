import { TicketIcon } from 'lucide-react-native'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

interface CouponProps {
  code: string
}

export function Coupon({ code }: CouponProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilize esse cupom</Text>

      <View style={styles.content}>
        <TicketIcon size={24} color={colors.green.light} />
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },

  title: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
    marginBottom: 12,
  },

  content: {
    flexDirection: 'row',
    backgroundColor: colors.green.soft,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    gap: 10,
  },

  code: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
    textTransform: 'uppercase',
  },
})
