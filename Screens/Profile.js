import React from 'react'
import {Text, View, StyleSheet, ScrollView, TextInput, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Profile=()=>{
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <ScrollView>
                <View style={styles.profilePhoto}>
                    <Ionicons name='person-circle-sharp' size={100} color="grey" />
                    <Text>Edit Photo</Text>
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.fieldLabel}>Name</Text>
                    <View style={styles.fieldView}>
                        <TextInput style ={styles.field}/>
                        <TextInput style ={styles.field}/>
                    </View>

                    <Text style={styles.fieldLabel}>Username</Text>
                    <View style={styles.fieldView}>
                        <TextInput style ={styles.field}/>
                    </View>

                    <Text style={styles.fieldLabel}>Group</Text>
                    <View style={styles.fieldView}>
                        <TextInput style ={styles.field}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Profile

const styles= StyleSheet.create({
    header:{
        height: Dimensions.get('screen').height*0.06,
        textAlign: 'center',
        backgroundColor: '#463e7e',
        textAlignVertical: "middle"
    },
    headerText:{
        color: 'white',
        fontSize: 17,
        padding: 5,
    },
    profilePhoto:{
        alignItems: 'center'
    },
    userInfo:{
        marginLeft: 10,
        marginRight: 10
    },
    fieldView:{
        backgroundColor: '#463e7e',
        borderRadius: 5,
    },
    fieldLabel:{
        marginLeft: 5,
    },
    field:{
        height: 30,
        backgroundColor: '#463e7e',
        borderColor: 'grey',
        borderBottomWidth: 1,
        borderRadius: 5,
        paddingLeft: 5,
        color: 'white'
    }
})