import { createContext } from "react";

export const defaultValueFeatureEnableContext = [""];
export const FeatureEnableContext = createContext(defaultValueFeatureEnableContext);

export default FeatureEnableContext;
