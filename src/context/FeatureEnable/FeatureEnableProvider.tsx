import { ReactNode, useMemo, useState } from "react";
import FeatureEnableContext from "@/context/FeatureEnable/FeatureEnableContext";

export interface FeatureEnableProviderProps {
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Features allowed
   */
  features?: string[];
  /**
   * Features disabled (override features)
   */
  disabledFeatures?: string[];
}

export const FeatureEnableProvider = ({ children, features, disabledFeatures }: FeatureEnableProviderProps) => {
  const initialFeatures = useMemo(() => features, [features]);
  const [featuresState, setFeatures] = useState<string[] | undefined>(initialFeatures);

  const value = useMemo(
    () => ({
      disabledFeatures,
      features: featuresState,
      setFeatures,
    }),
    [disabledFeatures, featuresState],
  );

  return <FeatureEnableContext.Provider value={value}>{children}</FeatureEnableContext.Provider>;
};

export default FeatureEnableProvider;
