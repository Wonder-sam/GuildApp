import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Settings=()=>{
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
            </View>
        </View>
    )
}
export default Settings

const styles= StyleSheet.create({
    header:{
        height: 'auto',
        textAlign: 'center',
        backgroundColor: '#463e7e',
        textAlignVertical: "middle"
    },
    headerText:{
        color: 'white',
        fontSize: 17,
        padding: 5,
    }
})