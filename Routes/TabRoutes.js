import Home from '../screens/app/Home';
import { Feather } from '@expo/vector-icons';
import WishList from '../screens/app/WishList';
import Search from '../screens/app/Search';
import Profile from '../screens/app/Profile';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tabs = createBottomTabNavigator()
const TabRoutes = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen options={{ headerShown: false, tabBarLabelStyle: { display: "none" }, tabBarIcon: ({ focused }) => { return <Feather name="home" size={24} color={focused ? "rgb(5 ,150 ,105)" : 'gray'} /> } }} name='Home' component={Home} />
            <Tabs.Screen options={{ headerShown: false, tabBarLabelStyle: { display: "none" }, tabBarIcon: ({ focused }) => { return <Feather name="search" size={24} color={focused ? "rgb(5 ,150 ,105)" : 'gray'} /> } }} name='Search' component={Search} />
            <Tabs.Screen options={{ headerShown: false, tabBarLabelStyle: { display: "none" }, tabBarIcon: ({ focused }) => { return <Feather name="bookmark" size={24} color={focused ? "rgb(5 ,150 ,105)" : 'gray'} /> } }} name='Whishlist' component={WishList} />
            <Tabs.Screen options={{ headerShown: false, tabBarLabelStyle: { display: "none" }, tabBarIcon: ({ focused }) => { return <Feather name="user" size={24} color={focused ? "rgb(5 ,150 ,105)" : 'gray'} /> } }} name='Profile' component={Profile} />
        </Tabs.Navigator>
    )
}

export default TabRoutes