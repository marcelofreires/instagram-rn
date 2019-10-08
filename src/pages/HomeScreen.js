import React from 'react'
import { Button, View, Text } from 'react-native'

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <View style={{ margin: 15 }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
          userName: 'Marcelo',
          pageTitle: 'Página de detalhes'
        })}
      />
    </View>
  </View>
)

HomeScreen.navigationOptions = {
  title: 'Home',
}

export default HomeScreen
