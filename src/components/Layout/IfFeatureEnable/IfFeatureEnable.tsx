import type { ReactNode } from "react";
import useFeatureEnabled from "@/hooks/useFeatureEnabled";

export interface IfFeatureEnableProps {
  /**
   *  Feature name or array of feature names
   */
  name: string | string[];
  /**
   *  The content of the component
   */
  children?: ReactNode;
  /**
   * A fallback react to display when feature is not enabled for given name
   */
  fallback?: ReactNode;
  /**
   * Features optional if not given from provider
   */
  features?: string[];
}

export const IfFeatureEnable = ({ children, fallback, name, features }: IfFeatureEnableProps) => {
  const { getIsFeatureEnabled } = useFeatureEnabled();
  const isFeatureEnabled = getIsFeatureEnabled(name, features);

  if (isFeatureEnabled) {
    return <> {children} </>;
  }

  if (!isFeatureEnabled && fallback) {
    return <> {fallback} </>;
  }

  return null;
};

export default IfFeatureEnable;
