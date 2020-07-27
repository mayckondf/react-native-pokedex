import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '~/pages/Main';
import Pokedex from '~/pages/Pokedex';
import Pokemon from '~/pages/Pokemon';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={Main.options} />
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={Pokedex.options}
        />
        <Stack.Screen
          name="Pokemon"
          component={Pokemon}
          options={Pokemon.options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
