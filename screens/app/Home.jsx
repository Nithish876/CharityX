import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { Feather } from '@expo/vector-icons';
import { CategoriesData, Organizations, PostsData } from '../../helpers/Data';
import Categorie from '../../components/Categorie';
import Post from '../../components/Post';
import { StatusBar } from 'expo-status-bar';
import Organization from '../../components/Organization';

const Home = () => {
  return (
    <SafeAreaView className={"flex-1 bg-white mt-2"}>
      <StatusBar style='light' backgroundColor='rgb(5 ,150, 105)' />
      <ScrollView>

        <Header />
        {/* inputs */}
        <View className="bg-gray-300  rounded-lg  flex-row px-2 w-[95%]  items-center justify-start self-center mb-3">
          <Feather name="search" className={""} size={24} color="gray" />
          <TextInput
            className={" rounded-xl text-[16px] flex-1  font-[poppins] px-2 py-4"}
            placeholder='Search To Save Lives!'

          />
          {/* <TouchableOpacity className={'bg-gray-300 justify-center items-center  rounded-xl w-[18%]'}>
            <Feather name="search" className={"m-4 "} size={24} color="black" />

          </TouchableOpacity> */}
        </View>
        {/* Donation Box */}
        <View className={"w-[95%] rounded-xl flex flex-row px-4 mt-2 items-center justify-between  bg-emerald-600 h-40 self-center "}>
          <View className={"gap-2"}>
            <Text className={"text-2xl text-white font-[poppins] max-w-[200]"}>Helping each Other</Text>
            <TouchableOpacity className={"rounded-md w-40  flex justify-center items-center bg-white  "}>
              <Text className={'px-4 py-2 text-emerald-600 font-[poppins] text-lg'}>Donate Now</Text>
            </TouchableOpacity>
          </View>

          <Image
            className={"w-20 h-20  rounded-full"}

            source={require("../../assets/donation-icon.jpg")}
          />
        </View>


        {/* ctegories */}

        <Text className={'px-4 font-[poppins] text-2xl mt-4 mb-2  '}>Categories</Text>
        <View
          className={"flex-row w-full h-26 p-1 flex justify-evenly items-center"}
        // showsHorizontalScrollIndicator={false}
        // className={'px-4 '}
        // style={{
        //   maxHeight: 100
        // }}
        // horizontal
        >

          {
            CategoriesData.map((cat) => {
              return <Categorie title={cat.title} img={cat.img} />
            })
          }

        </View>



        <Text className={'px-4 font-[poppins] text-2xl mt-3 mb-2  '}>Let's Start Sharing</Text>
        {/* Posts */}
        <ScrollView
          className={'px-4'}
          showsHorizontalScrollIndicator={false}
          style={{
            height: 350,
          }}
          horizontal
        >
          {
            PostsData.map((dat) => {
              return <Post data={dat} />
            })
          }


        </ScrollView>

        <Text className={'px-4 font-[poppins] text-2xl mt-3 mb-2  '}>Oragnizations</Text>
        {/* Orgainzations */}
        <ScrollView className={'px-4 '}
          showsHorizontalScrollIndicator={false}
          style={{
            height: 120,
            marginBottom: 10
          }}
          horizontal
        >
          {
            Organizations.map((dat) => {
              return <Organization data={dat} />
            })
          }


        </ScrollView>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home