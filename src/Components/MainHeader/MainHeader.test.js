import React from "react";
import { render } from "@testing-library/react-native";
import { MainHeader } from "..";

test("title props is rendered", async () => {
  const { getByText } = render(<MainHeader title="Test Title" />);

  expect(getByText("Test Title")).toBeDefined();
});
