import type { ReactNode } from "react";
import { useIsFeatureEnabled } from "@/hooks/useIsFeatureEnabled";

export interface IfFeatureEnableProps {
  /**
   *  Feature name
   */
  name: string | string[];
  /**
   *  The content of the component
   */
  children?: ReactNode;
  /**
   * A fallback react tree to show when user has not ABTest
   */
  fallback?: ReactNode;
  /**
   * Features optional if not given to provider
   */
  features?: string[];
}

export const IfFeatureEnable = ({ children, fallback, name, features }: IfFeatureEnableProps) => {
  const featureEnabled = useIsFeatureEnabled({ features, name });

  if (featureEnabled) {
    return <> {children} </>;
  }

  if (!featureEnabled && fallback) {
    return <> {fallback} </>;
  }

  return null;
};

export default IfFeatureEnable;
