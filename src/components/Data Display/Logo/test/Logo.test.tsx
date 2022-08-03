import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Logo from "../Logo";

describe("Test <IfFeatureEnable/>", () => {
  it("render img", () => {
    const { container } = render(<Logo component="img" />);
    const img = container.querySelector("img");
    const svg = container.querySelector("svg");

    expect(img).toBeInTheDocument();
    expect(svg).not.toBeInTheDocument();
    expect(img).toHaveProperty("alt", "Tracktor");
  });

  it("render svg", () => {
    const { container } = render(<Logo component="svg" />);
    const img = container.querySelector("img");
    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
    expect(img).not.toBeInTheDocument();
  });
});
