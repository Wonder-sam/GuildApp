import React from 'react'
import {View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
<<<<<<< HEAD
import { Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons'
import Announcement from './Announcements.js'
import Chat from './Chat.js'
import Dashboard from './Dashboard.js'
import Profile from './Profile'
=======
import { Ionicons } from '@expo/vector-icons'
import Announcement from './Announcements.js'
import Settings from './Settings.js'
import Chat from './Chat.js'
import Profile from './Profile.js'
>>>>>>> 4a08513da68b8ecf91ecd96e5c28a3567b488972

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
<<<<<<< HEAD
    else if(route.name=="Dashboard"){
        iconName="person-circle-sharp"
        size=24
    }
    return <View>{route.name=="Dashboard"? <MaterialCommunityIcons name="view-dashboard-outline" size={24} color={color} />:
    <Ionicons  name={iconName} size={size} color={color} />}</View>
=======
    else if(route.name=="Profile"){
        iconName="person-circle-sharp"
        size=24
    }
    return <View><Ionicons  name={iconName} size={size} color={color} /></View>
>>>>>>> 4a08513da68b8ecf91ecd96e5c28a3567b488972
},

tabBarActiveTintColor: '#ffd016',
tabBarInactiveTintColor: 'white',
})
export default function BottomTabs(){
    return(
<<<<<<< HEAD
        <Tab.Navigator initialRouteName="Dashboard" backBehaviour="history" screenOptions={tabs}>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Announcement" component={Announcement} />
            <Tab.Screen name="Settings" component={Profile} />
=======
        <Tab.Navigator initialRouteName="Settings" backBehaviour="history" screenOptions={tabs}>
            <Tab.Screen name="Announcement" component={Announcement} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Profile" component={Profile} />
>>>>>>> 4a08513da68b8ecf91ecd96e5c28a3567b488972
        </Tab.Navigator>
    )
}