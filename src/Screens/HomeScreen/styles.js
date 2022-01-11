import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../Styles";

export default StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: { width: 50, height: 50, resizeMode: "contain", marginTop: 10 },
  rowBtLeftIconLeftTitle: {
    alignItems: "center",
  },
  leftHeaderTitle: {
    ...FONTS.MEDIUM,
    color: COLORS.AppColor1,
    fontSize: wp(12),
    marginLeft: wp(2),
  },
});
