import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { router } from 'expo-router'
import { useRef } from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'

import { Market } from '@/http/get-markets-by-category'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

import { Place } from './place'

interface PlacesProps {
  places: Market[]
}

export function Places({ places }: PlacesProps) {
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = {
    min: 208,
    max: dimensions.height - 128,
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableDynamicSizing={false}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={places}
        keyExtractor={(place) => place.id}
        renderItem={({ item }) => (
          <Place
            place={item}
            onPress={() => router.navigate(`/market/${item.id}`)}
          />
        )}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
      />
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
  },

  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },

  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300],
  },

  title: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginBottom: 16,
  },
})
