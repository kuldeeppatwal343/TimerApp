import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { ComponentTimer } from './Timer';


function App(): React.JSX.Element {
  return (
      <View
      style={styles.container}>
        <ComponentTimer />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
