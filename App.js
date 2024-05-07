import React, { createContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native' 
import AuthScreen from './screens/auth/AuthScreen'
import Home from './screens/app/Home'
import AppRoute from './Routes/AppRoute'
import { useFonts } from 'expo-font'
import { ActivityIndicator } from 'react-native'
 

const Stack = createNativeStackNavigator()
export const AppCtx  = createContext()
const App = () => {
  
  const [isAuth, setisAuth] = useState(true)

  const [fontsLoaded, fontError] = useFonts({
    'poppins': require('./assets/fonts/popinsbold.ttf'),
  });

  if(!fontsLoaded)
{
  return <ActivityIndicator size={28} color={"green"}/>
}
  
  return (
    
    <NavigationContainer>
      <AppCtx.Provider value={[]}>
      {
        isAuth ? <AppRoute /> : < AuthScreen />
      }
      </AppCtx.Provider>
    </NavigationContainer>

  )
}

export default App