import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "./RootNavigation";
import HomeStack from "./StacksNavigator/HomeStack";

function Navigation() {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <HomeStack />
    </NavigationContainer>
  );
}

export default Navigation;
