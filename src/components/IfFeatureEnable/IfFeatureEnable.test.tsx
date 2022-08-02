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

  it("not render children", () => {
    const { queryByText } = render(
      <IfFeatureEnable name="featureName1" features={["featureName2"]}>
        Test Child
      </IfFeatureEnable>
    );

    expect(queryByText("Test Child")).not.toBeInTheDocument();
  });
});
