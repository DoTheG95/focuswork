import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';
import { RoundedButton } from './src/components/RoundedButton';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [focusedHistoryList, setFocusedHistoryList] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory focusedHistoryList={focusedHistoryList} />

          <Button
            style={styles.button}
            title="Reset Focus list"
            onPress={setFocusedHistoryList}
          />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setFocusedHistoryList([...focusedHistoryList, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.grey,
  },
  button: {
    justifyContent: 'center',
  },
});
