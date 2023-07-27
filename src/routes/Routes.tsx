import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Types
import {RootStackParams} from '../types';

// Components
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator<RootStackParams>();

const routeScreeDefaultOption = {
  headerStyle: {
    backgroundColor: '#0b3d61',
  },
  headerTitleStyle: {
    color: '#fff',
  },
};

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={routeScreeDefaultOption}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={routeScreeDefaultOption}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
