import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { StartRunningCard } from "..";

test("Text && Button Visible", async () => {
  const myOnPress = jest.fn();
  const { getByTestId, getByText } = render(<StartRunningCard onStartPress={myOnPress} />);

  const button = getByTestId("startBtn");
  fireEvent.press(button);
  expect(myOnPress).toBeCalledTimes(1);
  expect(getByText("Start Running")).toBeDefined();
});
