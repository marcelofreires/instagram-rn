import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import { reactotron } from '~/config/ReactotronConfig'
import store from '~/store'

import {
  SafeArea,
  ScrollContainer,
  Welcome,
  WelcomeIntro,
  WelcomeName,
} from '~/styles'

import Test from '~/components/Test'

const App = () => {
  reactotron.log('Test reactotron log')

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeArea>
        <ScrollContainer>
          <Welcome>
            <WelcomeIntro>Welcome,</WelcomeIntro>
            <WelcomeName>Marcelo Freire</WelcomeName>
          </Welcome>
          <Test />
        </ScrollContainer>
      </SafeArea>
    </Provider>
  )
}

export default App
