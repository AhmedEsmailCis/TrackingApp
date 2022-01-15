import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../Styles";

export default StyleSheet.create({
  screen: {
    backgroundColor: "white",
  },
  mapContainer: {
    width: wp("100"),
    height: hp(600),
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
  detailsContainer: {
    backgroundColor: COLORS.AppColorTransparent,
    marginBottom: hp(10),
  },
  markerViewStyle: {
    backgroundColor: COLORS.AppColor3,
    width: wp(40),
    height: wp(40),
    borderRadius: wp(20),
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.AppColor1,
    borderWidth: 2,
  },
  txt: {
    fontSize: wp(10),
    ...FONTS.BOLD,
    color: "white",
  },
  point: {
    backgroundColor: COLORS.AppColor3,
    width: 2,
    height: 2,
    borderRadius: wp(2),
  },
});
