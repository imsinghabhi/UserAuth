import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './utils/schema/validation';
import styles from './styleLogin';
import { loginUser } from './redux/authService';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/interfaces/RootStackParamList';

type FormValues = {
  email: string;
  password: string;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const ScreenLogin: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const onSubmit = async (data: FormValues) => {
    try {
      const user = await loginUser(data.email, data.password);
      Alert.alert('Login Successful', `Welcome back, ${user.displayName}!`);
      navigation.navigate('Home');  // Navigate to Home screen
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Login Error', error.message);
      } else {
        Alert.alert('Login Error', 'An unknown error occurred');
      }
    }
  };

  return (
    <View style={styles.LoginContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.LoginTitle}>Login</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.LoginInput}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.LoginInput}
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        <TouchableOpacity style={styles.LoginButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerPrompt}>
          New user? Please{' '}
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
            register here
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ScreenLogin;
