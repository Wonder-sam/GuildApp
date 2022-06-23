import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from './Screens/Welcome.js'
import Login from './Screens/Login.js'
import BottomTabs from './Screens/BottomTabs.js'

const Stack = createNativeStackNavigator();

export default function App() {
	return (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name= "BottomTabs" component={BottomTabs} />
		</Stack.Navigator>
	</NavigationContainer>
  );
}