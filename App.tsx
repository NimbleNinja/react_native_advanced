import './gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigation } from './navigation/RootNavigation'
import { Platform, UIManager } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  )
}
