import React from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mmkv } from '../../utils/Storage/mmkv';
import { FormValues, RegisterScreenNavigationProp } from './utils/types/interfaces';
import { schema } from './utils/schema/validation';
import styles from '../ScreenRegister/styleRegister';
type ScreenRegisterProps = {
  navigation: RegisterScreenNavigationProp;
};

const ScreenRegister: React.FC<ScreenRegisterProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    if (mmkv.getString('username') === data.username) {
      Alert.alert('Registration Error', 'Username already exists');
      return;
    }

    const hashedPassword = btoa(data.password);

    mmkv.set('username', data.username);
    mmkv.set('userpassword', hashedPassword);
    Alert.alert('Registration Successful', 'You can now log in');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.outerContainer}>
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
    </View>
  );
};

export default ScreenRegister;
