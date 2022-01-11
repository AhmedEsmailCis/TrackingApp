import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, HistoryScreen, DetailsScreen } from "../../Screens";

const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => null,
        headerShown: false,
      }}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => null,
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => null,
          headerShown: false,
        }}
        name="HistoryScreen"
        component={HistoryScreen}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => null,
          headerShown: false,
        }}
        name="DetailsScreen"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
