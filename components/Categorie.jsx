import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Categorie = ({ title, img }) => {
    return (
        <TouchableOpacity className={'flex flex-col  bg-white justify-center items-center '} >
            
            <View className={"w-16  h-16 rounded-lg justify-center items-center bg-white shadow-lg shadow-emerald-600 "}>
                <Image
                    source={img}
                    className={"w-10 h-10 "}
                />
            </View>
            <Text className={'self-center font-[poppins] mt-1 '}>{title}</Text>
        </TouchableOpacity>

    )
}

export default Categorie