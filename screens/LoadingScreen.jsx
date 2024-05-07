import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
    return (
        <SafeAreaView className={"flex-1 justify-center items-center "}>
            <ActivityIndicator color={"green"} size={30} />
            <Text className={"font-[poppins] mt-2 text-xl"}>Getting Things Done...</Text>
        </SafeAreaView>
    )
}

export default LoadingScreen