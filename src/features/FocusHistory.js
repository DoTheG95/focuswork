import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/fontStyle';

export const FocusHistory = ({focusedHistoryList}) => {

  const renderHistory = ({item}) => <Text> - {item} </Text>

  if (!focusedHistoryList || !focusedHistoryList.length) return null;

  return(
    <View style={styles.container}>
      <Text style={styles.title}> Things I have focued on:  </Text>
      <FlatList style={styles.focusList}
        data={focusedHistoryList}
        renderItem={renderHistory}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: spacing.md,
    flex:1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  focusList:{
    textAlign:'center',
    paddingTop: spacing.sm
  }
})