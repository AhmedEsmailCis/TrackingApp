import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox, StatusBar } from "react-native";
import { store, persistor } from "../Redux/Store";
import AppContainer from "../Navigation";
import { COLORS } from "../Styles";

function App() {
  LogBox.ignoreAllLogs(true);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={COLORS.AppColor3} barStyle="light-content" />
          <AppContainer />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
