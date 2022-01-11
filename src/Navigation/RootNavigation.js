import * as React from "react";
import { StackActions, DrawerActions } from "@react-navigation/native";

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export function replace(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
}

export function replaceInStack(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch({
      ...StackActions.replace(name, params),
    });
  }
}

export function pop(...args) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.pop(...args));
  }
}

export function navigate(name, params, key) {
  if (key) {
    if (isReadyRef.current && navigationRef.current) {
      navigationRef.current?.navigate({ key, name, params });
    }
    return;
  }
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
}

export function push(...args) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.push(...args));
  }
}

export function openDrawer() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
  }
}

export function closeDrawer() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer());
  }
}

export function toggleDrawer() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
  }
}
export const login = (name) =>
  navigationRef.current?.navigate("AuthStack", {
    rootScreen: name,
  });
