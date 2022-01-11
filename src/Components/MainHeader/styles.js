import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../Styles";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: wp("100"),
    height: hp(90),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    ...FONTS.MEDIUM,
    fontSize: wp(24),
    color: COLORS.AppColor1,
    flex: 4,
    textAlign: "center",
  },
  leftBttn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  rightBttn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
});
