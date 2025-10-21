// usePermission.test.tsx

import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import PermissionProvider from "@/context/Permission/PermissionProvider";
import usePermission from "./usePermission";

describe("Test usePermission", () => {
  it("provide name & permissions with empty string array", () => {
    const name = [""];
    const permissions = [""];
    const { result } = renderHook(() => usePermission());
    const { hasPermission } = result.current;
    const isFeatureEnabled = hasPermission(name, permissions);

    expect(isFeatureEnabled).toBe(false);
  });

  it.each([
    ["give name", "feature1", false],
    ["give empty string name", "", false],
    ["give empty string array name", [""], false],
  ])("%s without features)", (_, name, expected) => {
    const { result } = renderHook(() => usePermission());
    const { hasPermission } = result.current;
    const hasAccess = hasPermission(name);

    expect(hasAccess).toBe(expected);
  });

  it.each([
    ["empty string", "", false],
    ["with missing string feature", "xxxx", false],
    ["missing string value", "azerty", false],
    ["array with some missing - default OR", ["feature1", "xxx"], true],
    ["array with more missing - default OR", ["feature1", "staffing_actions", "xxx"], true],
    ["string match", "feature1", true],
    ["array match with same value", ["feature1", "feature1"], true],
    ["ordered array match", ["feature1", "feature2"], true],
    ["not ordered match", ["feature2", "feature1"], true],
  ])("%s and features provided by context props)", (_, name, expected) => {
    const features = ["feature1", "feature2"];
    const { result } = renderHook(() => usePermission());
    const { hasPermission } = result.current;
    const isFeatureEnabled = hasPermission(name, features);

    expect(isFeatureEnabled).toBe(expected);
  });

  it.each([
    ["array with some missing - AND operator", ["feature1", "xxx"], false],
    ["array with all present - AND operator", ["feature1", "feature2"], true],
  ])("%s and features provided by context props)", (_, name, expected) => {
    const features = ["feature1", "feature2"];
    const { result } = renderHook(() => usePermission());
    const { hasPermission } = result.current;
    const isFeatureEnabled = hasPermission(name, features, "and");

    expect(isFeatureEnabled).toBe(expected);
  });

  it.each([
    ["string match", "feature1", true],
    ["array match with same value", ["feature1", "feature1"], true],
    ["ordered array match - default OR", ["feature1", "feature2"], true],
    ["not ordered match - default OR", ["feature2", "feature1"], true],
    ["empty string", "", false],
    ["missing string value", "azerty", false],
    ["array with some missing - default OR", ["feature1", "xxx"], true],
    ["array with more missing - default OR", ["feature1", "staffing_actions", "xxx"], true],
  ])("%s and features provided by context", (_, name, expected) => {
    const permissions = ["feature1", "feature2"];
    const wrapper = ({ children }: any) => <PermissionProvider permissions={permissions}>{children}</PermissionProvider>;
    const { result } = renderHook(() => usePermission(), { wrapper });
    const { hasPermission } = result.current;
    const isFeatureEnabled = hasPermission(name);

    expect(isFeatureEnabled).toBe(expected);
  });

  it.each([
    ["array with some missing - AND operator", ["feature1", "xxx"], false],
    ["array with all present - AND operator", ["feature1", "feature2"], true],
  ])("%s and features provided by context", (_, name, expected) => {
    const permissions = ["feature1", "feature2"];
    const wrapper = ({ children }: any) => <PermissionProvider permissions={permissions}>{children}</PermissionProvider>;
    const { result } = renderHook(() => usePermission(), { wrapper });
    const { hasPermission } = result.current;
    const isFeatureEnabled = hasPermission(name, undefined, "and");

    expect(isFeatureEnabled).toBe(expected);
  });

  it.each([
    ["should feature2 disabled", "feature2", false],
    ["should feature1 enabled", "feature1", true],
  ])("%s and features provided by context", (_, name, expected) => {
    const permissions = ["feature1", "feature2", "feature3"];
    const disabledFeatures = ["feature2"];

    const wrapper = ({ children }: any) => (
      <PermissionProvider permissions={permissions} disabledPermissions={disabledFeatures}>
        {children}
      </PermissionProvider>
    );
    const { result } = renderHook(() => usePermission(), { wrapper });
    const { hasPermission } = result.current;
    const isFeatureEnabled = hasPermission(name);

    expect(isFeatureEnabled).toBe(expected);
  });
});
