import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({    

    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        // alignItems: 'center',
        justifyContent:'center',    
      }, 

      title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 70,
        marginTop: -400,
        textAlign: 'center',
        // alignContent: 'center'
      },

      intro:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 20
      },

      icon:{
        height: 120,
        width: 120,
        resizeMode: 'contain',
        // justifyContent: 'flex-start',
        margin:420,
        marginTop: 0,
        alignSelf: 'center'
        // marginTop: 100,
        // marginHorizontal: 
      },

      button:{
        backgroundColor: 'white',
        width: 200,
        height: 40,
        borderRadius: 5,
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
      },

      buttonText:{
        fontSize: 14,
        fontWeight: 'bold',
      },

      searchButton:{
        backgroundColor: 'white',
        height: 50,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 480,
        zIndex: 100,
      },

      searchButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
      }
  });

export default styles
