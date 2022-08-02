import type { ReactNode } from "react";
import { useIsFeatureEnabled } from "@/hooks/useIsFeatureEnabled";

interface IsFeatureEnableProps {
  /**
   *  Feature name
   */
  name: string | string[];
  /**
   *  The content of the component
   */
  children: ReactNode;
  /**
   * A fallback react tree to show when user has not ABTest
   */
  fallback?: ReactNode;
  /**
   * Features optional if not given to provider
   */
  features?: string[];
}

const IfFeatureEnable = ({ children, fallback, name, features }: IsFeatureEnableProps) => {
  const featureEnabled = useIsFeatureEnabled({ features, name });

  if (featureEnabled) {
    return children;
  }

  if (!featureEnabled && fallback) {
    return fallback;
  }

  return null;
};

export default IfFeatureEnable;
