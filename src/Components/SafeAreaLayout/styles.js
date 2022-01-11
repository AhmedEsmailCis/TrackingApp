import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles";

export default StyleSheet.create({
  KeyboardAvoidingView: { flex: 1 },
  mainLayout: {
    flex: 1,
    backgroundColor: COLORS.AppColor2,
  },
  mainSafeArea: {
    flex: 1,
  },
  image: {
    backgroundColor: "white",
    flex: 1,
  },
  containStyle: {
    flex: 1,
    backgroundColor: COLORS.AppColorTransparent,
  },
  footer: {
    backgroundColor: COLORS.AppColor1,
    alignItems: "center",
  },
  background: {
    backgroundColor: COLORS.AppColor3,
  },
});
