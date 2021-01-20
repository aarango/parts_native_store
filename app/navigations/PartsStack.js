import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Parts from "../screens/Parts";

const Stack = createStackNavigator();

const RestauranStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="parts"
        component={Parts}
        options={{ title: "Repuestos" }}
      />
    </Stack.Navigator>
  );
};

export default RestauranStack;
