import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import IfFeatureEnable from "./IfFeatureEnable";

describe("Test <IfFeatureEnable/>", () => {
  it("render children", () => {
    const { getByText } = render(
      <IfFeatureEnable name="featureName" features={["featureName"]}>
        Test Child
      </IfFeatureEnable>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });
});
