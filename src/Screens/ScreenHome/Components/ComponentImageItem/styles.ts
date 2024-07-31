import { Dimensions, StyleSheet } from "react-native";




const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    imageContainer: {
      marginVertical: 10,
      marginHorizontal: 5,
      width: screenWidth - 20,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#fff',
      elevation: 2,
    },
    ApiImage: {
      width: '100%',
      height: screenWidth / 2 - 20,
    },
    infoContainer: {
      padding: 10,
    },
    ImgTag: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconText: {
      marginLeft: 5,
      fontSize: 12,
    },
  });

  export default styles;