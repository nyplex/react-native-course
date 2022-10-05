import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors';

const GuessLogItem = (props) => {
  return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{props.roundNumber}</Text>
        <Text style={styles.itemText}>Oppenent's Guess: {props.guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: COLORS.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: COLORS.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
    },
    itemText: {
        color: COLORS.primary800,
        fontFamily: 'open-sans',
    }
});

export default GuessLogItem