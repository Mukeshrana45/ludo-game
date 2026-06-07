import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { deviceHeight, deviceWidth } from '../constants/Scaling';
import Wrapper from '../components/Wrapper';
import { playSound } from '../helpers/SoundUtility';
import menuIcon from '../assets/images/menu.png';

const LudoBoardScreen = () => {
  const[menuVisible, setMenuVisible]= useState(false);

  const handleMenuPress= useCallback(() => {
    playSound('ui');
    setMenuVisible(true);
  },[]);
  return (
    <Wrapper>
      <TouchableOpacity style={styles.menuIcon} onPress={handleMenuPress}>
       <Image source={menuIcon} style={styles.menuIconImage}/>
      </TouchableOpacity>
    </Wrapper>
  );
};
const styles= StyleSheet.create({
  container:{
    alignSelf: 'center',
    justifyContent: 'center',
    height: deviceHeight* 0.5,
    width: deviceWidth,
  },
  ludoBoard: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    padding: 10,
  },
  menuIcon: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  menuIconImage:{
    width: 30,
    height: 30,
  },

});
export default LudoBoardScreen