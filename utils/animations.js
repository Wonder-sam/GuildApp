import React,{useRef, useEffect} from 'react';
import { Animated} from 'react-native'

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

const FadeInLeftView = (props)=>{
    const fadeLeftAnim =  useRef (new Animated.Value(0)).current
	const moveLeft =  useRef (new Animated.Value(50)).current
	useEffect(()=>{
		Animated.timing(
			fadeLeftAnim,
			{
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,			
			}
		).start();
	}, [fadeLeftAnim])

	useEffect(()=>{
		Animated.timing(
			moveLeft,{
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			},
		).start();
	}, [moveLeft])

	return (
		<Animated.View style={{opacity:fadeLeftAnim, left:moveLeft}}>{props.children}</Animated.View>
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

export {MoveInView, FadeInView, FadeInLeftView}