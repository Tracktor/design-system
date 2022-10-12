import type { ReactNode } from "react";
import { useFeatureEnabled } from "@/hooks/useFeatureEnabled";

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
