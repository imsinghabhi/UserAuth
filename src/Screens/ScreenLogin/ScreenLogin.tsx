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
import { useDispatch } from 'react-redux';
import { login } from './redux/authSlice'; 

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
  const dispatch = useDispatch();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await loginUser(data.email, data.password);
      
      if (response.success) {

        dispatch(login(data.email)); 
        Alert.alert('Login Successful', `Welcome back, ${response.displayName}!`);
        
        
      } else {
        Alert.alert('Login Error', response.message || 'An unknown error occurred');
      }
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
