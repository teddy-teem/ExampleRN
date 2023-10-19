import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  NativeModules,
  Button,
} from 'react-native';

const CalendarModule = NativeModules.CalendarModule;

console.log(CalendarModule);

function App(): JSX.Element {
  const [nativeModuleResponse, setNativeModuleResponse] =
    useState('Not Initialized');
  const onPress = async () => {
    const res = await CalendarModule.createCalendarEvent(
      'Jahid Hasan',
      'testLocation',
    );
    setNativeModuleResponse(res);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>{nativeModuleResponse}</Text>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
