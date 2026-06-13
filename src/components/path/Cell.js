import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { Colors } from '../../constants/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentPositions } from '../../redux/reducers/gameSelectors'
import { ArrowSpot, SafeSpots, StarSpots } from '../../helpers/PlotData'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize'

const Cell = ({id, color}) => {

    const dispatch= useDispatch();
    const plottedPieces= useSelector(selectCurrentPositions);
    const isSafeSpot= useMemo(() => SafeSpots.includes(id), [id]);
    const isStarSpot= useMemo(() => StarSpots.includes(id), [id]);
    const isArrowSpot= useMemo(() => ArrowSpot.includes(id), [id]);

    const piecesAtPosition = useMemo(
        ()=> plottedPieces.filter(item => item.pos === id),
        [plottedPieces, id],
    );
    const handlePress = useCallback(
        (playerNo, pieceId) => {}, [dispatch, id])
    
    

  return (
    <View style={[
        styles.container,
        {
            backgroundColor: isSafeSpot ? color : 'white',
        },
    ]} >
        {isStarSpot && <Ionicons name="star" size={20} color="grey"/>}
        {isArrowSpot && (
            <Ionicons name='arrow-forward-outline'
              style={{
                transform: [
                    {
                        rotate:
                        id=== 38
                        ? '180deg'
                        : id === 25
                        ? '90deg'
                        : id===51
                        ? '-90deg'
                        : '0deg',
                        

                    }
                ],
            }}
        size={RFValue(12)}
        color={color}
        />
        )}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        borderWidth: 0.4,
        borderColor: Colors.borderColor,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pieceContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: 99,
    }, 
})

export default React.memo(Cell);