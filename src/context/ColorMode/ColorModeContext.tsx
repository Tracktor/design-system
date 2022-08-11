import { createContext, Dispatch, SetStateAction } from "react";

export interface DefaultValueColorModeContext {
  colorMode: "light" | "dark";
  toggleColorMode: Dispatch<SetStateAction<"light" | "dark" | unknown>>;
}

export const defaultValueColorModeContext: DefaultValueColorModeContext = {
  colorMode: "light",
  toggleColorMode: () => {},
};

const ColorModeContext = createContext(defaultValueColorModeContext);

export default ColorModeContext;
