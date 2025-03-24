// HasPermission.test.tsx

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HasPermission from "../HasPermission";

describe("Test <HasPermission/>", () => {
  it("with string name", () => {
    const { getByText } = render(
      <HasPermission name="featureName" additionalPermissions={["featureName"]}>
        This should render
      </HasPermission>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with array name - default operator (or)", () => {
    const { getByText } = render(
      <HasPermission name={["featureName"]} additionalPermissions={["featureName"]}>
        This should render
      </HasPermission>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with string name and several features", () => {
    const { getByText } = render(
      <HasPermission name="featureName" additionalPermissions={["featureName", "featureName2"]}>
        This should render
      </HasPermission>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with feature name not allowed", () => {
    const { queryByText } = render(
      <HasPermission name="featureName1" additionalPermissions={["featureName2"]}>
        This not should render
      </HasPermission>,
    );

    expect(queryByText("This not should render")).not.toBeInTheDocument();
  });

  it("with array of feature name - OR operator", () => {
    const { getByText } = render(
      <HasPermission
        name={["featureName1", "featureName2"]}
        additionalPermissions={["featureName1", "featureName2", "featureName3"]}
        permissionCheckMode="or"
      >
        This should render
      </HasPermission>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with array of feature name with some missing name - OR operator", () => {
    const { getByText } = render(
      <HasPermission
        name={["featureName1", "featureName4"]}
        additionalPermissions={["featureName1", "featureName2", "featureName3"]}
        permissionCheckMode="or"
      >
        This should render
      </HasPermission>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with array with missing name - OR operator", () => {
    const { queryByText } = render(
      <HasPermission
        name={["featureName4", "featureName5"]}
        additionalPermissions={["featureName1", "featureName2", "featureName3"]}
        permissionCheckMode="or"
      >
        This not should render
      </HasPermission>,
    );

    expect(queryByText("This not should render")).not.toBeInTheDocument();
  });

  it("with array of feature name - AND operator - all permissions present", () => {
    const { getByText } = render(
      <HasPermission
        name={["featureName1", "featureName2"]}
        additionalPermissions={["featureName1", "featureName2", "featureName3"]}
        permissionCheckMode="and"
      >
        This should render
      </HasPermission>,
    );

    expect(getByText("This should render")).toBeInTheDocument();
  });

  it("with array of feature name - AND operator - some permissions missing", () => {
    const { queryByText } = render(
      <HasPermission
        name={["featureName1", "featureName4"]}
        additionalPermissions={["featureName1", "featureName2", "featureName3"]}
        permissionCheckMode="and"
      >
        This not should render
      </HasPermission>,
    );

    expect(queryByText("This not should render")).not.toBeInTheDocument();
  });
});
