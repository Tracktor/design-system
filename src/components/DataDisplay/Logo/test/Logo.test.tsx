import { render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Logo from "../Logo";

describe("Test <Logo/>", () => {
  it("render img", async () => {
    const { container, getByRole } = render(<Logo component="img" />);
    const svg = container.querySelector("svg");
    const img = await waitFor(() => getByRole("img"));

    expect(svg).not.toBeInTheDocument();
    expect(img).toBeInTheDocument();
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
