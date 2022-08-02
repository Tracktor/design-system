import { createContext } from "react";

export const defaultValueFeatureEnableContext = [""];
const FeatureEnableContext = createContext(defaultValueFeatureEnableContext);

export default FeatureEnableContext;
