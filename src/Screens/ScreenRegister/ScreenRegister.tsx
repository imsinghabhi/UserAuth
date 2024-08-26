import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './utils/schema/validation';
import styles from './styleRegister';  // Update to the correct path
import { FormValues, RegisterScreenNavigationProp } from './utils/types/interfaces';
import { registerUser } from '../ScreenLogin/redux/authService';

type ScreenRegisterProps = {
  navigation: RegisterScreenNavigationProp;
};

const ScreenRegister: React.FC<ScreenRegisterProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await registerUser(data.email, data.password, data.name);
      Alert.alert('Registration Successful', 'You can now log in');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Registration Error', error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  return (
    <ImageBackground source={require('../../assets/bgimg.png')} style={styles.outerContainer}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.2)" />
      <View style={styles.RegisterContainer}>
        <Text style={styles.RegisterTitle}>Register</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.RegisterInput}
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.RegisterInput}
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
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.RegisterInput}
              placeholder="Phone Number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.RegisterInput}
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.RegisterInput}
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        
        <TouchableOpacity style={styles.RegisterButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.RegisterText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.loginPrompt}>
          Already have an account?{' '}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            Log in here
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ScreenRegister;
