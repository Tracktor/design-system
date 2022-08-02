import type { ReactNode } from "react";
import FeatureEnableContext, { defaultValueFeatureEnableContext } from "@/context/FeatureEnable/FeatureEnableContext";

export interface FeatureEnableProviderProps {
  children: ReactNode;
  features?: string[];
}

const FeatureEnableProvider = ({ children, features }: FeatureEnableProviderProps) => (
  <FeatureEnableContext.Provider value={features || defaultValueFeatureEnableContext}>{children}</FeatureEnableContext.Provider>
);

export default FeatureEnableProvider;
