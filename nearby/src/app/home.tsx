import { useQuery } from '@tanstack/react-query'
import * as Location from 'expo-location'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'

import locationMark from '@/assets/location.png'
import pinMark from '@/assets/pin.png'
import { Categories } from '@/components/categories'
import { Places } from '@/components/places'
import { getCategories } from '@/http/get-categories'
import { getMarketsByCategory } from '@/http/get-markets-by-category'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
}

export default function Home() {
  const [categorySelected, setCategorySelected] = useState('')

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const response = await getCategories()
        setCategorySelected(response[0].id)

        return response
      } catch {
        Alert.alert('Categorias', 'Não foi possível carregar as categorias.')
      }
    },
  })

  const { data: markets } = useQuery({
    queryKey: ['markets', categorySelected],
    queryFn: async () => {
      try {
        if (!categorySelected) {
          return []
        }

        return await getMarketsByCategory(categorySelected)
      } catch {
        Alert.alert('Locais', 'Não foi possível carregar os locais.')
      }
    },
  })

  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()

      if (!granted) {
        return
      }

      const location = await Location.getCurrentPositionAsync()
      console.log(location)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[300] }}>
      <StatusBar style="light" />

      <Categories
        categories={categories ?? []}
        selected={categorySelected}
        onSelect={setCategorySelected}
      />

      <MapView
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ flex: 1 }}
      >
        <Marker
          identifier="current"
          coordinate={currentLocation}
          image={locationMark}
        />

        {markets?.map((market) => {
          return (
            <Marker
              key={market.id}
              identifier={market.id}
              image={pinMark}
              coordinate={{
                latitude: market.latitude,
                longitude: market.longitude,
              }}
            >
              <Callout onPress={() => router.navigate(`/market/${market.id}`)}>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.gray[600],
                      fontFamily: fontFamily.medium,
                    }}
                  >
                    {market.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.gray[600],
                      fontFamily: fontFamily.regular,
                    }}
                  >
                    {market.address}
                  </Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <Places places={markets ?? []} />
    </View>
  )
}
