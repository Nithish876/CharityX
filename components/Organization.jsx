import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Organization = ({data}) => {
  return (
    <TouchableOpacity 
  className={'mr-6  justify-center h-24 w-24 bg-emerald-500 items-center  rounded-full '}> 
      <Image
      source={data.image}
      className={"w-20 h-20  rounded-full"}
      />
    </TouchableOpacity>
  )
}

export default Organization