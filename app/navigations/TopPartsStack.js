import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopParts from "../screens/TopParts";

const Stack = createStackNavigator();

const TopPartsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-repuestos"s
        component={TopParts}
        options={{ title: "Mas vendidos" }}
      />
    </Stack.Navigator>
  );
};

export default TopPartsStack;
