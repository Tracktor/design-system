import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import IfFeatureEnable from "../IfFeatureEnable";

describe("Test <IfFeatureEnable/>", () => {
  it("with string name", () => {
    const { getByText } = render(
      <IfFeatureEnable name="featureName" features={["featureName"]}>
        This should render
      </IfFeatureEnable>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with string name and several features", () => {
    const { getByText } = render(
      <IfFeatureEnable name="featureName" features={["featureName", "featureName2"]}>
        This should render
      </IfFeatureEnable>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with feature name not allowed", () => {
    const { queryByText } = render(
      <IfFeatureEnable name="featureName1" features={["featureName2"]}>
        This not should render
      </IfFeatureEnable>,
    );

    expect(queryByText("This not should render")).not.toBeInTheDocument();
  });

  it("with array of feature name", () => {
    const { getByText } = render(
      <IfFeatureEnable name={["featureName1", "featureName2"]} features={["featureName1", "featureName2", "featureName3"]}>
        This should render
      </IfFeatureEnable>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with array of feature name with some missing name", () => {
    const { getByText } = render(
      <IfFeatureEnable name={["featureName1", "featureName4"]} features={["featureName1", "featureName2", "featureName3"]}>
        This should render
      </IfFeatureEnable>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with array with missing name", () => {
    const { queryByText } = render(
      <IfFeatureEnable name={["featureName4", "featureName5"]} features={["featureName1", "featureName2", "featureName3"]}>
        This not should render
      </IfFeatureEnable>,
    );

    expect(queryByText("This not should render")).not.toBeInTheDocument();
  });
});
