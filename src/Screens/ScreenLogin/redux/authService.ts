import auth from '@react-native-firebase/auth';
import { storage } from '../../../utils/Storage/mmkv';

interface AuthResponse {
  success: boolean;
  displayName?: string;
  message?: string;
}

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  try {
  await auth().signInWithEmailAndPassword(email, password);
    const currentUser = auth().currentUser;

    if (currentUser) {
      
     const token = await currentUser.getIdToken();
       storage.set('userToken',token);
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

export const logoutUser = async (): Promise<void> => {
  try {
    await auth().signOut();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred');
  }
};
