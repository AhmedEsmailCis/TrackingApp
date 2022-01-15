import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../Styles";

export default StyleSheet.create({
  container: {
    width: wp(354),
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: hp(18),
    borderRadius: wp(14),
    paddingHorizontal: wp(20),
    paddingVertical: hp(8),
  },
  rowBtStatusDate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginTop: hp(5),
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
  trashBttn: {
    backgroundColor: COLORS.AppColor3,
    width: wp(20),
    height: wp(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(5),
    alignSelf: "flex-end",
    marginVertical: hp(10),
    zIndex: 1000,
  },
});
