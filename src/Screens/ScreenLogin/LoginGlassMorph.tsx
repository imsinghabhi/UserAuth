
import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './utils/schema/validation';
import { loginUser, loginWithGoogle } from './redux/authService';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/interfaces/RootStackParamList';
import { useDispatch } from 'react-redux';
import { login } from './redux/authSlice';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { BlurView } from '@react-native-community/blur';

type FormValues = {
  email: string;
  password: string;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginS: React.FC = () => {
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

  const handleGoogleSignIn = async () => {
    loginWithGoogle(dispatch);
  };

  return (
    <ImageBackground 
      source={require('../../assets/bgimg.png')} 
      style={styles.backgroundImage} 
      imageStyle={{ opacity: 0.8 }}
    >
      <View style={styles.LoginContainer}>
        <View style={styles.blurViewContainer}>
          <BlurView
            style={styles.blurView}
            blurType="light"
            blurAmount={60}
            reducedTransparencyFallbackColor="white"
          >
         
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
              <GoogleSigninButton
                style={styles.googleBtn}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={handleGoogleSignIn}
                disabled={false}
              />
              <Text style={styles.registerPrompt}>
                New user? Please{' '}
                <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
                  register here
                </Text>
              </Text>
            
          </BlurView>
        </View>
      </View>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,  
      resizeMode: 'cover',  
    },
    LoginContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    blurViewContainer: {
      width: '100%',
      padding: 10,
      borderRadius: 10,
      // overflow: 'hidden',
    },
    blurView: {
      width: '100%',
      padding: 20,
      borderRadius: 10,
    },
  
    LoginTitle: {
      fontSize: 24,
      marginBottom: 20,
    },
    LoginInput: {
      width: '100%',
      padding: 10,
      marginBottom: 15,
      borderColor: '#fff',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor:"white",
    },
    errorText: {
      color: 'red',
    },
    LoginButton: {
      width: '100%',
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    googleBtn: {
      marginTop: 10,
      width: '100%',
      height: 48,
    },
    registerPrompt: {
      marginTop: 15,
    },
    registerLink: {
      color: '#0000FF',
      textDecorationLine: 'underline',
    },
  });
  
export default LoginS;
