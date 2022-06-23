import React from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'

const Chat=()=>{
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Chats</Text>
            </View>
        </View>
    )
}
export default Chat

const styles= StyleSheet.create({
    header:{
        height: Dimensions.get('screen').height*0.06,
        textAlign: 'center',
        backgroundColor: '#463e7e',
        textAlignVertical: 'middle'
    },
    headerText:{
        color: 'white',
        fontSize: 17,
        padding: 5,
        textAlign: 'center'
    }
})