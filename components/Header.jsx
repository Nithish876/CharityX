import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View className={"mt-2 "}>
            <View className={"p-4  flex-row  justify-between items-center"}>
                <View className={""}>
                    <Text className={'text-3xl font-[poppins] font-bold '}>Hi Nithish 👋</Text>
                    <Text className={"text-gray-400 font-[poppins]"}>Lets Help Each Other!</Text>
                </View>
                <Pressable style={{ elevation: 2 }} className={'shadow-xl rounded-full bg-emerald-600 p-1 shadow-black'}>
                    <Image
                           
                        source={require("../assets/ElonMusk.jpg")}
                        className={"h-20 w-20 rounded-full bg-gray-300"}
                    />
                </Pressable>
            </View>

        </View>
    )
}

export default Header