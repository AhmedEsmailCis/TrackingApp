import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../Styles";

export default StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    width: wp(322),
    height: hp(153),
    backgroundColor: "white",
    alignSelf: "center",
    marginBottom: hp(18),
    borderRadius: wp(14),
    position: "absolute",
    bottom: 0,
    paddingTop: hp(25),
    alignItems: "center",
  },
  txt: {
    ...FONTS.BOLD,
    fontSize: wp(18),
    color: COLORS.AppColor1,
    marginBottom: hp(8),
  },
});
