import { createContext, Dispatch, SetStateAction } from "react";

export interface DefaultValueFeatureEnableContext {
  features?: string[];
  setFeatures: Dispatch<SetStateAction<string[] | undefined>>;
}

export const defaultValueFeatureEnableContext: DefaultValueFeatureEnableContext = {
  features: undefined,
  setFeatures: () => {},
};
export const FeatureEnableContext = createContext(defaultValueFeatureEnableContext);

export default FeatureEnableContext;
