import { ReactNode, useMemo, useState } from "react";
import FeatureEnableContext from "@/context/FeatureEnable/FeatureEnableContext";

export interface FeatureEnableProviderProps {
  children: ReactNode;
  features?: string[];
}

export const FeatureEnableProvider = ({ children, features }: FeatureEnableProviderProps) => {
  const initialFeatures = useMemo(() => features, [features]);
  const [featuresState, setFeatures] = useState<string[] | undefined>(initialFeatures);

  const value = useMemo(
    () => ({
      features: featuresState,
      setFeatures,
    }),
    [featuresState]
  );

  return <FeatureEnableContext.Provider value={value}>{children}</FeatureEnableContext.Provider>;
};

export default FeatureEnableProvider;
