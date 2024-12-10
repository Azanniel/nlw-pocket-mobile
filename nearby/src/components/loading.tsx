import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { colors } from '@/styles/colors'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.green.base} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray[100],
  },
})
