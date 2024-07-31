import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import styles from './styles';

const LoadingScreen: React.FC = () => (
  <View style={styles.LoadingContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
    <Text style={styles.LoadingTitle}>Loading...</Text>
  </View>
);

export default LoadingScreen;
