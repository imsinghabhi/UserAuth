import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

const LoadingScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Loading...</Text>
  </View>
);


export default LoadingScreen;
