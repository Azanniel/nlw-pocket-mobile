/* eslint-disable camelcase */
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from '@expo-google-fonts/rubik'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { Loading } from '@/components/loading'
import { colors } from '@/styles/colors'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.gray[100] },
        }}
      />

      <StatusBar style="dark" />
    </>
  )
}
