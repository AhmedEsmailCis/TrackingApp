import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../Styles";

export default StyleSheet.create({
  modalView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    width: wp(322),
    height: hp(220),
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
    fontSize: wp(35),
    color: COLORS.AppColor1,
  },
  rowBtThreeDetails: {
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-around",
  },
  rowBtLabelResult: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  label: {
    ...FONTS.REGULAR,
    fontSize: wp(16),
    color: COLORS.AppColor1,
    opacity: 0.75,
    marginLeft: wp(40),
  },
  result: {
    ...FONTS.BOLD,
    fontSize: wp(18),
    color: COLORS.AppColor3,
    opacity: 0.75,
  },
  rowBtBttns: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(15),
    justifyContent: "space-around",
    alignSelf: "center",
    width: "40%",
  },
});
