import React from 'react'
import {View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Announcement from './Announcements.js'
import Settings from './Settings.js'
import Chat from './Chat.js'
import Profile from './Profile.js'

const Tab = createBottomTabNavigator();
const tabs=({route})=>({
    headerShown: false,
    tabBarStyle:{backgroundColor: "#463e7e", borderTopLeftRadius:10, borderTopRightRadius: 10 },
    tabBarIcon:({color,size})=>{
    let iconName;
    if(route.name=="Chat"){
        iconName="chatbubbles-outline"
        size=24
    }
    else if(route.name=="Settings"){
        iconName="settings-outline"
        size=24
    }
    else if(route.name=="Announcement"){
        iconName="megaphone-outline"
        size=24
    }
    else if(route.name=="Profile"){
        iconName="person-circle-sharp"
        size=24
    }
    return <View><Ionicons  name={iconName} size={size} color={color} /></View>
},

tabBarActiveTintColor: '#ffd016',
tabBarInactiveTintColor: 'white',
})
export default function BottomTabs(){
    return(
        <Tab.Navigator initialRouteName="Settings" backBehaviour="history" screenOptions={tabs}>
            <Tab.Screen name="Announcement" component={Announcement} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}