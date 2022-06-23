import React,{ useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Animated, ImageBackground} from 'react-native'
import { FadeInView, MoveInView } from '../utils/animations';
export default function Welcome({navigation}){
	const motto = "Service All The Way!"
	const [submotto, setMotto] = useState(" ")
	const [count, setCount] = useState(1)
	const [first, setFirst] = useState(true)
	useEffect(()=>{
		function readMotto(){
			if(submotto!=motto){
				setCount(count+1)
				setMotto(motto.substring(0,count));
			}
		}

		if(first){
			setTimeout(readMotto,1000)
			setFirst(false)
		}
		else
			setTimeout(readMotto, 100);

	}, [submotto, count])
	
    return(
		<ImageBackground source={require('./../assets/backg.png')} resizeMode="cover" style={{flex: 1}}>
			<View style={styles.container}>
				<FadeInView>
            		<Image source={require("./../assets/YPG.png")} style={styles.image}/>
				</FadeInView>

				<View>
					<Text style={styles.motto}>{submotto}</Text>
				</View>
				<MoveInView>
					<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
						<Text style={styles.join}>JOIN</Text>
					</TouchableOpacity>
				</MoveInView>
			
        	</View>
		</ImageBackground>
        
    )
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image:{
		position: 'relative',
		width: 180,
		height: 220
	},
	motto:{
		marginTop: 10,
		fontWeight: 'bold',
		fontSize: 14,
		fontStyle: 'italic',
		color: '#463e7e',
		 //ffd016,
	},
	button:{
		backgroundColor:'#ffd016',
		borderRadius: 10,
		width: 150,
		height: 30,
		textAlign: 'center',
		alignItems: 'center',
		marginTop: 20,
		justifyContent: 'center',
	},
	join:{
		fontSize: 16,
		alignSelf: 'center',
		color: '#463e7e',
		fontWeight: 'bold',
	}
})