import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../Styles";

export default StyleSheet.create({
  mapContainer: {
    width: wp("100"),
    height: hp(700),
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
  detailsContainer: {
    backgroundColor: COLORS.AppColorTransparent,
    marginBottom: hp(10),
  },
});
