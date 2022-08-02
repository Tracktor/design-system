import { renderHook } from "@testing-library/react-hooks";
import { describe, it, expect } from "vitest";
import { useIsFeatureEnabled } from "./useIsFeatureEnabled";

describe("Test useUserHasABTest", () => {
  it("user without features", () => {
    const user = { email: "user@gmail.com", unknown: undefined };
    const name = "feature1";
    const { result } = renderHook(() => useIsFeatureEnabled({ name, user }));

    expect(result.current).toBe(false);
  });

  it("user with custom predicate", () => {
    const user = { email: "user@gmail.com", test: ["feature1", "feature2"], unknown: undefined };
    const name = "feature1";
    const { result } = renderHook(() =>
      useIsFeatureEnabled({
        name,
        predicate: "test",
        user,
      })
    );

    expect(result.current).toBe(true);
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
    const user = { email: "user@gmail.com", features: ["feature1", "feature2"], unknown: undefined };
    const { result } = renderHook(() => useIsFeatureEnabled({ name, user }));

    expect(result.current).toBe(expected);
  });
});
