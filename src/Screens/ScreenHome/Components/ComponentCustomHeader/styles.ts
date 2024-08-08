import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    logoutButton: {
      marginRight: 15,
    },
    logoutText: {
      color: '#007AFF',
      fontSize: 16,
    },
  });
  export default styles;