import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ImageBackground, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { schema } from './utils/schema/validation';
import styles from './styleRegister';
import { FormValues, RegisterScreenNavigationProp } from './utils/types/interfaces';
import { loginWithGoogle, registerUser } from '../ScreenLogin/redux/authService';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';

type ScreenRegisterProps = {
  navigation: RegisterScreenNavigationProp;
};

const ScreenRegister: React.FC<ScreenRegisterProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  
  const onSubmit = async (data: FormValues) => {
    try {
      await registerUser(data.email, data.password, data.name);
      Alert.alert('Registration Successful', 'You can now log in');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Registration Error', error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };
  
  const handleGoogleSignIn = async () => {
    loginWithGoogle(dispatch);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ImageBackground source={require('../../assets/bgimg.png')} style={styles.LoginContainer}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.2)" />

          <View style={styles.formContainer}>
          <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
            <Text style={styles.LoginTitle}>Register</Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.LoginInput}
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
              name="phone"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.LoginInput}
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
                  style={styles.LoginInput}
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
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <GoogleSigninButton 
              style={styles.googleBtn}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={handleGoogleSignIn}
              disabled={false} 
            />
            <Text style={styles.registerPrompt}>
              Already have an account?{' '}
              <Text style={styles.registerLink} onPress={() => navigation.navigate('Login')}>
                Log in here
              </Text>
            </Text>
            </KeyboardAwareScrollView>
          </View>
        
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ScreenRegister;
