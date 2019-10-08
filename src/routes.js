import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '~/pages/HomeScreen'
import DetailsScreen from '~/pages/DetailsScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home'
  }
)

const Routes = createAppContainer(AppNavigator)

export default Routes
