import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8', 
  },
  RegisterContainer: {
    
    marginBottom:70,
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
 
  RegisterTitle: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  RegisterInput: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#F9F9F9',
  },
  RegisterButton:{
    width:'100%',
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },RegisterText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
    width: '100%',
    textAlign: 'left',
  },
  loginPrompt: {
    marginTop: 20,
    fontSize: 16,
  },
  loginLink: {
    color: 'black',
    fontWeight: 'bold',
  },
});


export default styles;