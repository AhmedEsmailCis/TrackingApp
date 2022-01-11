import React from "react";
import { Keyboard, SafeAreaView, Platform, View, KeyboardAvoidingView } from "react-native";
import FastImage from "react-native-fast-image";
import { COLORS, IMAGES } from "../../Styles";
import styles from "./styles";

export function SafeAreaLayout({
  hasImage,
  header,
  children,
  mainLayoutStyle,
  footer,
  footerStyle,
}) {
  const getKeyboardAvoidingViewBehavior = () => {
    if (Platform.OS === "ios") {
      return "padding";
    }
    return undefined;
  };
  return (
    <KeyboardAvoidingView
      behavior={getKeyboardAvoidingViewBehavior()}
      style={styles.containStyle}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}>
      <SafeAreaView style={styles.background} />
      <FastImage
        source={hasImage ? IMAGES.testImage : null}
        resizeMode="stretch"
        style={[
          styles.image,
          { backgroundColor: hasImage ? COLORS.AppColorTransparent : COLORS.AppColorWhite },
        ]}>
        {header}
        <View
          style={
            hasImage
              ? [
                  styles.containStyle,
                  mainLayoutStyle,
                  { backgroundColor: COLORS.AppColorTransparent },
                ]
              : [styles.containStyle, mainLayoutStyle]
          }>
          {children}
        </View>
        {footer && (
          <View style={footerStyle}>
            <SafeAreaView style={styles.footer}>{footer}</SafeAreaView>
          </View>
        )}
      </FastImage>
    </KeyboardAvoidingView>
  );
}
