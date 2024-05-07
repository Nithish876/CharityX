 
import React  from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostInfo from '../screens/app/PostInfo'; 
import TabRoutes from './TabRoutes';
const Stack = createNativeStackNavigator()
const AppRoute = () => {
  return ( 
    <Stack.Navigator>
      <Stack.Screen name='Home' component={TabRoutes} options={{headerShown:false}}/>
      <Stack.Screen name='postinfo' component={PostInfo} options={{headerShown:false}}/>
    </Stack.Navigator>
 
  )
}

export default AppRoute