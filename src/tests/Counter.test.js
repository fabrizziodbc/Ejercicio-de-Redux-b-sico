import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  const renderApp = (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  test("Should starts with 0 as a CurrentValue", () => {
    render(renderApp);
    const countValue = screen.getByTestId("currentValue");
    expect(Number(countValue.textContent)).toBe(0);
  });
  test("Increment button(+1) should modify the currentValue to 1", () => {
    render(renderApp);
    const countValue = screen.getByTestId("currentValue");
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    userEvent.click(incrementButton);
    expect(Number(countValue.textContent)).toBe(1);
  });
  test("Reset button should return the currentValue to 0", () => {
    render(renderApp);
    const countValue = screen.getByTestId("currentValue");
    const ResetButton = screen.getByRole("button", { name: "Reset" });
    userEvent.click(ResetButton);
    expect(Number(countValue.textContent)).toBe(0);
  });
  test("Decrement button should modify the currentValue to -1", () => {
    render(renderApp);
    const countValue = screen.getByTestId("currentValue");
    const DecrementButton = screen.getByRole("button", { name: "Decrement" });
    userEvent.click(DecrementButton);
    expect(Number(countValue.textContent)).toBe(-1);
  });
  test("Reset button should return the currentValue to 0 (again)", () => {
    render(renderApp);
    const countValue = screen.getByTestId("currentValue");
    const ResetButton = screen.getByRole("button", { name: "Reset" });
    userEvent.click(ResetButton);
    expect(Number(countValue.textContent)).toBe(0);
  });
  test("Increment button(+5) should modify the currentValue to 5", () => {
    render(renderApp);
    const countValue = screen.getByTestId("currentValue");
    const incrementButton = screen.getByRole("button", {
      name: "Increment +5",
    });
    userEvent.click(incrementButton);
    expect(Number(countValue.textContent)).toBe(5);
  });
});
