import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  asyncStorage,
  networking,
} from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reactotronConfig = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-async-storage/async-storage` depending on where you get it from
  .configure({
    name: "React Native Demo",
    enabled: true,
    port: 9090,
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(asyncStorage())
  .use(networking())
  .connect(); // let's connect!

export default reactotronConfig;
