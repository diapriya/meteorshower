import React from 'react';
import{Text,TouchableOpacity,View,Stylesheet} from 'react-native';

export default class AppHeader extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>Meteor Shower Status</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:50,
        color:'blue',
        alignText:'center'
    }
})