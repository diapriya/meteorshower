import * as React from 'react';
import{Text,TouchableOpacity,View,StyleSheet,SafeAreaView,platform,StausBar,ImageBackground,Image} from 'react-native';
import AppHeader from './appheader.js'

export default class HomeScreen extends React.Component{
    render(){
        return(

            <View style={styles.container}>
                <SafeAreaView style={styles.droidsafearea}/>

             <ImageBackground source={require("../assets/bg.png")} style={styles.imagestyle}>

                <View style={styles.titleBar}>
                    <Text style={styles.titleStyle}>Meteor Shower</Text>
                    
                </View>

                <TouchableOpacity style={styles.routecard} onPress={()=>{
                    this.props.navigation.navigate('Meteor')
                }}>
                    <Text style={styles.routeText}>Meteor</Text>
                    <Text style={styles.knowmore}>{'know more--->'}</Text>
                    <Text style={styles.digit}>1</Text>
                    <Image sorce={require('../assets/meteor.png')} style={styles.picturestyle}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routecard}  onPress={()=>{
                    this.props.navigation.navigate('Iss')
                }}>
                    <Text style={styles.routeText}>Iss Tracker</Text>
                    <Text style={styles.knowmore}>{'know more--->'}</Text>
                    <Text style={styles.digit}>2</Text>
                    <Image sorce={require('../assets/iss.png')} style={styles.picturestyle}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routecard}>
                    <Text style={styles.routeText}>Update</Text>
                    <Text style={styles.knowmore}>{'know more--->'}</Text>
                    <Text style={styles.digit}>3</Text>
                    <Image sorce={require('../assets/rocket.png')} style={styles.picturestyle}/>
                </TouchableOpacity>
             </ImageBackground>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    droidsafearea:{
        marginTop:platform.Os==='android'? StatusBar.currentHeight: 0

    },
    titleBar:{
       flex:0.50,
       justifyContent:'center',
       alignItems:'center' 
    },
    routecard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30
    },
    titleStyle:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    imagestyle:{
        flex:1,
        resizeMode:'cover'
    },
    knowmore:{
        paddingLeft:30,
        fontSize:50,
        color:'red'
    },
    digit:{
        position:'absolute',
        color:'rgba(183,183,183,0.5)',
        fontSize:150,
        right:20,
        bottom:-15,
        zindex:-1
    },
    picturestyle:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:'contain',
        right:20,
        top:-80
    }

})

