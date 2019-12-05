// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native'
import { AsyncStorage } from 'react-native'

/* eslint-disable */
if (__DEV__) {
}
export const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Instagram RN'
  })
  .useReactNative()
  .connect()
/* eslint-enable */
