import React from "react";
import { LogBox } from "react-native";
import AppContainer from "../Navigation";

function App() {
  LogBox.ignoreAllLogs(true);

  return <AppContainer />;
}

export default App;
