import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnBoard, SignIn} from '../../containers/pages';

const Stack = createStackNavigator();

const OnBoardStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="OnBoard">
      <Stack.Screen name="OnBoard" component={OnBoard} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="OnBoardStack">
        <Stack.Screen name="OnBoardStack" component={OnBoardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;