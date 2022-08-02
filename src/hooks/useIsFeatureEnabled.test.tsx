import { renderHook } from "@testing-library/react-hooks";
import { describe, it, expect } from "vitest";
import { useIsFeatureEnabled } from "./useIsFeatureEnabled";

describe("Test useUserHasABTest", () => {
  it("give name without name", () => {
    const name = "feature1";
    const { result } = renderHook(() => useIsFeatureEnabled({ name }));

    expect(result.current).toBe(false);
  });

  it.each([
    ["string", "feature1", true],
    ["same", ["feature1", "feature1"], true],
    ["ordered array", ["feature1", "feature2"], true],
    ["not ordered", ["feature2", "feature1"], true],
    ["empty", "", false],
    ["unknown", "azerty", false],
    ["array with some wrong", ["feature1", "xxx"], false],
    ["array with more wrong", ["feature1", "staffing_actions", "xxx"], false],
  ])("%s feature(s) name", (_, name, expected) => {
    const features = ["feature1", "feature2"];
    const { result } = renderHook(() => useIsFeatureEnabled({ features, name }));

    expect(result.current).toBe(expected);
  });
});
