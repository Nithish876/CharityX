import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Post = ({ data }) => {
  const nav = useNavigation()
  function AddToWishList(data){
      
  }
  return (
    <Pressable style={{elevation:2}} 
    onPress={()=>{
nav.navigate("postinfo",{data});
    }}
    className={"rounded-2xl  bg-white mr-4 w-80 h-80 "}>
      <View className={"shadow-xl "}>
      <TouchableOpacity
      onPress={()=>{
        AddToWishList(data)
      }}
        className={"bg-gray-50 opacity-80 absolute top-1 z-10 p-4 rounded-full right-1 "}>
                <Feather name='heart' size={26} color={"green"}/>
            </TouchableOpacity>
      <Image
        source={data.image}
        className={" rounded-t-xl  w-80 h-40 "}
        resizeMode='cover'
      />
      <View className={"px-4 py-2"}>
        <Text className={"text-2xl  font-[poppins] "}>{data.title?.slice(0, 40)}...</Text>
        <View className=" py-2 ">
          <Text className={'text font-[poppins] '}>
            Founder: {data.Founder}
          </Text>
          <Text className={'text font-[poppins]'}>
            Goal: ${data.Goal}
          </Text>
        </View>
        <Text className={" font-[poppins] absolute bottom-0 right-2"}>30 days ago</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default Post