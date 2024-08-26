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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10, 
  },
  googleBtn: {
    height: 50,
    width: '100%',
    top: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  LoginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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
    backgroundColor: 'black',
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
    color: '#fff',
  },
  registerLink: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
