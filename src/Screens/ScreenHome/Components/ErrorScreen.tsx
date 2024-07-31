import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorScreen: React.FC<{ error: string }> = ({ error }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Error: {error}</Text>
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

export default ErrorScreen;
