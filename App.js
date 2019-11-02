import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'

import { capitalizeFirstLetter } from './src/util'

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage,
    navigationOptions: () => {
      return (
        {
          title: 'People'
        }
      )
    }
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const personFirstName = capitalizeFirstLetter(navigation.state.params.person.name.first)
      const personLastName = capitalizeFirstLetter(navigation.state.params.person.name.last)
      const personName = personLastName + ', ' + personFirstName
      return (
        {
          title: personName,
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
          }
        }
      )
    }
  }
}, {
  defaultNavigationOptions:
  {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center'
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer