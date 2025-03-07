import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';

export type Transaction = {
     id: number;
     date: string;
     amount: string;
     description: string;
     location: string;
     type: string;
     category: string;
   };
   
   export type RootStackParamList = {
     SignIn: undefined;
     Dashboard: undefined;
     AddTransaction: undefined;
     TransactionDetails: { transaction: Transaction };
   };

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;