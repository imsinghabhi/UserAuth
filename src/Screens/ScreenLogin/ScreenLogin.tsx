import React from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { mmkv } from '../../utils/mmkv/mmkv';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/interfaces/RootStackParamList';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

type FormValues = {
  username: string;
  password: string;
};

type ScreenLoginProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const ScreenLogin: React.FC<ScreenLoginProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const storedUsername = mmkv.getString('username');
    const storedPassword = mmkv.getString('userpassword');
    const hashedPassword = btoa(data.password);

    if (data.username !== storedUsername || hashedPassword !== storedPassword) {
      Alert.alert('Login Error', 'Invalid username or password');
      return;
    }

    Alert.alert('Login Successful', 'Welcome back!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
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
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Text style={styles.registerPrompt}>
        New user? Please{' '}
        <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
          register here
        </Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  registerPrompt: {
    marginTop: 16,
    textAlign: 'center',
  },
  registerLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default ScreenLogin;
