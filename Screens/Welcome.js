import React,{useRef, useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Animated, ImageBackground} from 'react-native'


const FadeInView = (props)=>{
    const fadeAnim =  useRef (new Animated.Value(0)).current
	const moveUp =  useRef (new Animated.Value(50)).current
	useEffect(()=>{
		Animated.timing(
			fadeAnim,
			{
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,			
			}
		).start();
	}, [fadeAnim])

	useEffect(()=>{
		Animated.timing(
			moveUp,{
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			},
		).start();
	}, [moveUp])

	return (
		<Animated.View style={{opacity:fadeAnim, top:moveUp}}>{props.children}</Animated.View>
	)
}

const MoveInView = (props)=>{
    const moveAnim =  useRef (new Animated.Value(0)).current
	const slideUp =  useRef (new Animated.Value(60)).current
	useEffect(()=>{
		Animated.timing(
			moveAnim,
			{
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,			
			}
		).start();
	}, [moveAnim])

	useEffect(()=>{
		Animated.timing(
			slideUp,{
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			},
		).start();
	}, [slideUp])

	return (
		<Animated.View style={{opacity:moveAnim, top:slideUp}}>{props.children}</Animated.View>
	)
}



export default function Welcome({navigation}){
	const motto = "Service All The Way!"
	const [submotto, setMotto] = useState(" ")
	const [count, setCount] = useState(0)
	useEffect(()=>{
		if(submotto!=motto){
			setCount(count+1)
			setTimeout(setMotto(motto.substring(0,count)), 6000)
		}
	}, [submotto])
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