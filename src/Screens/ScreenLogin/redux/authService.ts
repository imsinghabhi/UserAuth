import auth from '@react-native-firebase/auth';
import { storage } from '../../../utils/Storage/mmkv';  // Ensure MMKV is configured correctly
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AppDispatch } from '../../../utils/redux/store';
import { login } from './authSlice';
import { Alert } from 'react-native';


interface AuthResponse {
  success: boolean;
  displayName?: string;
  message?: string;
}


export const loginWithGoogle = async (dispatch: AppDispatch) => {
  try {

  
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    const idToken = await userCredential.user.getIdToken();
    storage.set('authToken', idToken);

    const currentUser = auth().currentUser;
    if (currentUser) {
      dispatch(login(currentUser.email || 'User'));
    }
  } catch (error) {
    Alert.alert('Google Sign-In failed, please try again.');
    console.error(error);
  }
};


export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    const currentUser = auth().currentUser;

    if (currentUser) {
      const token = await currentUser.getIdToken();
      storage.set('authToken', token);

      return {
        success: true,
        displayName: currentUser.displayName || 'User',
      };
    } else {
      return {
        success: false,
        message: 'User not found',
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }
    return {
      success: false,
      message: 'An unknown error occurred',
    };
  }
};

export const registerUser = async (email: string, password: string, displayName: string): Promise<AuthResponse> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    await userCredential.user.updateProfile({ displayName });
    const token = await userCredential.user.getIdToken();
    storage.set('authToken', token);
    
    return {
      success: true,
      displayName,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }
    return {
      success: false,
      message: 'An unknown error occurred',
    };
  }
};



export const logoutUser = async () => {
  try {
    const currentUser = auth().currentUser;

    if (currentUser) {
      await auth().signOut();
    }

    const isGoogleSignedIn = await GoogleSignin.signIn();
    if (isGoogleSignedIn) {
      await GoogleSignin.signOut();
    }

    storage.delete('authToken');
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred');
  }
};
