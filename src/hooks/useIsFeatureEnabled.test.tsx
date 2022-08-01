import { renderHook } from "@testing-library/react-hooks";
import { describe, it, expect } from "vitest";
import { useIsFeatureEnabled } from "./useIsFeatureEnabled";

const user = {
  ABTest: ["feature1", "feature2"],
  email: "user@gmail.com",
  unknown: undefined,
};

const userWithoutABTest = {
  email: "user@gmail.com",
  unknown: undefined,
};

describe("Test useUserHasABTest", () => {
  it("user without ABTest", () => {
    const name = "feature1";
    const { result } = renderHook(() => useIsFeatureEnabled({ name, user: userWithoutABTest }));

    expect(result.current).toBe(false);
  });

  it.each([
    ["string", "feature1", true],
    ["same", ["feature1", "feature1"], true],
    ["ordered array feature", ["feature1", "feature2"], true],
    ["not ordered array", ["feature2", "feature1"], true],
    ["empty", "", false],
    ["unknown", "azerty", false],
    ["undefined", undefined, false],
    ["array with some wrong", ["feature1", "xxx"], false],
    ["array with more wrong", ["feature1", "staffing_actions", "xxx"], false],
  ])("%s name ABTest", (_, name, expected) => {
    const { result } = renderHook(() => useIsFeatureEnabled({ name, user }));

    expect(result.current).toBe(expected);
  });
});
