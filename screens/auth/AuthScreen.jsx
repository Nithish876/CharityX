import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'

const AuthScreen = () => {
  const nav= useNavigation()
  const[ActiveTab,setActiveTab] =useState(0)
  return (
   <View className={'flex-1 justify-center items-center'}> 
            <View className={"w-full h-[50%] absolute top-[-25%]  rounded-full bg-pink-500"}>
                 
            </View>

            {/* Inpus and States */}
 <View className={"w-[50%]  flex-row  justify-between   max-w-[250] rounded-full "}>
  <TouchableOpacity onPress={()=>setActiveTab(0)} className={ `rounded-full   ${ActiveTab==0 ? ' bg-gray-400 ':''}`}>
<Text className={`text-3xl p-4 text-gray-500 ${ActiveTab==0?" text-white ":''}`}>Sign up</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>setActiveTab(1)}  className={ `rounded-full ${ActiveTab==1 ? ' bg-gray-400 ':''}`}>
<Text className={`text-3xl p-4 text-gray-500 ${ActiveTab==1?" text-white ":''}`}>Login</Text>
  </TouchableOpacity>
 </View>


<View className={"w-[85%] h-80  mt-4 bg-emerald-600 rounded-xl "}>
  {
    ActiveTab==0?
    // sign up screen 
    <View className={""}>

      </View>
    :
    // logiin screen
    <View className={''}>

      </View>
  }
</View> 
 
   </View>
  )
}

export default AuthScreen