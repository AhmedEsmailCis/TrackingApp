import { Platform } from "react-native";
import Permissions, { PERMISSIONS, RESULTS } from "react-native-permissions";
import reactotron from "reactotron-react-native";

const IS_IOS = Platform.OS === "ios";

export const checkAndRequestLocationPermission = async () => {
  const result = await checkAndRequestPermission(
    IS_IOS ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  );
  return result;
};

const checkAndRequestPermission = async (type) => {
  try {
    const status = await Permissions.check(type);
    if (status === RESULTS.GRANTED) {
      return true;
    }

    if (IS_IOS && (status === RESULTS.BLOCKED || status === RESULTS.DENIED)) {
      const restartNote = "Application will be restarted";
      // await showAlertInfo(titleAlert, `${messageAlert}\n(${restartNote})`);
      // alert(titleAlert + "\n" + `${messageAlert}\n(${restartNote})`);

      try {
        await Permissions.openSettings();
      } catch (e) {
        reactotron.log(`OPEN_SETTINGS:: ${JSON.stringify(e, null, 2)}`);
        return false;
      }
    } else if (!IS_IOS && status === RESULTS.BLOCKED) {
      return false;
    }
    const permRequest = await Permissions.request(type);
    return permRequest === RESULTS.GRANTED;
  } catch (error) {
    reactotron.log(`error:: ${JSON.stringify(error, null, 2)}`);

    return false;
  }
};
