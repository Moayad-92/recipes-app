import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

const meal_details = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        paddingHorizontal:10
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#ef6c00',
        textAlign:'center',
    },
    image:{
        height:device_size.height/3,
        borderRadius:50,
        marginVertical:15,
        borderColor:'#41a47a',
        borderWidth:2,
    },
    area_container:{
        marginHorizontal:10,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    area_text:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ef6c00'
    },
    instructions_container:{
        margin:10,
        padding:10,
        backgroundColor:'#e4e4e4',
        borderRadius:10,
        borderColor:'#41a47a',
        borderWidth:2,
    },
    instructions_header:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'left',
        textDecorationLine:'underline',
        marginBottom:5,
    },
    instructions_text:{
        fontSize:16,
        marginLeft:10,
        lineHeight:20,
    },
    youtube_container:{
        backgroundColor:'#ef6c00',
        width:device_size.width/2,
        alignSelf:'center',
        margin:10,
        padding:10,
        borderRadius:10,
    },
    youtube_text:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    },
});

export {meal_details};