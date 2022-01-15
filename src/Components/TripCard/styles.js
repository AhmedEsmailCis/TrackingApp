import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../Styles";

export default StyleSheet.create({
  container: {
    width: wp(354),
    height: hp(95),
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: hp(18),
    borderRadius: wp(14),
    paddingHorizontal: wp(20),
  },
  rowBtStatusDate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(20),
  },
  date: {
    ...FONTS.REGULAR,
    fontSize: wp(12),
    color: COLORS.AppColor1,
    opacity: 0.75,
  },
  rowBtIconStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    ...FONTS.REGULAR,
    fontSize: wp(14),
    color: COLORS.AppColor1,
  },
  wrapIcon: {
    width: wp(30),
    height: wp(30),
    backgroundColor: COLORS.AppColor2,
    borderRadius: wp(15),
    justifyContent: "center",
    alignItems: "center",
  },
  rowBtThreeDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(10),
  },
  rowBtLabelResult: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  label: {
    ...FONTS.REGULAR,
    fontSize: wp(12),
    color: COLORS.AppColor1,
    opacity: 0.75,
  },
  result: {
    ...FONTS.BOLD,
    fontSize: wp(14),
    color: COLORS.AppColor3,
    opacity: 0.75,
  },
});
