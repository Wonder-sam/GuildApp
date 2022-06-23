import React, {useState, useRef} from 'react'
import { StatusBar } from 'expo-status-bar';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Keyboard} from 'react-native'
import {Input} from 'react-native-elements'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function Login({navigation}) {
	const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const passwordRef = useRef();
    const usernameHandler=(txt)=>{
        setUsername(txt)
    }
    const passwordHandler=(txt)=>{
        setPassword(txt)
    }
  return (
    <View style ={styles.container}>
        <StatusBar backgroundColor = "#b3e6ff"  barStyle = "dark-content"   />  
            <Text style={{fontWeight: "bold", fontSize: 20}}>Login</Text>
            <Input
            style={{borderBottomColor: "#ffd016"}}
            containerStyle={styles.field}
            placeholder =" Username"
            value={username}
            leftIcon ={<FontAwesome5 name="user-alt" size={24} color="black" />}
            textContentType ={"username"}
            returnKeyType="next"
            onSubmitEditing={()=>passwordRef.current.focus()}
            onChangeText ={usernameHandler}
            />

             <Input
            placeholder =" Password"
            value={password}
            containerStyle={styles.field}
            leftIcon={<Ionicons name="key" size={24} color="black" />}
            secureTextEntry={true}
            textContentType ={"password"}
            ref ={passwordRef}
            returnKeyType="go"
            onSubmitEditing={()=>navigation.navigate("BottomTabs")}
            onChangeText ={passwordHandler}
            />
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("BottomTabs")}>
                <Text style={{color: "white"}}>Login</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    topImage:{
        height: Dimensions.get("screen").height
    },
    field:{
        margin: 15,
        height: 45,
        width: 300,
        // borderColor: '#ffd016',
        // borderWidth: 1,
        // borderRadius: 10
    },
    btn:{
        backgroundColor: '#ffd016',
        padding: 10,
        margin: 15,
        height: 40,
        width: 200,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        
    }
});
