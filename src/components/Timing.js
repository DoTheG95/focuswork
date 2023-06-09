import React from 'react';
import {View, StyleSheet} from 'react-native'
import {RoundedButton} from './RoundedButton'

export const Timing = ({onChangeTime}) => {
  return(
    <>
    <View style={styles.timing}>
      <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
    </View>
    <View style={styles.timing}>
      <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
    </View>
    <View style={styles.timing}>
      <RoundedButton size={75} title="25" onPress={() => onChangeTime(25)} />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  timing:{
    flex: 1,
    alignItems: 'center'
  }

})