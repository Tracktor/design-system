import ColorModeContext, { DefaultValueColorModeContext } from "@/context/ColorMode/ColorModeContext";

interface ColorModeProviderProps {
  children: ({ colorMode }: { colorMode: DefaultValueColorModeContext["colorMode"] }) => any;
}
const ColorModeConsumer = ({ children }: ColorModeProviderProps) => <ColorModeContext.Consumer>{children}</ColorModeContext.Consumer>;

export default ColorModeConsumer;
