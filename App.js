import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homescreen';
import Iss from './screens/iss';
import Meteor from './screens/meteor';

import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';

const stack= createStackNavigator();

function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screeOptions={{headerShown:true}}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Iss' component={Iss}/>
          <Stack.Screen name='Meteor' component={Meteor}/>
        </Stack.Navigator>


      </NavigationContainer>
    )
}

