import React from 'react'
<<<<<<< HEAD
import {Text, View, StyleSheet, Dimensions} from 'react-native'
=======
import {Text, View, StyleSheet} from 'react-native'
>>>>>>> 4a08513da68b8ecf91ecd96e5c28a3567b488972

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
<<<<<<< HEAD
        height: Dimensions.get('screen').height*0.06,
=======
        height: 'auto',
>>>>>>> 4a08513da68b8ecf91ecd96e5c28a3567b488972
        textAlign: 'center',
        backgroundColor: '#463e7e',
        textAlignVertical: 'middle'
    },
    headerText:{
        color: 'white',
        fontSize: 17,
        padding: 5,
<<<<<<< HEAD
        textAlign: 'center'
=======
>>>>>>> 4a08513da68b8ecf91ecd96e5c28a3567b488972
    }
})