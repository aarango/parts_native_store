import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Account/Account';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';

const Stack = createStackNavigator();

const AcountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Acount"
        component={Account}
        options={{ title: 'Cuenta' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Iniciar sesión' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Registro' }}
      />
    </Stack.Navigator>
  );
};

export default AcountStack;
