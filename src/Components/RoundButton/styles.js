import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../Styles";

export default StyleSheet.create({
  Bttn: {
    backgroundColor: COLORS.AppColor3,
    width: wp(50),
    height: wp(50),
    borderRadius: wp(25),
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.AppColor1,
    borderWidth: 2,
  },
});
