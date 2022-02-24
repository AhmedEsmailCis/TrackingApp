// jest.mock("react-native-permissions", () => require("react-native-permissions/mock"));
import mock from "react-native-permissions/mock";

jest.mock("react-native-permissions", () => {
  return mock;
});
