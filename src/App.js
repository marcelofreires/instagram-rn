import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import store from '~/store'
import Routes from '~/routes'

import {
  SafeArea,
  ScrollContainer,
  Welcome,
  WelcomeIntro,
  WelcomeName,
} from '~/styles'

import Test from '~/components/Test'

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Routes />
  </Provider>
)

export default App
