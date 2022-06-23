import React from 'react'
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native'
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons'
import { FadeInView, FadeInLeftView } from '../utils/animations';

const Dashboard=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="list" color="white" size={30} />
                <Text style={styles.headerText}>Dashboard</Text>
            </View>
            <FadeInLeftView><View style={styles.userbox}>
                <View style={styles.usercircle}>
                    <Image style ={styles.userimage} source={require("./../assets/gojo.jpg")}/>
                </View>
                <View style={styles.userdetails}>
                    <View style={styles.userdetail}>
                        <Text style={{fontWeight: 'bold',fontSize: 16}}>Name: </Text>
                        <Text style={{fontSize: 16}}> Samuel Sowah Nai</Text>
                    </View>
                    <View style={styles.userdetail}>
                        <Text style={{fontWeight: 'bold',fontSize: 16}}>Group: </Text>
                        <Text style={{fontSize: 16}}>Great Alpha</Text>
                    </View>
                    <View style={styles.userdetail}>
                        <Text style={{fontWeight: 'bold',fontSize: 16}}>Committee: </Text>
                        <Text style={{fontSize: 16}}>Education</Text>
                    </View>
                </View>
            </View></FadeInLeftView>
            <View style={styles.shadowbar}></View>
            <FadeInView><View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                <View style={styles.dashboarditem}>
                    <MaterialCommunityIcons name="book-open-page-variant" size={40} color="white" />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Hymnal</Text>
                </View>
                <View style={styles.dashboarditem}>
                    <MaterialCommunityIcons name="calendar" size={40} color="white" />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Events</Text>
                </View>
                <View style={styles.dashboarditem}>
                    <MaterialCommunityIcons name="account-cash" size={40} color="white" />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Account</Text>
                </View>
                <View style={styles.dashboarditem}>
                    <MaterialCommunityIcons name="offer" size={40} color="white" />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Donations</Text>
                </View>
                <View style={styles.dashboarditem}>
                    <MaterialCommunityIcons name="book-open-page-variant" size={40} color="white" />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Hymnal</Text>
                </View>
                <View style={styles.dashboarditem}>
                    <FontAwesome name="hand-grab-o" size={40} color="white" />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Anthem</Text>
                </View>
            </View>
            </FadeInView>
        </View>
    )
}
export default Dashboard

const styles= StyleSheet.create({
    container:{
        alignItems: 'center',
        textAlign: 'center'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get('screen').height*0.065,
        width: Dimensions.get('screen').width,
        textAlign: 'center',
        backgroundColor: '#463e7e',
        textAlignVertical: "middle",
    },
    headerText:{
        color: 'white',
        fontSize: 17,
        padding: 5,
        textAlignVertical: 'middle'
    },
    userbox:{
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    usercircle:{
        height: Dimensions.get('screen').width*0.3,
        width: Dimensions.get('screen').width*0.3,
        backgroundColor: '#463e7e',
        borderRadius: 100,
        overflow: 'hidden'
    },
    userimage:{
        flex:  1,
    },
    userdetails:{
        alignItems: 'stretch',
        marginLeft: 5,
        textAlign: 'center'
    },
    userdetail:{
        flexDirection: 'row',
        marginVertical: 5,
    },
    shadowbar:{
        backgroundColor: '#463e7e',
        height: 3,
        width: Dimensions.get('screen').width*0.6,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 100,
        shadowColor: 'black',
        shadowOffset: 20,
        shadowOpacity: 0.5,
    },
    dashboarditem:{
        width: Dimensions.get('screen').width*0.4,
        height: Dimensions.get('screen').height*0.18,
        backgroundColor: 'orange',
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})