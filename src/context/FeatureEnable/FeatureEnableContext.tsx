import { createContext, Dispatch, SetStateAction } from "react";

export interface DefaultValueColorModeFeatureEnableContextContext {
  features?: string[];
  setFeatures: Dispatch<SetStateAction<string[] | undefined>>;
}

export const defaultValueFeatureEnableContext: DefaultValueColorModeFeatureEnableContextContext = {
  features: undefined,
  setFeatures: () => {},
};
export const FeatureEnableContext = createContext(defaultValueFeatureEnableContext);

export default FeatureEnableContext;
