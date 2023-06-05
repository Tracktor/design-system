import { createContext, Dispatch, SetStateAction } from "react";

export interface DefaultValueFeatureEnableContext {
  features?: string[];
  setFeatures: Dispatch<SetStateAction<string[] | undefined>>;
  disabledFeatures?: string[];
}

export const defaultValueFeatureEnableContext: DefaultValueFeatureEnableContext = {
  disabledFeatures: undefined,
  features: undefined,
  setFeatures: () => {},
};
export const FeatureEnableContext = createContext(defaultValueFeatureEnableContext);

export default FeatureEnableContext;
