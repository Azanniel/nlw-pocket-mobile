import { TicketIcon } from 'lucide-react-native'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'

import { Market } from '@/http/get-markets-by-category'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

interface PlaceProps extends TouchableOpacityProps {
  place: Market
}

export function Place({ place, ...props }: PlaceProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...props}>
      <Image style={styles.image} source={{ uri: place.cover }} alt="Cover" />

      <View style={styles.content}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>

        <View style={styles.footer}>
          <TicketIcon size={16} color={colors.red.base} />
          <Text style={styles.tickets}>{place.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },

  image: {
    height: 104,
    width: 116,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },

  content: {
    flex: 1,
    gap: 4,
  },

  name: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
  },

  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },

  footer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },

  tickets: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
  },
})
