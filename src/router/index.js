import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Collection,
  Download,
  Splash,
  History,
  Home,
  SignIn,
  SignUp,
  PopularAuthors,
  PopularBooks,
  Notifications,
  UploadPhoto,
  BookDetails,
  Profile,
  UpdateProfile,
  AddBook,
  MyBook,
  MyReview,
} from '../pages';
import {BottomNavigator} from '../components';
import {Genre} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Collection" component={Collection} />
      <Tab.Screen name="Download" component={Download} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="PopularBooks" component={PopularBooks} />
      <Stack.Screen name="PopularAuthors" component={PopularAuthors} />
      <Stack.Screen name="Genre" component={Genre} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="AddBook" component={AddBook} />
      <Stack.Screen name="MyBook" component={MyBook} />
      <Stack.Screen name="MyReview" component={MyReview} />
    </Stack.Navigator>
  );
};

export default Router;
