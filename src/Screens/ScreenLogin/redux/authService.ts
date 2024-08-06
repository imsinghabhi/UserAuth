import auth from '@react-native-firebase/auth';

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {

    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Auserauthn unknown error occurred');
  }
};

export const registerUser = async (email: string, password: string, displayName: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    await userCredential.user.updateProfile({ displayName });
    return userCredential.user;
  } catch (error) {

    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred');
  }
};

export const logoutUser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
   
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred');
  }
};
