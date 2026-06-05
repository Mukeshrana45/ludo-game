import { View, Text, Animated, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { deviceHeight,diceWidth} from '../constants/Scaling';
import  Wrapper from '../components/Wrapper';
import Logo from '../assets/images/logo.png';
import { prepareNavigation, resetAndNavigate } from '../helpers/NavigationUtil';

const SplashScreen = () => {
  const [isStop]=useState (false);
  const scale=new Animated.Value(1);

  useEffect(()=>{
    prepareNavigation();
    setTimeout(()=>{
      resetAndNavigate('HomeScreen');
    },1500);
  },[]);
  useEffect(()=>{
    const breathingAnimation= Animated.loop(
      Animated.sequence([
        Animated.timing(scale,{
          toValue: 1.1,
          duration: 30000,
          useNativeDriver:true,
        }),
         Animated.timing(scale,{
          toValue: 1,
          duration: 30000,
          useNativeDriver:true,
        }),
      ]),
    );
    if(!isStop){
      breathingAnimation.start();
    }
    return ()=>{
      breathingAnimation.stop();
    };
  },
 [isStop]);
  return (
    <Wrapper>
      <Animated.View style ={[styles.imageContainer,{transform: [{scale}]}]}>
        <Image source={Logo} style={styles.img}/>
      </Animated.View>
      <ActivityIndicator size="small" color="white" />
    </Wrapper>
  );
};
const styles = StyleSheet.create({
    imageContainer:{
        width:250,
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
});
export default SplashScreen