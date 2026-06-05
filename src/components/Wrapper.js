


import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import BG from '../assets/images/bg.jpeg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { deviceHeight, deviceWidth } from '../constants/Scaling';

const Wrapper = ({children,style}) => {
  return (
    <ImageBackground source={BG} resizeMode='cover' style={styles.container}>
      <SafeAreaView style={[styles.SafeAreaView, style]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
SafeAreaView: {
    height: deviceHeight,
    width: deviceWidth,
    justifyContent:'center',
    alignItems:'center',
},
});

export default Wrapper