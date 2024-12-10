import { Image, StyleSheet, Text, View } from 'react-native'

import logo from '@/assets/logo.png'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

export function Welcome() {
  return (
    <View>
      <Image style={styles.logo} source={logo} alt="Logo" />

      <Text style={styles.title}>Boas vindas ao Nearby!</Text>
      <Text style={styles.subtitle}>
        Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },

  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },

  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
})
