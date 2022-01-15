import { StyleSheet } from "react-native";
import { wp, hp, COLORS, FONTS } from "../../Styles";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: wp(190),
    height: wp(190),
    resizeMode: "contain",
  },
  title: {
    ...FONTS.MEDIUM,
    fontSize: wp(25),
    color: COLORS.AppColor3,
    marginTop: hp(30),
  },
});
