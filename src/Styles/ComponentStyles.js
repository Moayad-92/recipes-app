import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

const category_item = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#e4e4e4',
       margin:10,
       padding:10,
       borderColor:'#41a47a',
       borderWidth:1,
       borderRadius:25,
   },

   image:{
       height: device_size.height/8,
   },

   title:{
       fontSize:18,
       fontWeight:'bold',
       color:'#41a47a',
       textAlign:'left',
   },
});

const meal_item = StyleSheet.create({
    container:{
        
        backgroundColor:'#e4e4e4',
        margin:10,
        padding:25,
        borderColor:'#41a47a',
        borderWidth:1,
        borderRadius:10,
    },

    image:{
        height: device_size.height/4,
        borderRadius:100,
        marginBottom:15,
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#41a47a',
        textAlign:'center',
    },

});

export {category_item, meal_item};