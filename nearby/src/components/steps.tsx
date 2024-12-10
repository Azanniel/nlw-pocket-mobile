import { StyleSheet, Text, View } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { welcomeSteps } from '@/utils/welcome-steps'

import { Step } from './step'

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>

      {welcomeSteps.map((step) => (
        <Step
          key={step.id}
          icon={step.icon}
          title={step.title}
          description={step.description}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },

  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
})
