import React from 'react'
import { Button, View, Text } from 'react-native'

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <View style={{ margin: 15 }}>
      <Text>
        itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
      </Text>
    </View>
    <View style={{ margin: 15 }}>
      <Text>
        userName: {JSON.stringify(navigation.getParam('userName'))}
      </Text>
    </View>
    <View style={{ margin: 15 }}>
      <Text>
        otherParam:
        {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
      </Text>
    </View>
    <View style={{ margin: 15 }}>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
        })}
      />
    </View>
    <View style={{ margin: 15 }}>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
    <View style={{ margin: 15 }}>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  </View>
)

DetailsScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('otherParam', 'A Nested Details Screen'),
})

export default DetailsScreen
