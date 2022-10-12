import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import { useFeatureEnabled } from "./useFeatureEnabled";
import FeatureEnableProvider from "@/context/FeatureEnable/FeatureEnableProvider";

describe("Test useIsFeatureEnabled", () => {
  it("provide name & features with empty string array", () => {
    const name = [""];
    const features = [""];
    const { result } = renderHook(() => useFeatureEnabled());
    const { getIsFeatureEnabled } = result.current;
    const isFeatureEnabled = getIsFeatureEnabled(name, features);

    expect(isFeatureEnabled).toBe(false);
  });

  it.each([
    ["give name", "feature1", false],
    ["give empty string name", "", false],
    ["give empty string array name", [""], false],
  ])("%s without features)", (_, name, expected) => {
    const { result } = renderHook(() => useFeatureEnabled());
    const { getIsFeatureEnabled } = result.current;
    const isFeatureEnabled = getIsFeatureEnabled(name);

    expect(isFeatureEnabled).toBe(expected);
  });

  it.each([
    ["empty string", "", false],
    ["missing string value", "azerty", false],
    ["array with some missing", ["feature1", "xxx"], false],
    ["array with more missing", ["feature1", "staffing_actions", "xxx"], false],
    ["string match", "feature1", true],
    ["array match with same value", ["feature1", "feature1"], true],
    ["ordered array match", ["feature1", "feature2"], true],
    ["not ordered match", ["feature2", "feature1"], true],
  ])("%s and features provided by context props)", (_, name, expected) => {
    const features = ["feature1", "feature2"];
    const { result } = renderHook(() => useFeatureEnabled());
    const { getIsFeatureEnabled } = result.current;
    const isFeatureEnabled = getIsFeatureEnabled(name, features);

    expect(isFeatureEnabled).toBe(expected);
  });

  it.each([
    ["string match", "feature1", true],
    ["array match with same value", ["feature1", "feature1"], true],
    ["ordered array match", ["feature1", "feature2"], true],
    ["not ordered match", ["feature2", "feature1"], true],
    ["empty string", "", false],
    ["missing string value", "azerty", false],
    ["array with some missing", ["feature1", "xxx"], false],
    ["array with more missing", ["feature1", "staffing_actions", "xxx"], false],
  ])("%s and features provided by context", (_, name, expected) => {
    const features = ["feature1", "feature2"];
    const wrapper = ({ children }: any) => <FeatureEnableProvider features={features}>{children}</FeatureEnableProvider>;
    const { result } = renderHook(() => useFeatureEnabled(), { wrapper });
    const { getIsFeatureEnabled } = result.current;
    const isFeatureEnabled = getIsFeatureEnabled(name);

    expect(isFeatureEnabled).toBe(expected);
  });
});
