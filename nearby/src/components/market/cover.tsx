import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { ImageBackground, StyleSheet, View } from 'react-native'

import { colors } from '@/styles/colors'

import { Button } from '../button'

interface CoverProps {
  uri: string
}

export function Cover({ uri }: CoverProps) {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={styles.button} onPress={router.back}>
          <ArrowLeft size={24} color={colors.gray[100]} />
        </Button>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 232,
    marginBottom: -32,
    backgroundColor: colors.gray[200],
  },

  header: {
    padding: 24,
    paddingTop: 46,
  },

  button: {
    height: 40,
    width: 40,
  },
})
