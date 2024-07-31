import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

const ErrorScreen: React.FC<{ error: string }> = ({ error }) => (
  <View style={styles.ErrorContainer}>
    <Text style={styles.ErrorTitle}>Error: {error}</Text>
  </View>
);



export default ErrorScreen;
