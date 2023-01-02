import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import QuantityField from "../QuantityField";

describe("Test <QuantityField/>", () => {
  it("basic value", () => {
    const { getByDisplayValue } = render(<QuantityField value={3} />);
    const input = getByDisplayValue(3);

    expect(input).toHaveValue("3");
  });

  it("should have decrement & increment button", () => {
    const { getByRole } = render(<QuantityField value={3} />);
    const buttonIncrement = getByRole("button", { name: "increment" });
    const buttonDecrement = getByRole("button", { name: "decrement" });

    expect(buttonIncrement).toBeInTheDocument();
    expect(buttonDecrement).toBeInTheDocument();
  });
});
