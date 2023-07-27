import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/routes/Routes';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b3d61',
  },
});
