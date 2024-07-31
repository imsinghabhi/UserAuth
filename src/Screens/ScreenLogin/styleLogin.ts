import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  LoginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  LoginInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  errorText: {
    color: '#ff4d4f',
    marginBottom: 10,
    fontSize: 12,
  },
  LoginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerPrompt: {
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
  registerLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default styles;
