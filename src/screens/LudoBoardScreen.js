import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { deviceHeight, deviceWidth } from '../constants/Scaling';
import Wrapper from '../components/Wrapper';
import { playSound } from '../helpers/SoundUtility';
import menuIcon from '../assets/images/menu.png';
import MenuModal from '../components/MenuModal';
import StartGame from '../assets/images/start.png';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectPlayer1, selectPlayer2, selectPlayer3, selectPlayer4 } from '../redux/reducers/gameSelectors';
import WinModal from '../components/WinModal';
const LudoBoardScreen = () => {

  const player1=useSelector(selectPlayer1);
  const player2=useSelector(selectPlayer2);
  const player3=useSelector(selectPlayer3);
  const player4=useSelector(selectPlayer4);
  const winner = useSelector(state => state.game.winner);
  
  const isFocused= useIsFocused();
  const opacity= useRef(new Animated.Value(1)).current;
  const[menuVisible, setMenuVisible]= useState(false);
  const [showStartImage, setShowStartImage]=useState(false);

  const handleMenuPress= useCallback(() => {
    playSound('ui');
    setMenuVisible(true);
  },[]);

  useEffect(() => {
    if(isFocused){
      setShowStartImage(true);
      const blinkAnimation= Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue:0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          })
        ])
      );
      blinkAnimation.start();
      const timeout= setTimeout(() => {
        blinkAnimation.stop();
        setShowStartImage(false);
      },2500);
      return() => {
        blinkAnimation.stop();
        clearTimeout(timeout);
      };
    }
  },[isFocused]);
  return (
    <Wrapper>
      <TouchableOpacity style={styles.menuIcon} onPress={handleMenuPress}>
       <Image source={menuIcon} style={styles.menuIconImage}/>
      </TouchableOpacity>
    {showStartImage && (
       <Animated.Image
        source={StartGame}
        style={{
          width: deviceWidth * 0.5,
          height: deviceWidth * 0.2,
          position: 'absolute',
          alignSelf: 'center',
          top: '40%',
          opacity: opacity,
        }}
      />
      )}
       {menuVisible && (
          <MenuModal
          onPressHide={() => setMenuVisible(false)}
          visible={menuVisible}
          />
       )}
       {winner != null && <WinModal winner={winner}/>}
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