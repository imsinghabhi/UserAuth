import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CustomFallback = ({ error, resetError }: { error: Error; resetError: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Something went wrong!</Text>
      <Text>{error.toString()}</Text>
      <Button title="Try Again" onPress={resetError} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
});

export default CustomFallback;
