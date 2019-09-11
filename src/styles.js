import styled from 'styled-components/native'

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`
export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  }
})``

export const Welcome = styled.View`
  padding-top: 15;
  padding-bottom: 15;
`

export const WelcomeIntro = styled.Text`
  font-weight: bold;
  font-size: 32;
  color: #222
`

export const WelcomeName = styled.Text`
  font-weight: bold;
  font-size: 26;
  color: #222
`

export const TouchButton = styled.TouchableOpacity`
  background-color: #222;
  padding: 10px 15px;
  border-radius: 4px;
`

export const TouchButtonText = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 18;
  color: #fff;
`
