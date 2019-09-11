import React from 'react'
import { StatusBar } from 'react-native'
import {
  SafeArea,
  ScrollContainer,
  Welcome,
  WelcomeIntro,
  WelcomeName,
  TouchButton,
  TouchButtonText,
} from '~/styles'

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeArea>
      <ScrollContainer>
        <Welcome>
          <WelcomeIntro>Welcome,</WelcomeIntro>
          <WelcomeName>Marcelo Freire</WelcomeName>
        </Welcome>
        <TouchButton>
          <TouchButtonText>Click me</TouchButtonText>
        </TouchButton>
      </ScrollContainer>
    </SafeArea>
  </>
)

export default App
