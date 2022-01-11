import { Platform, StatusBar, Dimensions } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const IPhoneXHEIGHT = 812;
const IPhoneXrHEIGHT = 896;
const IPhoneXsHEIGHT = 896;
const IPhoneXsMaxHEIGHT = 896;
const IPhoneSeHEIGHT = 568;

export const Screen = Dimensions.get("window");
export const ScreenWidth = Screen.width;
export const ScreenHeight = Screen.height;

export function wp(width) {
  if (typeof width === "string") return widthPercentageToDP(width);
  return widthPercentageToDP((width / guidelineBaseWidth) * 100);
}

export function hp(height) {
  if (typeof height === "string") return heightPercentageToDP(height);
  return heightPercentageToDP((height / guidelineBaseHeight) * 100);
}

export function hasNotch() {
  return detection();
}

export function isIPhoneSE(dim) {
  return dim.height === IPhoneSeHEIGHT;
}

export function isIPhoneX(dim) {
  return dim.height === IPhoneXHEIGHT;
}

export function isIPhoneXs(dim) {
  return dim.height === IPhoneXsHEIGHT;
}

export function isIPhoneXsMax(dim) {
  return dim.height === IPhoneXsMaxHEIGHT;
}

export function isIPhoneXr(dim) {
  return dim.height === IPhoneXrHEIGHT;
}

export function getStatusBarHeight() {
  return Platform.select({
    ios: hasNotch() ? 44 : 30,
    android: StatusBar.currentHeight,
  });
}

function detection() {
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (isIPhoneX(Screen) || isIPhoneXr(Screen) || isIPhoneXs(Screen) || isIPhoneXsMax(Screen))
  );
}
