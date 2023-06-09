import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../utils/colors';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import {Timing} from '../components/Timing'
import { spacing } from '../utils/fontStyle';

const ONE_SECOND_IN_MS = 1000;

const PATTERN =[
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  
  const [isStarted, setIsStarted] = useState(false);
  const [focusProgress, setFocusProgress] = useState(1);
  const [focusMinutes, setFocusMinutes] = useState(0.1);


  const onFocusEnd = (resetFocus) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setFocusProgress(1);
    resetFocus();
    onTimerEnd(focusSubject);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={focusMinutes}
          isPaused={!isStarted}
          onProgress={setFocusProgress}
          onEnd={onFocusEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}> Focusing on: </Text>
          <Text style={styles.task}> {focusSubject} </Text>
        </View>
      </View>

      <View style = {{ paddingTop: spacing.sm }}>
        <ProgressBar 
          progress = {focusProgress}
          color={colors.white}
          height= {spacing.sm}
        />
      </View>


      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setFocusMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>

      <View style={styles.clearFocus}>
        <RoundedButton size={50} title='Clear' onPress={clearSubject} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearFocus:{
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timingWrapper:{
    flex: 0.1,
    flexDirection: 'row',
    padding: spacing.xxl,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
