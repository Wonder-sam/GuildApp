import React from 'react'
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native'

export default function Announcement(){
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Announcemnts</Text>
            </View>
            <ScrollView>
                <View>
                    <Text>Title</Text>
                    <Text>
                        This is suppose to be a long message that has nbeen truncated but for some 
                        reason, the full length of the text is showing.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        height: Dimensions.get('screen').height*0.06,
        textAlign: 'center',
        backgroundColor: '#463e7e',
        textAlignVertical: 'middle',
    },
    headerText:{
        color: 'white',
        fontSize: 17,
        padding: 5,
    }
})