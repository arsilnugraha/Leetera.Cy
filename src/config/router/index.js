import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../containers/pages';

const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//       <Stack.Navigator headerMode="none" initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home}  />
//         <Stack.Screen name="NewsDetail" component={NewsDetail}  />
//       </Stack.Navigator>
//   );
// };

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Router;
