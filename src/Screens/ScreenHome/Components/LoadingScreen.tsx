import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoadingScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFD3C3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default LoadingScreen;
