import { renderHook } from "@testing-library/react-hooks";
import { describe, it } from "vitest";
import { useColorMode } from "./useColorMode";

describe("Test useColorMode", () => {
  it("toggleColorMode is defined", () => {
    const { result } = renderHook(() => useColorMode());
    expect(result.current.toggleColorMode).toBeDefined();
  });
});
